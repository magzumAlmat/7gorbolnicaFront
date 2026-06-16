// Утилиты чтения контента новости для публичного сайта.
// Локаль content (content.ru / .kz / .en) может быть:
//   - обычным текстом (импортированные новости),
//   - строкой EditorJS-JSON,
//   - объектом EditorJS ({ blocks: [...] }) — так сохраняет админ-редактор.
// Приводим всё к простому тексту, чтобы публичные страницы не падали на .split.

function toEditorData(content) {
  if (typeof content === 'string') {
    const s = content.trim();
    if (s.startsWith('{')) {
      try {
        const parsed = JSON.parse(s);
        if (parsed && Array.isArray(parsed.blocks)) return parsed;
      } catch { /* не JSON — обычный текст */ }
    }
    return null;
  }
  if (content && Array.isArray(content.blocks)) return content;
  return null;
}

// Массив абзацев (для детальной страницы новости).
export function getParagraphs(content) {
  if (!content) return [];
  const data = toEditorData(content);
  if (data) {
    return data.blocks
      .map((b) => (b && b.data && typeof b.data.text === 'string' ? b.data.text.replace(/<[^>]+>/g, '') : ''))
      .filter(Boolean);
  }
  return String(content)
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean);
}

// Короткий анонс — первый абзац (опционально обрезанный до maxLen символов).
export function getExcerpt(content, maxLen) {
  const first = getParagraphs(content)[0] || '';
  return typeof maxLen === 'number' ? first.slice(0, maxLen) : first;
}
