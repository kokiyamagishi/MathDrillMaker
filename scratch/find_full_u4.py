import json
import os

log_path = "/Users/kokiyamagishi/.gemini/antigravity-ide/brain/03910620-bc70-489f-98ef-d2b154491111/.system_generated/logs/transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for line_num, line in enumerate(f):
        try:
            data = json.loads(line)
        except Exception as e:
            continue
        
        step_index = data.get("step_index")
        tool_calls = data.get("tool_calls", [])
        
        for tc in tool_calls:
            name = tc.get("name")
            args = tc.get("arguments", tc.get("args", {}))
            target_file = args.get("TargetFile", args.get("AbsolutePath", ""))
            
            if "units4.tsx" in target_file:
                # We want to find write_to_file or a very large replace_file_content
                if name == "write_to_file":
                    code_len = len(args.get("CodeContent", ""))
                    print(f"Step {step_index} (Line {line_num}): write_to_file on units4.tsx, length={code_len}")
                elif name == "replace_file_content":
                    rep_len = len(args.get("ReplacementContent", ""))
                    if rep_len > 50000:
                        print(f"Step {step_index} (Line {line_num}): large replace_file_content, length={rep_len}")
