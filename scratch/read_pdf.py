import pypdf

reader = pypdf.PdfReader("MathTextbookPrimary3.pdf")
print("Total pages:", len(reader.pages))

# Let's search pages for references to "76" or "ຫານຕາມທາງຕັ້ງ"
found_pages = []
for i, page in enumerate(reader.pages):
    text = page.extract_text()
    if "76" in text and "3" in text and "ຫານ" in text:
        found_pages.append(i)

print("Pages containing '76', '3' and 'ຫານ':", found_pages)

# Let's also extract pages around page 120-135 to find Chapter 12 start
# PDF page index might differ from textbook page number, so let's search for "ບົດທີ 12"
ch12_pages = []
for i, page in enumerate(reader.pages):
    text = page.extract_text()
    if "ບົດທີ 12" in text or "ການຫານຕາມທາງຕັ້ງ" in text:
        ch12_pages.append(i)
print("Pages containing chapter 12 header:", ch12_pages)

# Save text from found pages to verify details
with open("scratch/pdf_text.txt", "w", encoding="utf-8") as f:
    # Extract around ch12 pages
    start_page = min(ch12_pages) if ch12_pages else 120
    end_page = min(start_page + 10, len(reader.pages))
    f.write(f"--- Extracting pages {start_page} to {end_page} ---\n")
    for p in range(start_page, end_page):
        f.write(f"\n=== PAGE {p} ===\n")
        f.write(reader.pages[p].extract_text())
        
print("Saved sample pages to scratch/pdf_text.txt")
