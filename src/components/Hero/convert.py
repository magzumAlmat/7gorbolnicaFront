import re
import sys

def style_to_obj(style_str):
    style_str = style_str.replace('&quot;', '"')
    parts = style_str.split(';')
    obj_pairs = []
    for p in parts:
        if ':' in p:
            k, v = p.split(':', 1)
            k = k.strip()
            v = v.strip()
            k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            # escape single quotes in value
            v = v.replace("'", "\\'")
            obj_pairs.append(f"{k}: '{v}'")
    return "{{ " + ", ".join(obj_pairs) + " }}"

def convert(html):
    html = html.replace(' class=', ' className=')
    html = html.replace(' tabindex=', ' tabIndex=')
    html = html.replace(' frameborder=', ' frameBorder=')
    
    # style="..." -> style={{{...}}}
    html = re.sub(r'style="([^"]*)"', lambda m: f'style={style_to_obj(m.group(1))}', html)
    
    # self-closing tags
    for tag in ['img', 'br', 'hr', 'input', 'iframe']:
        html = re.sub(rf'<{tag}([^>]*[^/])>', rf'<{tag}\1 />', html)
        
    return html

if __name__ == "__main__":
    content = sys.stdin.read()
    print(convert(content))
