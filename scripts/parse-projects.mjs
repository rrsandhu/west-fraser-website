import { readFileSync } from 'fs';

const xml = readFileSync('c:/Users/ravi/New West Fraser Website/wesgroup-clone/westfraserdevelopment.WordPress.2026-03-02.xml', 'utf8');

function firstMatch(str, tag) {
  const r = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`);
  const m = str.match(r);
  if (m) return m[1].trim();
  const r2 = new RegExp(`<${tag}>([^<]*)<\\/${tag}>`);
  const m2 = str.match(r2);
  return m2 ? m2[1].trim() : '';
}

const slugs = [
  'aura-3','aura-1-2-2','aura-1','aura-2','cedar-lane','agnes-development',
  'sigma','rhodes','signature-square','everett','everett-residential',
  'mission-village','radley','85-schooner',
  'west-fraser-business-centre','surrey-city-centre','evergreen-mall','avs-windows',
  'beverly','hyatt-place-kelowna','hyatt-place-house-tacc',
  'ramada-inn-cold-lake','best-western-plus-moosomin','best-western-kindersley',
  'best-western-plus-estevan','sigma-inn-melville','sigma-inn-hudson-hope',
  'tanglefoot-bar-grill','montana-bbq'
];

const items = xml.split('<item>').slice(1);
items.forEach(item => {
  const slug = firstMatch(item, 'wp:post_name');
  if (!slugs.includes(slug)) return;

  const title = firstMatch(item, 'title');
  const status = firstMatch(item, 'wp:status');
  const excerpt = firstMatch(item, 'excerpt:encoded');
  const content = firstMatch(item, 'content:encoded');

  // strip HTML tags
  const stripHtml = s => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g,' ').trim().slice(0,400);

  // Get meta
  const metaBlocks = [...item.matchAll(/<wp:postmeta>([\s\S]*?)<\/wp:postmeta>/g)];
  const meta = {};
  metaBlocks.forEach(mb => {
    const key = firstMatch(mb[1], 'wp:meta_key');
    const val = firstMatch(mb[1], 'wp:meta_value');
    if (key && !key.startsWith('_elementor') && !key.startsWith('_wp_old') && key.length < 50) {
      meta[key] = val.slice(0, 200);
    }
  });

  console.log(`\n===== ${title} (${slug}) =====`);
  console.log(`Status: ${status}`);
  if (excerpt) console.log(`Excerpt: ${stripHtml(excerpt)}`);
  if (content) console.log(`Content snippet: ${stripHtml(content).slice(0,300)}`);
  const usefulMeta = Object.entries(meta).filter(([k]) =>
    !k.includes('_') || ['_thumbnail_id','post_status'].includes(k)
  );
  if (usefulMeta.length) console.log('Meta:', JSON.stringify(Object.fromEntries(usefulMeta), null, 2));
});
