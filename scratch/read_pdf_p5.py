import pypdf

reader = pypdf.PdfReader("MathTextbookPrimary5.pdf")
print("Total pages in Grade 5 textbook:", len(reader.pages))

# Search for TOC or "ບົດທີ" (Chapter) headings to understand structure
chapters = []
for i, page in enumerate(reader.pages):
    text = page.extract_text()
    if "ບົດທີ" in text:
        # Find lines containing "ບົດທີ"
        lines = text.split('\n')
        for line in lines:
            if "ບົດທີ" in line:
                chapters.append((i, line.strip()))

print("Found chapters headings in PDF:")
for page_idx, heading in chapters[:100]:
    print(f"Page {page_idx}: {heading}")
