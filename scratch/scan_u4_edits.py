import json
import os

log_path = "/Users/kokiyamagishi/.gemini/antigravity-ide/brain/03910620-bc70-489f-98ef-d2b154491111/.system_generated/logs/transcript.jsonl"

if not os.path.exists(log_path):
    print("Log path does not exist!")
    exit(1)

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
            
            # Check if this tool call modifies or views units4.tsx
            target_file = args.get("TargetFile", args.get("AbsolutePath", ""))
            if "units4.tsx" in target_file:
                print(f"Step {step_index} (Line {line_num}): Tool '{name}' on '{target_file}'")
                if name == "replace_file_content":
                    print(f"  StartLine: {args.get('StartLine')}, EndLine: {args.get('EndLine')}")
                    print(f"  TargetContent (first 50 chars): {repr(args.get('TargetContent', '')[:50])}")
                    print(f"  ReplacementContent (first 50 chars): {repr(args.get('ReplacementContent', '')[:50])}")
                elif name == "write_to_file":
                    print(f"  Overwrite: {args.get('Overwrite')}")
                    print(f"  CodeContent length: {len(args.get('CodeContent', ''))}")
                elif name == "view_file":
                    print(f"  StartLine: {args.get('StartLine')}, EndLine: {args.get('EndLine')}")
