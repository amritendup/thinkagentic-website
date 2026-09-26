# ThinkAgentic — Official Website

> **Tagline:** Think Smarter. Build with AI.  
> **Positioning:** AI Consulting • Agentic AI • Private AI • AI Education  
> **Domain:** [https://thinkagentic.in](https://thinkagentic.in)

ThinkAgentic is an AI consulting, education and technology initiative focused on making modern AI practical and accessible for businesses, professionals, and learners.

---

## Business Areas

1. **AI Consulting** — Practical guidance for organizations exploring Generative AI strategy, solution architecture, enterprise use cases, RAG assistants, integration, and adoption roadmaps.
2. **Agentic AI Solutions** — Exploring and designing AI systems capable of multi-step task reasoning, tool use, workflow automation, and human-in-the-loop controls.
3. **Private & Local AI** — Exploring architectures for running AI closer to enterprise data via local LLMs, private RAG, and on-premise infrastructure (*Status: Exploration / Coming Soon*).
4. **AI Teaching & Mentoring** — Practical, project-oriented learning covering LLMs, prompt engineering, RAG, agentic systems, responsible AI, and career mentoring for students and professionals.

---

## Target Audience

- **SMEs and businesses** seeking practical AI consulting and workflow automation
- **Technology professionals** interested in AI engineering, mentoring, and upskilling
- **Students, teachers, and parents** interested in practical, ethical AI literacy
- **Organizations** exploring Generative AI, Agentic workflows, and Private/Local AI

---

## Technology Stack

- **HTML5**: Semantic, accessible markup (WCAG compliant, ARIA attributes, skip link)
- **CSS3**: Custom design tokens, dark/light theme switching, responsive flex/grid layouts, clean typography (Inter & JetBrains Mono)
- **Vanilla JavaScript**: Lightweight client logic for theme persistence (`localStorage`), mobile navigation, FAQ accordion, and contact form UI
- **Zero Framework Overhead**: No React, Next.js, Node.js backend, databases, or external paid libraries
- **SEO & Search Standards**: Semantic metadata, Open Graph tags, canonical URLs, `robots.txt`, and `sitemap.xml`

---

## Repository Structure

```text
thinkagentic-website/
├── index.html           # Homepage (Hero, What ThinkAgentic does, 4 pillars, Why, Coming Soon, CTA, Footer)
├── about.html           # About ThinkAgentic (Mission, philosophy, core focus areas)
├── services.html        # Detailed breakdown of the 4 service disciplines & engagement scope
├── education.html       # AI Education & Mentoring (9 curriculum modules & adaptable audiences)
├── contact.html         # Direct contact channels, WhatsApp quick connect, and static inquiry form UI
├── favicon.svg          # High-resolution vector favicon
├── CNAME                # GitHub Pages custom domain configuration (thinkagentic.in)
├── robots.txt           # Search engine crawler instructions
├── sitemap.xml          # XML Sitemap for search indexing
├── css/
│   └── style.css        # Core stylesheet, CSS custom properties, responsive breakpoints
└── js/
    └── script.js        # Theme toggle, mobile drawer navigation, FAQ accordions, form UI logic
```

---

## Deployment to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initialize ThinkAgentic official static website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: **Settings** $\rightarrow$ **Pages**.
   - Under **Build and deployment** > **Source**, select `Deploy from a branch`.
   - Select `main` branch and `/ (root)` folder, then click **Save**.

3. **Custom Domain (`thinkagentic.in`)**:
   - The repository includes a [`CNAME`](CNAME) file pointing to `thinkagentic.in`.
   - In your DNS provider (e.g. Cloudflare, GoDaddy, Namecheap), configure:
     - `A` records pointing to GitHub Pages IPs:
       ```text
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
       ```
     - Or `CNAME` record for `www` pointing to `<username>.github.io`.
   - Check **Enforce HTTPS** in GitHub Pages settings once the certificate generates.

---

## Contact Form Integration Note

Because this website is hosted statically on GitHub Pages, the form on [`contact.html`](contact.html) is currently a front-end UI with direct `mailto:` fallback. To connect it to a live inbox service without a custom backend:

- **Formspree**: Set `action="https://formspree.io/f/{YOUR_ID}" method="POST"`
- **Google Forms**: Connect via form submit action or embed
- **Serverless**: Connect via `fetch()` to an AWS Lambda, Cloudflare Worker, or Netlify Function

---

## Brand Guidelines

- Brand Name: **ThinkAgentic** (Always single word with capitalized `T` and `A`, never "Thinkagentic").
- Tagline: **Think Smarter. Build with AI.**
- Inquiries: [hello@thinkagentic.in](mailto:hello@thinkagentic.in)

---

&copy; 2026 ThinkAgentic. All rights reserved.
