from pathlib import Path
from bs4 import BeautifulSoup
import yaml,mistune,datetime,re,html,zipfile
root=Path(__file__).resolve().parent.parent
# Clean page frontmatter, template content and generate actual cards
ap=root/'articles.html'; raw=ap.read_text(); raw=re.sub(r'^---\s*\nlayout: null\s*\npermalink: /articles.html\s*\n---\s*\n','',raw)
soup=BeautifulSoup(raw,'html.parser')
posts=[]
for f in sorted((root/'_posts').glob('*.md'),reverse=True):
    s=f.read_text();m=re.match(r'\A---\s*\n(.*?)\n---\s*\n(.*)',s,re.S)
    if not m:continue
    meta=yaml.safe_load(m.group(1));body=m.group(2)
    slug=re.sub(r'^\d{4}-\d{2}-\d{2}-','',f.stem)
    date=f.stem[:10]
    posts.append((meta,body,slug,date))
grid=soup.select_one('#article-grid');grid.clear()
for meta,body,slug,date in posts:
    card=BeautifulSoup(f'''<article class="article-card" data-category="{html.escape(meta['category'])}" data-search="{html.escape((meta['title']+' '+meta['description']).lower())}"><span class="article-category">{html.escape(meta['category'])}</span><h2><a href="articles/{slug}.html">{html.escape(meta['title'])}</a></h2><p>{html.escape(meta['description'])}</p><div class="article-card-footer"><time datetime="{date}">{datetime.date.fromisoformat(date):%d %b %Y}</time><a href="articles/{slug}.html">Read article →</a></div></article>''','html.parser')
    grid.append(card)
# ensure same head and header styling; remove redundant front matter
ap.write_text(str(soup),encoding='utf-8')
# Generate articles using normal site header/footer from education
base=BeautifulSoup((root/'education.html').read_text(),'html.parser')
article_dir=root/'articles';article_dir.mkdir(exist_ok=True)
for meta,body,slug,date in posts:
    doc=BeautifulSoup(str(base),'html.parser')
    for nav in doc.select('nav.main-nav a'):
        nav.attrs.pop('class',None)
        if nav.get('href')=='articles.html':nav['class']='active'
    for el in doc.select('[href],[src]'):
        for att in ('href','src'):
            v=el.get(att,'')
            if v and not v.startswith(('https:','http:','mailto:','tel:','#','/','data:')):el[att]='../'+v
    doc.title.string=meta['title']+' | ThinkAgentic'
    md=doc.head.find('meta',attrs={'name':'description'})
    if md:md['content']=meta['description']
    canon=doc.head.find('link',rel='canonical')
    if canon:canon['href']=f'https://thinkagentic.in/articles/{slug}.html'
    article_html=mistune.html(body)
    # change root-relative internal links to paths that work on localhost
    article_html=article_html.replace('href="/education.html"','href="../education.html"').replace('href="/contact.html"','href="../contact.html"').replace('href="/services.html"','href="../services.html"')
    markup=f'''<main><section class="article-hero"><div class="container"><p class="article-kicker"><a href="../articles.html">AI Insights</a> / {html.escape(meta['category'])}</p><h1>{html.escape(meta['title'])}</h1><p class="article-lede">{html.escape(meta['description'])}</p><p class="article-byline">ThinkAgentic · {datetime.date.fromisoformat(date):%d %B %Y}</p></div></section><section class="container article-body"><article class="article-prose">{article_html}</article><aside class="article-aside"><h3>Explore AI learning</h3><p>Board-aligned AI education, practical concepts and responsible use of AI.</p><a class="btn btn-primary" href="../education.html">Explore AI Education →</a><h3>More insights</h3><ul>{''.join(f'<li><a href="{s}.html">{html.escape(m["title"])}</a></li>' for m,b,s,d in posts if s!=slug)}</ul></aside></section></main>'''
    doc.main.replace_with(BeautifulSoup(markup,'html.parser'))
    script=BeautifulSoup('', 'html.parser').new_tag('script',type='application/ld+json')
    import json
    script.string=json.dumps({'@context':'https://schema.org','@type':'BlogPosting','headline':meta['title'],'description':meta['description'],'datePublished':date,'author':{'@type':'Organization','name':'ThinkAgentic'},'publisher':{'@type':'Organization','name':'ThinkAgentic'},'mainEntityOfPage':f'https://thinkagentic.in/articles/{slug}.html'})
    doc.head.append(script)
    (article_dir/(slug+'.html')).write_text(str(doc),encoding='utf-8')

# update sitemap with generated article routes
from xml.sax.saxutils import escape
urls=['','about.html','contact.html','education.html','services.html','articles.html']+[f'articles/{slug}.html' for m,b,slug,d in posts]
(root/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'  <url><loc>{escape("https://thinkagentic.in/"+x)}</loc></url>\n' for x in urls)+'</urlset>\n')
