# Curriculum PDF Generation Guide

## Overview
Since Cloudflare Pages runs in a Workers environment without Node.js PDF libraries, we'll use browser-based PDF generation or external services.

## Method 1: Browser Print-to-PDF (Manual, Free)
**Best for**: One-time PDF creation

### Steps:
1. Open each markdown file in VS Code or GitHub
2. Use VS Code Markdown Preview or GitHub's rendered view
3. Use browser's Print function → Save as PDF
4. Apply these print settings:
   - Layout: Portrait
   - Margins: Normal
   - Background graphics: Enabled
   - Scale: 100%

### Files to Convert:
- COMPLETE_CURRICULUM.md → COMPLETE_CURRICULUM.pdf
- CAMPUS_1_COMPLETE.md → CAMPUS_1_COMPLETE.pdf
- CAMPUS_2-8_COMPLETE.md → CAMPUS_2-8_COMPLETE.pdf
- CURRICULUM_IMPLEMENTATION_SUMMARY.md → CURRICULUM_IMPLEMENTATION_SUMMARY.pdf
- IMPLEMENTATION_ROADMAP.md → IMPLEMENTATION_ROADMAP.pdf

---

## Method 2: Automated Markdown to PDF (Recommended)
**Best for**: Professional PDFs with branding

### Option A: Using Pandoc (Local Tool)
```bash
# Install pandoc (one-time)
# Mac: brew install pandoc
# Linux: sudo apt-get install pandoc
# Windows: choco install pandoc

# Convert to PDF
pandoc COMPLETE_CURRICULUM.md -o COMPLETE_CURRICULUM.pdf \
  --pdf-engine=xelatex \
  --variable urlcolor=blue \
  --variable geometry:margin=1in \
  --toc \
  --number-sections

# Batch convert all files
for file in COMPLETE_CURRICULUM.md CAMPUS_1_COMPLETE.md CAMPUS_2-8_COMPLETE.md CURRICULUM_IMPLEMENTATION_SUMMARY.md IMPLEMENTATION_ROADMAP.md; do
  pandoc "$file" -o "${file%.md}.pdf" \
    --pdf-engine=xelatex \
    --variable urlcolor=blue \
    --variable geometry:margin=1in \
    --toc \
    --number-sections
done
```

### Option B: Using md-to-pdf (Node.js)
```bash
# Install (one-time)
npm install -g md-to-pdf

# Convert single file
md-to-pdf COMPLETE_CURRICULUM.md

# Batch convert
md-to-pdf COMPLETE_CURRICULUM.md CAMPUS_1_COMPLETE.md CAMPUS_2-8_COMPLETE.md CURRICULUM_IMPLEMENTATION_SUMMARY.md IMPLEMENTATION_ROADMAP.md
```

### Option C: Using grip + wkhtmltopdf
```bash
# Install grip (renders GitHub-style markdown)
pip install grip

# Install wkhtmltopdf
# Mac: brew install wkhtmltopdf
# Linux: sudo apt-get install wkhtmltopdf
# Windows: Download from wkhtmltopdf.org

# Convert
grip COMPLETE_CURRICULUM.md --export COMPLETE_CURRICULUM.html
wkhtmltopdf COMPLETE_CURRICULUM.html COMPLETE_CURRICULUM.pdf
```

---

## Method 3: Online PDF Conversion Services (Easiest)
**Best for**: Quick conversion without installing tools

### Services:
1. **Markdown to PDF** (markdowntopdf.com)
   - Upload .md file
   - Download PDF
   - Free, no signup

2. **CloudConvert** (cloudconvert.com)
   - Upload markdown
   - Convert to PDF
   - Free tier: 25 conversions/day

3. **Dillinger** (dillinger.io)
   - Paste markdown
   - Export as PDF
   - Free, browser-based

---

## Method 4: Professional Styled PDFs (Best Quality)
**Best for**: Client-facing, branded PDFs

### Using Canva (Recommended for Non-Technical)
1. Go to Canva.com
2. Create "Document" project
3. Copy/paste content from markdown
4. Apply TSG University branding:
   - Colors: Blue (#3B82F6), Purple (#8B5CF6), Gold (#F59E0B)
   - Fonts: Modern sans-serif (Inter, Poppins)
   - Logo: Add university logo/icon
5. Export as PDF (high quality)

### Using Adobe InDesign (Professional)
1. Import markdown content
2. Apply professional template
3. Add table of contents
4. Add page numbers, headers, footers
5. Export as Print-Quality PDF

### Using LaTeX (Technical, Best Typography)
```latex
\documentclass[12pt,letterpaper]{article}
\usepackage[utf8]{inputenc}
\usepackage{hyperref}
\usepackage{geometry}
\geometry{margin=1in}

\title{The Speculators Guild University\\Complete Curriculum}
\author{TSG University}
\date{\today}

\begin{document}
\maketitle
\tableofcontents
\newpage

% Insert markdown-converted LaTeX content here

\end{document}
```

---

## Hosting PDFs for Download

### Option A: Cloudflare R2 (Recommended)
**Cost**: $0.015/GB storage, $0.01/GB egress  
**Setup**:
```bash
# Create R2 bucket
npx wrangler r2 bucket create tsg-university-docs

# Upload PDFs
npx wrangler r2 object put tsg-university-docs/COMPLETE_CURRICULUM.pdf \
  --file=./COMPLETE_CURRICULUM.pdf

# Get public URL (enable public access in dashboard)
# URL: https://pub-xxxx.r2.dev/COMPLETE_CURRICULUM.pdf
```

### Option B: GitHub Releases (Free)
**Cost**: Free  
**Setup**:
1. Push PDFs to GitHub repo
2. Create a Release (v1.0.0)
3. Attach PDFs as release assets
4. Link to release download URLs

### Option C: Vercel Blob (Simple)
**Cost**: Free tier (100GB bandwidth/mo)  
**Setup**:
```bash
# Install Vercel CLI
npm i -g vercel

# Upload
vercel blob upload ./COMPLETE_CURRICULUM.pdf

# Get URL
# URL: https://blob.vercel-storage.com/xxx/COMPLETE_CURRICULUM.pdf
```

---

## Quick Start Workflow (Recommended)

### Step 1: Convert to PDF (Choose One)
```bash
# Easiest: md-to-pdf
npm install -g md-to-pdf
md-to-pdf *.md

# OR: Pandoc (better quality)
for file in *.md; do
  pandoc "$file" -o "${file%.md}.pdf" --pdf-engine=xelatex --toc
done
```

### Step 2: Upload PDFs
```bash
# Create public directory for PDFs
mkdir -p public/pdfs

# Move PDFs
mv *.pdf public/pdfs/

# PDFs now accessible at:
# https://tsg-university.pages.dev/pdfs/COMPLETE_CURRICULUM.pdf
```

### Step 3: Update Downloads Page
See updated downloads route in src/index.tsx

---

## File Naming Convention
- **COMPLETE_CURRICULUM.pdf** - Master curriculum (31 KB → ~500 KB PDF)
- **CAMPUS_1_COMPLETE.pdf** - Campus 1 detailed (19 KB → ~300 KB PDF)
- **CAMPUS_2-8_COMPLETE.pdf** - Remaining campuses (24 KB → ~400 KB PDF)
- **CURRICULUM_IMPLEMENTATION_SUMMARY.pdf** - Executive summary (20 KB → ~350 KB PDF)
- **IMPLEMENTATION_ROADMAP.pdf** - Complete implementation guide (31 KB → ~500 KB PDF)

**Total PDF Package**: ~2 MB (highly compressed)

---

## Branding Guidelines for PDFs

### Cover Page Template
```
[TSG University Logo]

THE SPECULATORS GUILD UNIVERSITY
Complete 320-Lesson Curriculum

64 Weeks | 8 Campuses | 740+ Hours
Trading Mastery + Complete Life Transformation

Version 1.0
October 2025

© The Speculators Guild University
All Rights Reserved
```

### Header/Footer
- **Header**: TSG University | [Document Title]
- **Footer**: Page X of Y | © 2025 TSG University | tsg-university.com

### Color Scheme
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Accent**: Gold (#F59E0B)
- **Text**: Dark Gray (#1F2937)
- **Background**: White (#FFFFFF)

---

## Next Steps

1. **Choose conversion method** (recommend: md-to-pdf or Pandoc)
2. **Convert all 5 markdown files to PDF**
3. **Add branding and styling** (optional but recommended)
4. **Upload PDFs to hosting** (Cloudflare R2 or public folder)
5. **Update download links in website**
6. **Test all download links**
7. **Commit changes and deploy**

**Ready to create professional PDF curriculum documents!**
