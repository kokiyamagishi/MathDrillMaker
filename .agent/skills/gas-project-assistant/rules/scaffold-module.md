# Scaffolding a New Module

When the user asks to "create a new module" or "add a page" (e.g., "Library", "Transport"), follow these steps to ensure consistency with the existing architecture.

## 1. Create the Frontend HTML File
Create a new HTML file in the root directory (e.g., `library.html`).
- Use Tailwind CSS classes for styling.
- Follow the pattern of existing files (e.g., `reports.html`):
  - A main wrapper div with `id="library-section"` and class `section hidden p-6`.
  - A header section.
  - Interactive elements.

## 2. Register in Local Build System
You MUST update `watch-local.js` to include the new file in the `sources` array.
- Open `watch-local.js`.
- Add `'library.html',` to the `sources` array.

## 3. Create the Backend Service (Optional based on requirements)
If the module needs specific backend logic, create a new `.gs` file (e.g., `Library.gs`).
- Define helper functions (e.g., `getLibraryBooks_`, `borrowBook_`).
- Follow the `normalize...` pattern for data objects.

## 4. Register in API Router
If the module fetches data, update `ApiRouter.gs`.
- specific `getLibraryData` action in `routeApiRequest_`.
- Add a corresponding handler function `getLibraryDataApi_`.

## Example Verification
After creating the files, verifying that `watch-local.js` is updated is CRITICAL for the user to see the changes locally.
