import pypdf
import re

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

def parse_and_write_toc(pdf_path, out_file):
    out_file.write(f"\n=========================================\n")
    out_file.write(f"TOC for {pdf_path}\n")
    out_file.write(f"=========================================\n")
    reader = pypdf.PdfReader(pdf_path)
    
    # We will search the first 16 pages of each PDF
    for i in range(16):
        if i >= len(reader.pages):
            break
        text = reader.pages[i].extract_text()
        for line in text.split("\n"):
            line = line.strip()
            if not line:
                continue
            line_lower = line.lower()
            if any(w in line_lower for w in ["rkdmu", "[qfmu", "ພາກທີ", "ບົດທີ", "lk]t[ko"]):
                decoded = decode_line(line)
                cleaned = " ".join(decoded.split())
                out_file.write(f"P{i+1}: {cleaned} (Raw: {line})\n")

with open("scratch/textbook_tocs.txt", "w", encoding="utf-8") as out:
    parse_and_write_toc("MathTextbookSecondary1.pdf", out)
    parse_and_write_toc("MathTextbookSecondary2.pdf", out)
    parse_and_write_toc("MathTextbookSecondary3.pdf", out)

print("Done parsing TOCs!")
