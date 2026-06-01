import pypdf

reader = pypdf.PdfReader('MathTextbookSecondary1.pdf')

# Let's find pages mentioning "Lesson 8" or page range around 54. 
# TOC says Lesson 8 is on page 56 (which in PDF page index might be slightly different). Let's print out text around page 55 to 65.
for idx in range(54, 65):
    text = reader.pages[idx].extract_text()
    if text and ("[qfmu )" in text or "ບົດທີ 8" in text or "Lesson 8" in text or "ຈຳນວນພື້ນຖານຕ່າງໆ" in text or "9eo;orNo4ko" in text):
        print(f"--- Found on PDF Page {idx+1} (0-indexed {idx}) ---")
        print(text[:1000])
