# Flamebase — Pitch Deck & Presentation Website

An interactive, animated presentation website for **Flamebase** (an open-source, faster Firebase alternative built in Rust). Engineered with **React + Vite + Tailwind CSS + Framer Motion**, following the visual style of `template.pptx` (deep maroon `#70020F`, light pink `#FEDEE1`, bold `Anton` headings, and 16:9 widescreen layout).

---

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🌐 Deploy to Hosting Platforms

The site builds into static files in `dist/` with a single command:
```bash
npm run build
```

### Option 1: Deploy to Vercel (Recommended)
1. Install Vercel CLI (or push to GitHub and import directly at [vercel.com](https://vercel.com)):
   ```bash
   npx vercel
   ```
2. The included `vercel.json` automatically configures Vite build outputs and routing.

### Option 2: Deploy to Netlify
1. Run with Netlify CLI (or drag and drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop)):
   ```bash
   npx netlify deploy --prod
   ```
2. The included `netlify.toml` handles the build and redirects.

### Option 3: Deploy to GitHub Pages
1. Build the distribution folder:
   ```bash
   npm run build
   ```
2. Push the `dist/` folder to your `gh-pages` branch or configure GitHub Actions.

---

## ✏️ How to Edit Presentation Texts & Content

All presentation texts, titles, descriptions, bullets, ports, team credits, and links are centralized in a single JSON file in the project root:

📄 **[presentationData.json](file:///home/saikat/Desktop/sem5presentations/presentationData.json)**

Simply open `presentationData.json` and change any words, names, or sentences. Every slide automatically updates!

---

## ⌨️ Presentation Keyboard Controls

| Key | Action |
| :--- | :--- |
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `Home` / `End` | Jump to First / Last slide |
| `F` | Toggle Fullscreen mode |
| `O` or `G` | Toggle 10-slide visual overview grid |
| `?` | Show keyboard shortcuts dialog |
| `Esc` | Close overview or modals |

---

## 📑 Slide Deck Outline (10 Approved Slides)

1. **Slide 1 — Cover:** `FLAMEBASE`, tagline, animated SVG flame with particles, developers & supervisor.
2. **Slide 2 — What is Firebase?:** Introductory architecture diagram (Client $\rightarrow$ SDK $\rightarrow$ Google-hosted services) & The Flamebase Shift.
3. **Slide 3 — Motivation & Problem:** No infrastructure control, per-operation billing, vendor lock-in (speed framed as Rust design goal).
4. **Slide 4 — Proposed Solution:** Open-source, self-hosted, drop-in SDK compatibility, predictable flat cost, one-command install.
5. **Slide 5 — Key Features & Ports:** Auth (`:9099`), Database on redb (`:8080`), Functions (`:5001`), Storage (`:9199`), Angular Dashboard (`:4000`).
6. **Slide 6 — Stakeholders & Target Users:** 5 primary stakeholder groups & 3 target user segments.
7. **Slide 7 — Technologies & Tools:** Layered systems matrix (Rust + Axum, redb, flamebase-js-sdk, Angular, Docker).
8. **Slide 8 — Development Methodology:** Phased sequential service builds + continuous SDK-driven verification (Phase 1 complete).
9. **Slide 9 — Codebase Structure:** 3 repositories (`flamebase-js-sdk`, `flamebase` monorepo, `installer`).
10. **Slide 10 — Team & Thank You:** Developers & Supervisor cards, Apache-2.0 license, and GitHub repository links.
