import json

log_path = "/Users/kokiyamagishi/.gemini/antigravity-ide/brain/aea147e9-865d-47f3-a178-1b8e3ef5ccff/.system_generated/logs/transcript.jsonl"
output_path = "/Users/kokiyamagishi/Antigravity/MathDrillMaker/scratch/extracted_content.txt"

target_step = 763

with open(log_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        try:
            data = json.loads(line)
        except Exception as e:
            continue
        
        step_index = data.get("step_index")
        if step_index == target_step:
            t_calls = data.get("tool_calls", [])
            for tc in t_calls:
                args = tc.get("args", {})
                content = args.get("ReplacementContent", "")
                if content:
                    with open(output_path, 'w', encoding='utf-8') as out_f:
                        out_f.write(content)
                    print(f"Successfully wrote Step {target_step} content to {output_path} (length: {len(content)})")
                    break
