import pypdf

reader = pypdf.PdfReader('MathTextbookSecondary1.pdf')

# Page 3 and 4 contain the lakatban (Table of Contents). Let's dump them fully.
print("--- PAGE 3 ---")
print(reader.pages[2].extract_text())
print("--- PAGE 4 ---")
print(reader.pages[3].extract_text())
