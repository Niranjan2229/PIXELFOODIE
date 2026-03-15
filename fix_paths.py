import os
import re

def fix_paths():
    dirs = ['templates', 'static', 'data']
    for d in dirs:
        if not os.path.exists(d):
            continue
        for root, _, files in os.walk(d):
            for file in files:
                if file.endswith(('.html', '.js')):
                    path = os.path.join(root, file)
                    try:
                        with open(path, 'r', encoding='utf-8') as f:
                            content = f.read()
                        
                        original_content = content
                        
                        # 1. assets/ -> /static/assets/
                        # We use lookbehind to avoid double prefixing if /static/ is already there
                        # But Python re.sub lookbehind must be fixed width.
                        # Instead, let's just replace all /static/assets/ to assets/ first, then all assets/ to /static/assets/
                        content = content.replace('/static/assets/', 'assets/')
                        content = content.replace('assets/', '/static/assets/')
                        
                        # 2. specific files
                        if file.endswith('.html'):
                            content = content.replace('/static/script.js', 'script.js')
                            content = content.replace('script.js', '/static/script.js')
                            
                            content = content.replace('/static/styles.css', 'styles.css')
                            content = content.replace('styles.css', '/static/styles.css')
                            
                            content = content.replace('href="index.html"', 'href="/"')
                            content = content.replace("href='index.html'", 'href="/"')
                            
                            # data/ -> /data/
                            content = content.replace('/data/', 'data/')
                            content = content.replace('data/', '/data/')
                        
                        if content != original_content:
                            with open(path, 'w', encoding='utf-8') as f:
                                f.write(content)
                            print(f'Fixed paths in {path}')
                            
                    except Exception as e:
                        print(f'Error processing {path}: {e}')

if __name__ == "__main__":
    fix_paths()
