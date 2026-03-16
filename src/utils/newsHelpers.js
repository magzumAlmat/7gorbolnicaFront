export const getFirstImage = (documentContent) => {
  try {
    const content = typeof documentContent === 'string'
      ? JSON.parse(documentContent)
      : documentContent;

    if (Array.isArray(content)) {
      for (const node of content) {
        if (node.type === 'image' && node.url) {
          return node.url;
        }
        if (Array.isArray(node.children)) {
            for (const child of node.children) {
                if (child.type === 'image' && child.url) {
                    return child.url;
                }
            }
        }
      }
    }
  } catch (e) {
    console.error("Error parsing document content for image:", e);
  }
  return null;
};



export const getSnippet = (documentContent, maxLength = 200) => {
    try {
      const content = typeof documentContent === 'string' ? JSON.parse(documentContent) : documentContent;
      if (Array.isArray(content)) {
        for (const node of content) {
          if (node.type === 'paragraph') {
            const text = node.children.map(child => child.text).join('');
            if (text) {
              return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
            }
          }
        }
      }
    } catch (e) {
        console.error("Error parsing document content for snippet:", e);
    }
    return 'No preview available.';
  };
