import pypdf

reader = pypdf.PdfReader("MathTextbookPrimary5.pdf")
print("Total pages:", len(reader.pages))

# Extract the first 15 pages for TOC
with open("scratch/toc_p5.txt", "w", encoding="utf-8") as f:
    for i in range(15):
        text = reader.pages[i].extract_text()
        f.write(f"\n=== PAGE {i} ===\n")
        f.write(text)

print("Saved first 15 pages to scratch/toc_p5.txt")
