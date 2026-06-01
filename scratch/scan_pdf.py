import pypdf

reader = pypdf.PdfReader('MathTextbookSecondary1.pdf')
print("Total Pages:", len(reader.pages))

# Print first few pages or outline
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
try:
    print_outline(outline)
except Exception as e:
    print("No outline or error:", e)

# Dump pages 1 to 10 text to see if there's a TOC page
print("\n--- Page 1 to 5 Text Snippet ---")
for i in range(10):
    text = reader.pages[i].extract_text()
    if text:
        print(f"--- PAGE {i+1} ---")
        print(text[:400])
