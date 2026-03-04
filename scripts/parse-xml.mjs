import { readFileSync } from 'fs';

const xml = readFileSync('c:/Users/ravi/New West Fraser Website/wesgroup-clone/westfraserdevelopment.WordPress.2026-03-02.xml', 'utf8');

const cdataRe = (tag) => new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'g');
const simpleRe = (tag) => new RegExp(`<${tag}>([^<]*)<\\/${tag}>`, 'g');

function firstMatch(str, tag) {
  const r = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`);
  const m = str.match(r);
  if (m) return m[1].trim();
  const r2 = new RegExp(`<${tag}>([^<]*)<\\/${tag}>`);
  const m2 = str.match(r2);
  return m2 ? m2[1].trim() : '';
}

const items = xml.split('<item>').slice(1);
const pages = [];
const posts = [];

items.forEach(item => {
  const postType = firstMatch(item, 'wp:post_type');
  const status = firstMatch(item, 'wp:status');
  const title = firstMatch(item, 'title');
  const slug = firstMatch(item, 'wp:post_name');
  const excerpt = firstMatch(item, 'excerpt:encoded');
  const link = firstMatch(item, 'link');

  // Get all meta fields
  const metaBlocks = [...item.matchAll(/<wp:postmeta>([\s\S]*?)<\/wp:postmeta>/g)];
  const meta = {};
  metaBlocks.forEach(mb => {
    const key = firstMatch(mb[1], 'wp:meta_key');
    const val = firstMatch(mb[1], 'wp:meta_value');
    if (key) meta[key] = val;
  });

  if (status === 'publish' && title && title.length > 1) {
    const obj = { title, slug, link, excerpt: excerpt.slice(0, 300), meta: {} };
    // keep only useful meta
    ['_thumbnail_id', 'page_show_title', '_wp_page_template'].forEach(k => {
      if (meta[k]) obj.meta[k] = meta[k];
    });

    if (postType === 'page') pages.push(obj);
    if (postType === 'post') posts.push(obj);
  }
});

console.log('=== PUBLISHED PAGES ===');
pages.forEach(p => {
  console.log(`\nTitle: ${p.title}`);
  console.log(`Slug:  ${p.slug}`);
  console.log(`Link:  ${p.link}`);
  if (p.excerpt) console.log(`Excerpt: ${p.excerpt.replace(/<[^>]+>/g,'').slice(0,200)}`);
});

console.log('\n\n=== BLOG POSTS ===');
posts.forEach(p => {
  console.log(`\nTitle: ${p.title}`);
  console.log(`Slug:  ${p.slug}`);
  if (p.excerpt) console.log(`Excerpt: ${p.excerpt.replace(/<[^>]+>/g,'').slice(0,200)}`);
});

// Also extract attachment URLs with their post_title (filename hint)
console.log('\n\n=== KEY PROJECT IMAGES (named attachments) ===');
items.forEach(item => {
  const postType = firstMatch(item, 'wp:post_type');
  if (postType !== 'attachment') return;
  const url = firstMatch(item, 'wp:attachment_url');
  const t = firstMatch(item, 'title');
  // Only show images that look project-related
  if (url && (url.includes('aura') || url.includes('cedar') || url.includes('agnes') ||
      url.includes('sigma') || url.includes('beverly') || url.includes('ramada') ||
      url.includes('best-western') || url.includes('hyatt') || url.includes('kelowna') ||
      url.includes('evergreen') || url.includes('wfd-') || url.includes('cover') ||
      url.includes('Living') || url.includes('Bedroom') || url.includes('exter') ||
      url.includes('Lobby') || url.includes('prespective') || url.includes('Warehouse'))) {
    console.log(`${t || '(no title)'} => ${url}`);
  }
});
