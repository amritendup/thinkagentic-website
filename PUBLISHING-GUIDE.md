# Publishing AI Insights articles (V2.1)

The live website is **static HTML** and works both with `python3 -m http.server 8000` and GitHub Pages. Markdown sources remain in `_posts/`.

To publish a new article:
1. Add `_posts/YYYY-MM-DD-short-slug.md` with YAML front matter (`title`, `description`, `category`) and article Markdown.
2. Run `python3 tools/build_articles.py` after installing `beautifulsoup4`, `PyYAML` and `mistune`.
3. Preview with `python3 -m http.server 8000` and open `/articles.html`.
4. Commit the Markdown, generated HTML, updated articles index and sitemap.

The generated HTML is served directly; no Jekyll or Liquid engine is required. Existing GA4 tracking ID `G-TZ68SPKERL` is preserved.
