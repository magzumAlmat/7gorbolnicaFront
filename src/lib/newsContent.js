// Утилиты чтения и рендеринга контента новости для публичного сайта.
// Контент новости может быть:
//   1. JSON-объектом EditorJS ({ blocks: [...] })
//   2. JSON-строкой EditorJS
//   3. HTML-разметкой (WordPress импорт)
//   4. Обычным текстом

export function toEditorData(content) {
  if (!content) return null;
  if (typeof content === 'object' && Array.isArray(content.blocks)) {
    return content;
  }
  if (typeof content === 'string') {
    const s = content.trim();
    if (s.startsWith('{')) {
      try {
        const parsed = JSON.parse(s);
        if (parsed && Array.isArray(parsed.blocks)) return parsed;
      } catch {
        // Не JSON — обычный HTML / текст
      }
    }
  }
  return null;
}

// Очистка и трансформация HTML из WordPress
export function cleanNewsHtml(html) {
  if (!html || typeof html !== 'string') return '';

  let cleaned = html;

  // 1. Удаляем <script> и <style>
  cleaned = cleaned.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  cleaned = cleaned.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // 2. Удаляем старые боковые виджеты WordPress (архивы, теги, меню, aside)
  cleaned = cleaned.replace(/<div[^>]*class="[^"]*(?:stm_sidebar|vc_wp_archives|vc_wp_tagcloud|widget_nav_menu)[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi, '');
  cleaned = cleaned.replace(/<aside\b[^<]*(?:(?!<\/aside>)<[^<]*)*<\/aside>/gi, '');
  cleaned = cleaned.replace(/<section\b[^>]*class="[^"]*vc_cta3-container[^"]*"[\s\S]*?<\/section>/gi, '');
  cleaned = cleaned.replace(/<div\b[^>]*class="[^"]*XTranslate[^"]*"[\s\S]*?<\/div>/gi, '');

  // 3. Преобразуем плагин WordPress PDF Poster в красивый плеер и кнопку скачивания
  cleaned = cleaned.replace(/<div[^>]*class="[^"]*wp-block-pdfp-pdf-poster[^"]*"[^>]*data-attributes=(["\x27])([\s\S]*?)\1[^>]*>[\s\S]*?<\/div>/gi, (match, quote, attrStr) => {
    const decoded = attrStr.replace(/&quot;/g, '"');
    let fileUrl = '';
    try {
      const parsed = JSON.parse(decoded);
      fileUrl = parsed.file || '';
    } catch {
      const m = decoded.match(/"file"\s*:\s*"([^"]+)"/);
      if (m) fileUrl = m[1].replace(/\\\//g, '/');
    }

    if (!fileUrl) return '';

    const rawName = fileUrl.split('/').pop() || 'Документ.pdf';
    let fileName = 'Документ PDF';
    try {
      fileName = decodeURIComponent(rawName).replace(/_/g, ' ');
    } catch {
      fileName = rawName.replace(/_/g, ' ');
    }

    return `
      <div class="pdf-viewer-card" style="margin: 28px 0; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; background: #FFFFFF; box-shadow: 0 4px 16px rgba(15,23,42,0.06);">
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; gap: 16px; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 220px;">
            <div style="width: 42px; height: 42px; border-radius: 8px; background: #FEE2E2; display: flex; align-items: center; justify-content: center; color: #DC2626; font-weight: 800; font-size: 13px; letter-spacing: 0.5px;">PDF</div>
            <div>
              <div style="font-weight: 700; color: #0F172A; font-size: 15px; word-break: break-word;">${fileName}</div>
              <div style="font-size: 12px; color: #64748B;">Официальный документ КазНИИСА</div>
            </div>
          </div>
          <a href="${fileUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; background: #0369A1; color: #FFFFFF; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 8px; transition: background 0.2s;">
            Открыть PDF &rarr;
          </a>
        </div>
        <div style="width: 100%; height: 680px; background: #F1F5F9;">
          <iframe src="${fileUrl}" style="width: 100%; height: 100%; border: none;" title="${fileName}"></iframe>
        </div>
      </div>
    `;
  });

  // 4. Очищаем пустые абзацы
  cleaned = cleaned.replace(/<p>\s*<\/p>/gi, '');
  cleaned = cleaned.replace(/<!--[\s\S]*?-->/g, '');

  return cleaned.trim();
}

// Абзацы для простого текста (обратная совместимость)
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

// Короткий чистый анонс без HTML-тегов и спецсимволов для карточек новостей
export function getExcerpt(content, maxLen = 160) {
  if (!content) return '';

  let text = '';
  const editorData = toEditorData(content);

  if (editorData) {
    text = editorData.blocks
      .map((b) => (b && b.data && typeof b.data.text === 'string' ? b.data.text : ''))
      .filter(Boolean)
      .join(' ');
  } else if (typeof content === 'string') {
    text = content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/data-attributes=["\x27][^"\x27]*["\x27]/gi, '')
      .replace(/<[^>]+>/g, ' ');
  }

  // Декодируем часто встречающиеся сущности и сжимаем пробелы
  text = text
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/\s+/g, ' ')
    .trim();

  return text.length > maxLen ? text.slice(0, maxLen).trim() + '...' : text;
}
