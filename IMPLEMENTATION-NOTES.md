# ThinkAgentic Insights release

## What changed
- Added AI Insights navigation to existing pages.
- Added `articles.html` with live Jekyll post listing, search and category filtering.
- Added responsive article layout and three initial Markdown articles.
- Added Jekyll configuration with jekyll-sitemap for automatic sitemap generation.
- Kept existing education content, brand styling and enquiry links.
- Did not add batch timings, fees or pricing.
- Installed GA4 measurement ID G-TZ68SPKERL across all site pages and Jekyll articles.

## Publish on GitHub Pages
1. Copy these files into your existing repository, preserving CNAME and assets.
2. GitHub Pages > Settings > Pages: deploy from branch, root (/) if using the native Jekyll build.
3. GitHub Pages builds Jekyll automatically; verify articles.html and `/articles/.../` routes after deployment.
4. Check `https://thinkagentic.in/sitemap.xml` after build and resubmit it in Search Console.
5. To publish another article, add `_posts/YYYY-MM-DD-slug.md` with YAML title, description, category, and `layout: article`.
6. Future-dated posts do not publish until their dates; the included sample posts are dated October 20, 23, and 27, 2026.
7. GA4 is configured with G-TZ68SPKERL. Check Reports > Realtime after deployment. Tracked custom events: whatsapp_click, enquiry_form_open, email_click, education_cta_click. An opened external Google Form is NOT a confirmed submission. No contact details are transmitted in these custom events. Review the privacy policy and consent requirements before publishing.

## Important
- The initial articles are starter content. Review each article and verify current board syllabi before publishing academic-year-specific claims.
- `articles.html` uses Jekyll Liquid. Opening it directly from disk will not render the post list; test on GitHub Pages or a local Jekyll server.
