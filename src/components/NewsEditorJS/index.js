'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Checklist from '@editorjs/checklist';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';
import Warning from '@editorjs/warning';
import RawTool from '@editorjs/raw';
import LinkTool from '@editorjs/link';
import END_POINT from '../config/index';

const NewsEditorJS = ({ data, onChange, holderId = 'editorjs' }) => {
  const editorRef = useRef(null);
  const holderRef = useRef(null);
  // Храним последний onChange в ref, чтобы не пересоздавать редактор при каждом вводе.
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const getToken = () => {
    if (typeof window !== 'undefined') return localStorage.getItem('token');
    return null;
  };

  const initEditor = useCallback(() => {
    if (editorRef.current) return;

    // Очищаем холдер на случай, если предыдущий экземпляр (например, при двойном
    // монтировании в React StrictMode) оставил DOM — иначе редактор отрисуется дважды.
    const holderEl = typeof document !== 'undefined' ? document.getElementById(holderId) : null;
    if (holderEl) holderEl.innerHTML = '';

    const editor = new EditorJS({
      holder: holderId,
      placeholder: 'Нажмите Tab или "+" чтобы добавить блок...',
      data: data || { blocks: [] },
      inlineToolbar: ['bold', 'italic', 'marker', 'inlineCode', 'link'],
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: 'Заголовок',
            levels: [1, 2, 3, 4],
            defaultLevel: 2,
          },
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: { defaultStyle: 'unordered' },
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: `${END_POINT}/api/upload/editorjs`,
            },
            additionalRequestHeaders: {
              Authorization: `Bearer ${getToken()}`,
            },
            captionPlaceholder: 'Подпись к изображению',
            buttonContent: 'Загрузить изображение',
          },
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              vimeo: true,
              instagram: true,
              twitter: true,
              'twitch-video': true,
            },
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: 'Введите цитату',
            captionPlaceholder: 'Автор цитаты',
          },
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: { rows: 2, cols: 3 },
        },
        code: { class: Code },
        delimiter: { class: Delimiter },
        checklist: { class: Checklist, inlineToolbar: true },
        marker: { class: Marker },
        inlineCode: { class: InlineCode },
        warning: {
          class: Warning,
          config: {
            titlePlaceholder: 'Заголовок предупреждения',
            messagePlaceholder: 'Сообщение',
          },
        },
        raw: { class: RawTool },
        linkTool: {
          class: LinkTool,
          config: { endpoint: `${END_POINT}/api/fetch-url` },
        },
      },
      onChange: async (api) => {
        if (!editorRef.current) return; // редактор уничтожен — не сохраняем
        try {
          const savedData = await api.saver.save();
          if (onChangeRef.current) onChangeRef.current(savedData);
        } catch (e) {
          /* холдер мог быть удалён при размонтировании — игнорируем */
        }
      },
      i18n: {
        messages: {
          ui: {
            blockTunes: {
              toggler: { 'Click to tune': 'Настройки блока' },
            },
            inlineToolbar: {
              converter: { 'Convert to': 'Конвертировать в' },
            },
            toolbar: {
              toolbox: { 'Add': 'Добавить' },
            },
          },
          toolNames: {
            Text: 'Текст',
            Heading: 'Заголовок',
            List: 'Список',
            Quote: 'Цитата',
            Delimiter: 'Разделитель',
            Table: 'Таблица',
            Image: 'Изображение',
            Code: 'Код',
            Warning: 'Предупреждение',
            Checklist: 'Чеклист',
            'Raw HTML': 'HTML',
            Link: 'Ссылка',
            Marker: 'Маркер',
            'Inline Code': 'Код в строке',
            Bold: 'Жирный',
            Italic: 'Курсив',
          },
          tools: {
            header: {
              'Heading 1': 'Заголовок 1',
              'Heading 2': 'Заголовок 2',
              'Heading 3': 'Заголовок 3',
              'Heading 4': 'Заголовок 4',
            },
            list: {
              Unordered: 'Маркированный',
              Ordered: 'Нумерованный',
            },
            image: {
              Caption: 'Подпись',
              'Select an Image': 'Выбрать изображение',
              'With border': 'С рамкой',
              'Stretch image': 'Растянуть',
              'With background': 'С фоном',
            },
          },
          blockTunes: {
            delete: { Delete: 'Удалить' },
            moveUp: { 'Move up': 'Вверх' },
            moveDown: { 'Move down': 'Вниз' },
          },
        },
      },
    });

    editorRef.current = editor;
    // ВАЖНО: зависим только от holderId. data берётся при инициализации один раз;
    // onChange читается через ref. Иначе редактор пересоздаётся на каждый ввод и
    // падает с «element with ID ... is missing».
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [holderId]);

  useEffect(() => {
    initEditor();
    return () => {
      const inst = editorRef.current;
      editorRef.current = null; // помечаем как уничтоженный до асинхронного destroy
      if (inst && typeof inst.destroy === 'function') {
        try { inst.destroy(); } catch (e) { /* холдер уже удалён React-ом */ }
      }
    };
  }, [initEditor]);

  return (
    <div
      id={holderId}
      ref={holderRef}
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        padding: '16px 20px',
        minHeight: 400,
        background: '#fff',
        fontSize: 16,
        lineHeight: 1.7,
      }}
    />
  );
};

export default NewsEditorJS;
