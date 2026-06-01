import pypdf

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
    res = ""
    for c in line:
        if c in char_map:
            res += char_map[c]
        else:
            res += c
    return res

def print_toc_unconditional(pdf_path, max_pages=8):
    print(f"\n==========================================")
    print(f"=== Decoded TOC for {pdf_path} ===")
    print(f"==========================================")
    reader = pypdf.PdfReader(pdf_path)
    for i in range(max_pages):
        if i >= len(reader.pages):
            break
        text = reader.pages[i].extract_text()
        for line in text.split("\n"):
            line = line.strip()
            if not line:
                continue
            line_lower = line.lower()
            # If it looks like a TOC line (contains "rkdmu" or "[qfmu" or "ບົດທີ" or "ພາກທີ" or "ສາລະບານ" or page numbers at the end like DDDDDDD)
            if any(w in line_lower for w in ["rkdmu", "[qfmu", "ພາກ", "ບົດ", "lk]t[ko", "ສາລະບານ"]) or "DDDD" in line or re.search(r'\d+$', line):
                decoded = decode_line(line)
                cleaned = " ".join(decoded.split())
                print(f"P{i+1}: {cleaned} (Raw: {line})")

import re
print_toc_unconditional("MathTextbookSecondary1.pdf", 8)
print_toc_unconditional("MathTextbookSecondary2.pdf", 8)
