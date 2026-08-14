import fitz
from pathlib import Path

pdf = Path('attached_assets/ShlokNavinPanjabi_cv_1786743525103.pdf')
out = Path('.agents/outputs/cv-pages')
out.mkdir(parents=True, exist_ok=True)

doc = fitz.open(pdf)
print(f'pages={doc.page_count}')
print(f'metadata={doc.metadata}')
for i, page in enumerate(doc):
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    target = out / f'page-{i+1}.png'
    pix.save(target)
    print(target)
    text = page.get_text('text')
    print(f'--- page {i+1} text ---')
    print(text[:4000])
