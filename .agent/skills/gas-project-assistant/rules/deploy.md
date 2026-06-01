# Deployment Workflow

When the user asks to "deploy" or "push" the code:

1. **Check Status**: Run `clasp status` to see what will be changed.
2. **Push**: Run `clasp push` to upload code to Google Apps Script.
3. **Open**: If requested, run `clasp open` to open the manifest or editor.
4. **Version**: If this is a production release, ask if they want to create a new version (`clasp version`).

## Important Notes
- `clasp push` overrides code on the server. Ensure the user knows this.
- If `clasp` fails, check if `.clasp.json` exists and is valid.
