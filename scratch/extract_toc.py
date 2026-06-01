import pypdf
import sys
import re

def extract_first_pages(pdf_path, num_pages=8):
    print(f"\n==========================================")
    print(f"=== First {num_pages} pages of {pdf_path} ===")
    print(f"==========================================")
    reader = pypdf.PdfReader(pdf_path)
    for i in range(num_pages):
        text = reader.pages[i].extract_text()
        print(f"\n--- Page {i+1} ---")
        lines = text.split("\n")
        for line in lines[:100]: # print up to 100 lines per page
            if line.strip():
                print(line)

extract_first_pages("MathTextbookSecondary1.pdf", 6)
extract_first_pages("MathTextbookSecondary2.pdf", 6)
extract_first_pages("MathTextbookSecondary3.pdf", 6)
