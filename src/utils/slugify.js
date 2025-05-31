export default function slugify(text) {
  if (typeof text !== 'string') {
    if (text == null) return '';
    text = String(text);
  }
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}