# Zenith Theme for VS Code

A clean, modern theme with dark and light variants for Visual Studio Code and VS Code Insiders.

## Features

- **Dark Theme**: Deep dark background with warm accent colors
- **Light Theme**: Clean light interface with soft colors
- **Semantic Highlighting**: Comprehensive syntax highlighting for multiple languages
- **Terminal Colors**: Matching ANSI colors for integrated terminal
- **Git Integration**: Color-coded git status indicators

## Installation

### From VSIX (Recommended for local use)

1. Package the extension:

   ```bash
   npm install -g @vscode/vsce
   vsce package
   ```

2. Install the generated `.vsix` file in VS Code:
   - Open VS Code
   - Go to Extensions view (Ctrl+Shift+X or Cmd+Shift+X)
   - Click the `...` menu and select "Install from VSIX..."
   - Select the generated `zenith-theme-*.vsix` file

### From Source (Development)

1. Copy this folder to your VS Code extensions directory:
   - **Windows**: `%USERPROFILE%\.vscode\extensions\`
   - **macOS**: `~/.vscode/extensions/`
   - **Linux**: `~/.vscode/extensions/`

2. Restart VS Code

### For VS Code Insiders

Use the same steps but replace `.vscode` with `.vscode-insiders` in the paths.

## Activating the Theme

1. Open Command Palette (Ctrl+Shift+P or Cmd+Shift+P)
2. Type "Color Theme" and select "Preferences: Color Theme"
3. Select either:
   - **Zenith Dark**
   - **Zenith Light**

Or set it in your settings.json:

```json
{
  "workbench.colorTheme": "Zenith Dark"
}
```

## Color Palette

### Dark Theme

| Role               | Color              |
| ------------------ | ------------------ |
| Background         | `#0a0a0a`          |
| Background Panel   | `#141414`          |
| Background Element | `#1e1e1e`          |
| Primary            | `#fab283` (coral)  |
| Secondary          | `#5c9cf5` (blue)   |
| Accent             | `#9d7cd8` (purple) |
| Text               | `#eeeeee`          |
| Text Muted         | `#808080`          |

### Light Theme

| Role               | Color              |
| ------------------ | ------------------ |
| Background         | `#ffffff`          |
| Background Panel   | `#fafafa`          |
| Background Element | `#f5f5f5`          |
| Primary            | `#3b7dd8` (blue)   |
| Secondary          | `#7b5bb6` (purple) |
| Accent             | `#d68c27` (orange) |
| Text               | `#1a1a1a`          |
| Text Muted         | `#8a8a8a`          |

## Syntax Highlighting

The theme provides rich syntax highlighting for:

- JavaScript/TypeScript
- Python
- HTML/CSS/SCSS
- JSON
- Markdown
- And many more languages

## Development

To modify the theme:

1. Edit the theme files in the `themes/` folder
2. Reload VS Code window to see changes
3. Package with `vsce package` when ready to distribute

## License

MIT
