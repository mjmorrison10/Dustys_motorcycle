#!/usr/bin/env python3
"""Static validation for Dusty's no-build website.

Checks parseability and common regressions without requiring a browser.
Run from repo root:
    python3 qa/static_validate.py
"""
from pathlib import Path
import json
import re
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = [ROOT / 'index.html', *sorted((ROOT / 'guides').glob('*.html')), *sorted((ROOT / 'services').glob('*.html'))]
JSON_FILES = [
    ROOT / 'manifest.webmanifest',
    ROOT / 'agent-permissions.json',
    ROOT / 'mcp-actions.json',
    ROOT / '.well-known' / 'agent-permissions.json',
    ROOT / '.well-known' / 'mcp-actions.json',
]
issues = []

for path in HTML_FILES:
    text = path.read_text(encoding='utf-8')
    rel = path.relative_to(ROOT)
    h1_count = len(re.findall(r'<h1\b', text, re.I))
    if h1_count != 1:
        issues.append(f'{rel}: expected exactly one H1, found {h1_count}')
    for tag in re.findall(r'<img[^>]*>', text, re.I):
        if 'alt=' not in tag:
            issues.append(f'{rel}: image missing alt: {tag[:120]}')
    for tag in re.findall(r'<iframe[^>]*>', text, re.I):
        if 'title=' not in tag:
            issues.append(f'{rel}: iframe missing title')
    for tag in re.findall(r'<a[^>]*target="_blank"[^>]*>', text, re.I):
        if 'rel=' not in tag:
            issues.append(f'{rel}: target=_blank link missing rel: {tag[:120]}')
    for block in re.findall(r'<script type="application/ld\+json">\s*(.*?)\s*</script>', text, re.S | re.I):
        try:
            json.loads(block)
        except Exception as exc:
            issues.append(f'{rel}: invalid JSON-LD: {exc}')

try:
    ET.parse(ROOT / 'sitemap.xml')
except Exception as exc:
    issues.append(f'sitemap.xml: invalid XML: {exc}')

for path in JSON_FILES:
    try:
        json.loads(path.read_text(encoding='utf-8'))
    except Exception as exc:
        issues.append(f'{path.relative_to(ROOT)}: invalid JSON: {exc}')

# Local asset references in HTML/CSS-ish strings.
blob = '\n'.join(path.read_text(encoding='utf-8') for path in HTML_FILES)
refs = set(re.findall(r'(?:src|href)=["\']([^"\']+)', blob)) | set(re.findall(r"url\(['\"]?([^)'\"]+)['\"]?\)", blob))
for ref in refs:
    if ref.startswith(('http', 'sms:', 'tel:', 'mailto:', '#', 'data:')) or ref in {'/', ''}:
        continue
    if ref.startswith('../'):
        candidate = (ROOT / 'guides' / ref).resolve()
    elif ref.startswith('/'):
        candidate = ROOT / ref[1:]
    else:
        candidate = ROOT / ref
    try:
        candidate.relative_to(ROOT)
    except ValueError:
        continue
    if not candidate.exists():
        issues.append(f'missing asset reference: {ref} -> {candidate.relative_to(ROOT)}')

if issues:
    print('Static validation failed:')
    for issue in issues:
        print(f'- {issue}')
    sys.exit(1)

print(f'Static validation passed for {len(HTML_FILES)} HTML files and {len(JSON_FILES)} JSON files.')
