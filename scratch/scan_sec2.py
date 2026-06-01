import pypdf

reader = pypdf.PdfReader('MathTextbookSecondary2.pdf')
print("Secondary 2 Total Pages:", len(reader.pages))

# Try printing outline if available
try:
    outline = reader.outline
    def print_outline(outline, depth=0):
        if not outline:
            return
        for item in outline:
            if isinstance(item, list):
                print_outline(item, depth + 1)
            else:
                print("  " * depth + str(item.title))
    print("Outline:")
    print_outline(outline)
except Exception as e:
    print("No outline or outline error:", e)

# Dump first 10 pages text to see Table of Contents (lakatban)
print("\n--- PAGE 1 to 8 Text Snippets ---")
for i in range(10):
    text = reader.pages[i].extract_text()
    if text:
        print(f"--- PAGE {i+1} ---")
        print(text[:800])
