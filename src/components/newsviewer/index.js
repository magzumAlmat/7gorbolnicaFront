'use client';

import React, { useMemo, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact, useSelected, useFocused } from 'slate-react';

const initialValue = [
  { type: 'paragraph', children: [{ text: '' }] },
];

// Copied from DocumentEditor
const Element = (props) => {
    const { attributes, children, element } = props;
    const style = { textAlign: element.align };
    switch (element.type) {
        case 'heading-one':
            return <h1 style={style} {...attributes}>{children}</h1>;
        case 'heading-two':
            return <h2 style={style} {...attributes}>{children}</h2>;
        case 'heading-three':
            return <h3 style={style} {...attributes}>{children}</h3>;
        case 'code-block':
            return <pre style={{ ...style, background: '#f4f4f4', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', overflowX: 'auto' }} {...attributes}><code>{children}</code></pre>;
        case 'block-quote':
            return <blockquote style={{ ...style, borderLeft: '4px solid #007bff', paddingLeft: '16px', margin: '16px 0', color: '#555' }} {...attributes}>{children}</blockquote>;
        case 'image':
            return <Image {...props} />;
        default:
            return <p style={style} {...attributes}>{children}</p>;
    }
};

// Copied from DocumentEditor
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.code) children = <code style={{ background: '#eee', padding: '2px 4px', borderRadius: '3px', fontSize: '90%' }}>{children}</code>;
  return <span {...attributes}>{children}</span>;
};

// Copied from DocumentEditor
const Image = ({ attributes, children, element }) => {
  const selected = useSelected()
  const focused = useFocused()
  console.log("Rendering Image:", element.url);
  return (
    <div {...attributes}>
      <div contentEditable={false} style={{ marginBottom: '15px' }}>
        <img
          src={element.url}
          alt={element.alt || "News image"}
          style={{
            display: 'block',
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '500px',
            borderRadius: '8px',
            boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : '0 2px 8px rgba(0,0,0,0.1)',
          }}
          onError={(e) => {
            console.error("Image failed to load:", element.url);
            e.target.style.display = 'none';
          }}
        />
      </div>
      {children}
    </div>
  )
}


const NewsViewer = ({ newsArticle }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const initialState = useMemo(() => {
    if (!newsArticle) return initialValue;
    
    try {
      const content = typeof newsArticle.document_content === 'string'
        ? JSON.parse(newsArticle.document_content)
        : newsArticle.document_content;

      console.log("NewsViewer Content Debug:", {
        id: newsArticle.id,
        name: newsArticle.document_name,
        contentType: typeof newsArticle.document_content,
        parsedCount: Array.isArray(content) ? content.length : 'not an array'
      });

      if (Array.isArray(content) && content.length > 0) {
        return content;
      }
    } catch (e) {
        console.error("NewsViewer - Failed to parse document content:", e);
    }
    return initialValue;
  }, [newsArticle]);

  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  if (!newsArticle) return <p>Загрузка...</p>;

  return (
    <div className="news-viewer-content" style={{ padding: '20px 0', border: '1px solid #eee', borderRadius: '8px', marginTop: '20px' }}>
        <h2 style={{ color: '#002e5b', marginBottom: '24px', fontWeight: 700, borderBottom: '2px solid #2887B6', paddingBottom: '10px' }}>
          {newsArticle.document_name}
        </h2>
        
        {/* Slate Editor */}
        <Slate key={newsArticle.id || 'new'} editor={editor} initialValue={initialState}>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                readOnly
                style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#333' }}
            />
        </Slate>

        {/* Fallback rendering if Slate is empty or fails (invisible test) */}
        {initialState === initialValue && (
            <div style={{ color: 'red', fontSize: '0.8rem' }}>
              Контент не найден или ошибка парсинга.
            </div>
        )}
    </div>
  );
};

export default NewsViewer;
