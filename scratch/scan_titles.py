import os
import re

def scan_data_titles(folder_path):
    print(f"\n=== Titles in {folder_path} ===")
    files = sorted([f for f in os.listdir(folder_path) if f.endswith(".tsx") and f.startswith("unit")])
    # Natural sort based on unit number
    files.sort(key=lambda f: int(re.search(r'\d+', f).group()))
    
    for f in files:
        path = os.path.join(folder_path, f)
        with open(path, "r", encoding="utf-8") as file_obj:
            content = file_obj.read()
            # Extract unitNumber and unitTitle
            unit_num_match = re.search(r'unitNumber:\s*(\d+)', content)
            unit_title_match = re.search(r'unitTitle:\s*"([^"]+)"', content)
            num = unit_num_match.group(1) if unit_num_match else "N/A"
            title = unit_title_match.group(1) if unit_title_match else "N/A"
            print(f"{f}: Unit {num} - {title}")

scan_data_titles("src/data/secondary1")
scan_data_titles("src/data/secondary2")
scan_data_titles("src/data/secondary3")
