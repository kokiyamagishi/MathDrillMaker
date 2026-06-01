# Local Development Helper

When the user is developing locally:

## 1. The Build Process
The project uses a custom Node.js script `watch-local.js` to concatenate HTML files into `index.local.html`.
- **Command**: `node watch-local.js`
- **Output**: `index.local.html`

## 2. The Web Server
The user uses Python's simple HTTP server.
- **Command**: `python3 -m http.server 8080`

## 3. Combined Workflow
To start the dev environment, you generally need two terminal processes.
- Process 1: `node watch-local.js`
- Process 2: `python3 -m http.server 8080`

## Troubleshooting
- If changes aren't showing up, check if `watch-local.js` is running.
- Check if the file being edited is in the `sources` list in `watch-local.js`.
