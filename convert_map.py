import re
import sys

def style_to_obj(style_str):
    parts = style_str.split(';')
    obj = {}
    for p in parts:
        if ':' in p:
            k, v = p.split(':', 1)
            k = k.strip()
            v = v.strip()
            # convert dash-case to camelCase
            k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            obj[k] = v
    return obj

def convert_html_to_jsx(html):
    # class -> className
    html = html.replace(' class=', ' className=')
    # tabindex -> tabIndex
    html = html.replace(' tabindex=', ' tabIndex=')
    # frameborder -> frameBorder
    html = html.replace(' frameborder=', ' frameBorder=')
    
    # style strings -> objects
    def style_repl(m):
        style_str = m.group(1)
        # Handle &quot; in style
        style_str = style_str.replace('&quot;', '"')
        obj = style_to_obj(style_str)
        # Convert values to strings
        # Be careful with single quotes in values
        obj_str = ", ".join([f"{k}: '{v.replace(\"'\", \"\\\\'\")}'" for k, v in obj.items()])
        return f"style={{{{{obj_str}}}}}"
    
    html = re.sub(r'style="([^"]*)"', style_repl, html)
    
    # Self-closing tags
    for tag in ['img', 'br', 'hr', 'input', 'iframe', 'meta', 'link']:
        html = re.sub(rf'<{tag}([^>]*[^/])>', rf'<{tag}\1 />', html)

    # slot -> Box
    html = html.replace('<slot>', '<Box>').replace('</slot>', '</Box>')

    return html

if __name__ == "__main__":
    with open('map_html.txt', 'r') as f:
        html_input = f.read()
    print(convert_html_to_jsx(html_input))
