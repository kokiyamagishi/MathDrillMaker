import os
import json
import glob

brain_dir = "/Users/openclaw/.gemini/antigravity/brain"
convs = []

for folder in os.listdir(brain_dir):
    folder_path = os.path.join(brain_dir, folder)
    if not os.path.isdir(folder_path) or folder == "tempmediaStorage":
        continue
    
    # Try to find walkthrough or transcript to get title/details
    title = "Unknown Conversation"
    first_msg = ""
    last_modified = os.path.getmtime(folder_path)
    
    walkthrough_path = os.path.join(folder_path, "walkthrough.md")
    if os.path.exists(walkthrough_path):
        with open(walkthrough_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
            for line in lines:
                if line.startswith("# "):
                    title = line.replace("# ", "").strip()
                    break
    
    transcript_path = os.path.join(folder_path, ".system_generated", "logs", "transcript.jsonl")
    if os.path.exists(transcript_path):
        with open(transcript_path, "r", encoding="utf-8") as f:
            for line in f:
                try:
                    data = json.loads(line)
                    if data.get("type") == "USER_INPUT":
                        content = data.get("content", "")
                        if "<USER_REQUEST>" in content:
                            req = content.split("<USER_REQUEST>")[1].split("</USER_REQUEST>")[0].strip()
                            first_msg = req
                        else:
                            first_msg = content.strip()
                        break
                except Exception:
                    pass
                    
    convs.append({
        "id": folder,
        "title": title,
        "first_msg": first_msg[:120] + "..." if len(first_msg) > 120 else first_msg,
        "mtime": last_modified
    })

# Sort by last modified descending
convs.sort(key=lambda x: x["mtime"], reverse=True)

import datetime
print("| Conversation ID | Title / Goal | First User Request | Last Active |")
print("| --- | --- | --- | --- |")
for c in convs[:15]:
    dt = datetime.datetime.fromtimestamp(c["mtime"]).strftime('%Y-%m-%d %H:%M:%S')
    print(f"| `{c['id']}` | {c['title']} | {c['first_msg']} | {dt} |")
