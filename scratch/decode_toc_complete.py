import pypdf

# Mapping from custom PDF font to Lao unicode characters based on standard mappings
char_map = {
    '[': 'ບ', ']': 'ດ', 'f': 'ສ', 'a': 'າ', 'o': 'ນ', 'g': 'ເ', 'l': 'ລ', 'c': 'ແ', ';': 'ວ', 'y': 'ິ',
    'h': 'ົ', 'r': 'ພ', 't': 'ຕ', 's': 'ຫ', '^': 'ຼ', 'A': 'ັ', 'U': '່', '|': '້', 'q': 'ງ', 'v': 'ອ',
    'j': '່', '’': ' ', 'F': ' ', 'x': 'ປ', 'd': 'ກ', 'k': 'າ', 'm': 'ທ', 'u': 'ີ', 'w': 'ໃ', 'o': 'ນ',
    'p': 'ຍ', '0': ' ', '1': ' ', '2': ' ', '3': ' ', '4': ' ', '5': ' ', '6': ' ', '7': ' ', '8': ' ',
    '9': ' ', 'B': '້', 'D': ' ', 'E': ' ', 'G': ' ', 'H': ' ', 'I': ' ', 'J': ' ', 'K': ' ', 'L': ' ',
    'M': ' ', 'N': ' ', 'O': ' ', 'P': ' ', 'Q': ' ', 'R': ' ', 'S': ' ', 'T': ' ', 'U': ' ', 'V': ' ',
    'W': ' ', 'X': ' ', 'Y': ' ', 'Z': ' '
}

def decode_line(line):
    # Standard translation helper
    res = ""
    for c in line:
        if c in char_map:
            res += char_map[c]
        else:
            res += c
    return res

def get_toc(pdf_path):
    print(f"\n==========================================")
    print(f"=== Decoded TOC for {pdf_path} ===")
    print(f"==========================================")
    reader = pypdf.PdfReader(pdf_path)
    # Search first 15 pages for chapters and parts
    for i in range(12):
        if i >= len(reader.pages):
            break
        text = reader.pages[i].extract_text()
        for line in text.split("\n"):
            line_lower = line.lower()
            if "rkdmu" in line_lower or "[qfmu" in line_lower or "ພາກທີ" in line_lower or "ບົດທີ" in line_lower:
                decoded = decode_line(line)
                # clean up multiple spaces
                cleaned = " ".join(decoded.split())
                print(f"P{i+1}: {cleaned} (Raw: {line.strip()})")

get_toc("MathTextbookSecondary1.pdf")
get_toc("MathTextbookSecondary2.pdf")
get_toc("MathTextbookSecondary3.pdf")
