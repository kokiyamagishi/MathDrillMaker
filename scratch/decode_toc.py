import pypdf
import re

# Font map dictionary for OCR characters
font_map = {
    'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j',
    'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't',
    'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z',
    'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I', 'J': 'J',
    'K': 'K', 'L': 'L', 'M': 'M', 'N': 'N', 'O': 'O', 'P': 'P', 'Q': 'Q', 'R': 'R', 'S': 'S', 'T': 'T',
    'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': 'Z',
    '[': 'ບ', ']': 'ດ', 'm': 'ທ', 'u': 'ີ', 'd': 'ກ', 'k': 'າ', 'o': 'ນ', 'g': 'ເ', 'l': 'ລ', 'c': 'ແ',
    ';': 'ວ', 'y': 'ິ', 'f': 'ສ', 'h': 'ົ', 'r': 'ພ', 't': 'ຕ', 's': 'ຫ', '^': 'ຼ', 'A': 'ັ', 'U': '່',
    '|': '້', 'q': 'ງ', 'v': 'ອ', 'j': '່', '’': ' ', 'F': ' ', 'x': 'ປ', 'A': 'ັ', '0': ' ', '1': ' ',
    '2': ' ', '3': ' ', '4': ' ', '5': ' ', '6': ' ', '7': ' ', '8': ' ', '9': ' '
}

def decode_lao(text):
    # This is a custom decoder to map font glyphs back to Lao characters based on typical mappings
    res = ""
    for char in text:
        if char in font_map:
            res += font_map[char]
        else:
            res += char
    return res

def scan_pdf_toc(pdf_path):
    print(f"\n==========================================")
    print(f"=== Complete TOC for {pdf_path} ===")
    print(f"==========================================")
    reader = pypdf.PdfReader(pdf_path)
    
    # We will search the first 12 pages for table of contents
    for page_idx in range(12):
        text = reader.pages[page_idx].extract_text()
        lines = text.split("\n")
        for line in lines:
            # Look for lines containing "rkdmu" or "[qfmu" or "ພາກທີ" or "ບົດທີ"
            if any(word in line.lower() for word in ["rkdmu", "[qfmu", "ພາກທີ", "ບົດທີ", "lk]t[ko", "ສາລະບານ"]):
                decoded = decode_lao(line)
                print(f"P{page_idx+1}: {line}   ===>   {decoded}")

scan_pdf_toc("MathTextbookSecondary1.pdf")
scan_pdf_toc("MathTextbookSecondary2.pdf")
scan_pdf_toc("MathTextbookSecondary3.pdf")
