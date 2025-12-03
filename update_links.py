
import os

file_path = 'index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    (
        '<!-- Classes e Objetos -->\n                <div class="concept-card">',
        '<!-- Classes e Objetos -->\n                <a href="pages/classes-objetos.html" class="concept-card">'
    ),
    (
        '<div class="concept-tag">Fundamento</div>\n                </div>',
        '<div class="concept-tag">Fundamento</div>\n                </a>'
    ),
    (
        '<!-- Encapsulamento -->\n                <div class="concept-card">',
        '<!-- Encapsulamento -->\n                <a href="pages/encapsulamento.html" class="concept-card">'
    ),
    (
        '<div class="concept-tag">Proteção</div>\n                </div>',
        '<div class="concept-tag">Proteção</div>\n                </a>'
    ),
    (
        '<!-- Abstração -->\n                <div class="concept-card">',
        '<!-- Abstração -->\n                <a href="pages/abstracao.html" class="concept-card">'
    ),
    (
        '<div class="concept-tag">Simplicidade</div>\n                </div>',
        '<div class="concept-tag">Simplicidade</div>\n                </a>'
    ),
    (
        '<!-- Tratamento de Exceções -->\n                <div class="concept-card">',
        '<!-- Tratamento de Exceções -->\n                <a href="pages/excecoes.html" class="concept-card">'
    ),
    (
        '<div class="concept-tag">Confiabilidade</div>\n                </div>',
        '<div class="concept-tag">Confiabilidade</div>\n                </a>'
    ),
    (
        '<!-- Coleções -->\n                <div class="concept-card">',
        '<!-- Coleções -->\n                <a href="pages/colecoes.html" class="concept-card">'
    ),
    (
        '<div class="concept-tag">Estruturas</div>\n                </div>',
        '<div class="concept-tag">Estruturas</div>\n                </a>'
    ),
    (
        '<!-- Streams -->\n                <div class="concept-card">',
        '<!-- Streams -->\n                <a href="pages/streams-serializacao.html" class="concept-card">'
    ),
    (
        '<div class="concept-tag">I/O</div>\n                </div>',
        '<div class="concept-tag">I/O</div>\n                </a>'
    ),
    (
        '<!-- Threads -->\n                <div class="concept-card">',
        '<!-- Threads -->\n                <a href="pages/threads.html" class="concept-card">'
    ),
    (
        '<div class="concept-tag">Concorrência</div>\n                </div>',
        '<div class="concept-tag">Concorrência</div>\n                </a>'
    ),
    (
        '<!-- Programação em Rede -->\n                <div class="concept-card">',
        '<!-- Programação em Rede -->\n                <a href="pages/redes.html" class="concept-card">'
    ),
    (
        '<div class="concept-tag">Distribuído</div>\n                </div>',
        '<div class="concept-tag">Distribuído</div>\n                </a>'
    )
]

# Normalize line endings to LF for matching if needed, or just handle it.
# The file likely has CRLF on Windows.
# We'll try to replace both CRLF and LF versions or just read as is.

for target, replacement in replacements:
    # Try exact match first
    if target in content:
        content = content.replace(target, replacement)
    else:
        # Try adjusting whitespace/newlines
        # This is a simple fallback
        target_crlf = target.replace('\n', '\r\n')
        if target_crlf in content:
            content = content.replace(target_crlf, replacement.replace('\n', '\r\n'))
        else:
            print(f"Could not find target: {target[:20]}...")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done.")
