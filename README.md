# 📝 Tiptap Embed (Simple Editor)

This project is a **React + Vite** setup using **Tiptap UI Components – Simple Editor Template**.  
It’s meant to replicate the official [Tiptap Simple Editor demo](https://tiptap.dev/docs/ui-components/templates/simple-editor) locally and embed it later into a Bubble app.

---

## 🚀 Quick Setup

```bash
git clone https://github.com/alejosamudio/tiptap-embed.git
cd tiptap-embed
npm install
npm run dev
# open http://localhost:5173
⚠️ Current Issue
The editor loads but UI styles (toolbar, buttons, dropdowns, etc.) are missing — it looks like the default bare-bones Tiptap editor rather than the full styled Simple Editor.
This appears related to missing or unresolved SCSS imports from the Tiptap UI Components template.

🧠 What’s Already Been Done
Installed Tiptap UI Components via CLI
npx @tiptap/cli init simple-editor

Configured alias @/* in jsconfig.json and vite.config.js

Imported SCSS files per docs:

css
Copy code
@import './styles/_variables.scss';
@import './styles/_keyframe-animations.scss';
Installed sass as a dev dependency.

Despite this, the toolbar and layout remain unstyled.

🧩 Project Structure Snapshot
css
Copy code
src/
 ├─ components/
 │   ├─ simple-editor/
 │   ├─ tiptap-ui/
 │   └─ tiptap-templates/
 ├─ styles/
 │   ├─ _variables.scss
 │   ├─ _keyframe-animations.scss
 │   └─ index.css
 ├─ App.jsx
 ├─ main.jsx
 ├─ index.css
 └─ vite.config.js
🧾 Possible Causes (to investigate)
Missing index.scss import from tiptap-ui or tiptap-templates

Wrong relative paths for style imports in main.jsx

Alias configuration not resolving correctly in Vite

Version mismatch between UI Components and core Tiptap packages

🧰 Environment
OS: Windows 10 / 11

Node: v20+

Package Manager: npm

Framework: Vite + React

Tiptap UI Components: Installed via CLI (v2+)

🧑‍💻 Steps for Reviewers / Codex
Clone repo → git clone https://github.com/alejosamudio/tiptap-embed.git

Install deps → npm install

Run → npm run dev

Check console/dev-tools for SCSS or path errors

Inspect src/components/ for missing or misplaced index.scss

Compare with Tiptap Style Guide

🎯 Goal
Achieve full parity with the official Tiptap Simple Editor demo:

Toolbar with icons and dropdowns

Working highlight / color pickers

Proper theme styling and layout

Once working, this editor will be embedded into a Bubble app via iframe for custom AI-powered writing experiences.