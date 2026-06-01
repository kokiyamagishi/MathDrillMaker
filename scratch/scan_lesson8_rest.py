import pypdf

reader = pypdf.PdfReader('MathTextbookSecondary1.pdf')

for idx in range(63, 70):
    text = reader.pages[idx].extract_text()
    if text:
        print(f"--- PDF Page {idx+1} (0-indexed {idx}) ---")
        print(text[:1500])
