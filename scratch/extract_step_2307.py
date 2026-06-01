import json

log_path = "/Users/kokiyamagishi/.gemini/antigravity-ide/brain/03910620-bc70-489f-98ef-d2b154491111/.system_generated/logs/transcript.jsonl"
target_line = 3037

with open(log_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if i == target_line:
            try:
                data = json.loads(line)
                print("Step index:", data.get("step_index"))
                t_calls = data.get("tool_calls", [])
                for tc in t_calls:
                    print("Tool name:", tc.get("name"))
                    args = tc.get("arguments", tc.get("args", {}))
                    print("StartLine:", args.get("StartLine"))
                    print("EndLine:", args.get("EndLine"))
                    print("TargetContent (length):", len(args.get("TargetContent", "")))
                    print("ReplacementContent (length):", len(args.get("ReplacementContent", "")))
                    
                    # Write target and replacement to files
                    with open("scratch/target_2307.txt", "w", encoding="utf-8") as tf:
                        tf.write(args.get("TargetContent", ""))
                    with open("scratch/replacement_2307.txt", "w", encoding="utf-8") as rf:
                        rf.write(args.get("ReplacementContent", ""))
                    print("Successfully wrote target and replacement to files!")
            except Exception as e:
                print("Error parsing line:", e)
            break
