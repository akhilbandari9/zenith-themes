# Zenith Themes

A clean, modern dark theme for VS Code and Zed editors.

## Installation

### VS Code

#### Option 1: Install from VSIX (Local)

1. **Prerequisites**: Ensure you have Node.js installed (v16 or higher)

2. **Clone the repository**:

   ```bash
   git clone https://github.com/zenith/zenith-theme.git
   cd zenith-themes
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Build and package the extension**:

   ```bash
   npm run package:vscode
   ```

5. **Install the VSIX file**:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
   - Click the "..." menu in the top-right of the Extensions panel
   - Select "Install from VSIX..."
   - Navigate to `vs-code/zenith-theme-1.0.0.vsix` and select it

   Alternatively, use the command line:

   ```bash
   code --install-extension vs-code/zenith-theme-1.0.0.vsix
   ```

6. **Activate the theme**:
   - Press Ctrl+Shift+P (or Cmd+Shift+P on macOS)
   - Type "Color Theme" and select "Preferences: Color Theme"
   - Select "Zenith Dark" from the list

#### Option 2: Development/Testing

For development and testing without packaging:

1. Build the themes:

   ```bash
   npm run build
   ```

2. The theme files will be generated in `vs-code/themes/`

### Zed Editor

1. **Build the themes**:

   ```bash
   npm run build
   ```

2. **Install as a dev extension**:
   - Open Zed
   - Press Ctrl+Shift+P (or Cmd+Shift+P on macOS) to open the command palette
   - Type "install dev extension" and select "zed: install dev extension"
   - Navigate to and select the `zed/` folder from this repository
   - The extension will be installed and available immediately

3. **Activate the theme in Zed**:
   - Press Ctrl+, (or Cmd+, on macOS) to open settings
   - Set `"theme": "zenith-dark"` in your settings.json

   Or use the command palette:
   - Press Ctrl+Shift+P (or Cmd+Shift+P on macOS)
   - Type "theme picker" and select "theme picker: toggle"
   - Select "Zenith Dark" from the list

For more information on developing Zed extensions, see the [Zed Extensions Documentation](https://zed.dev/docs/extensions/developing-extensions).

## Available Themes

| Theme       | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| Zenith Dark | A clean, modern dark theme with carefully selected colors for syntax highlighting |

## Development

### Project Structure

```
zenith-themes/
├── src/
│   ├── colors.js        # Color palette definitions
│   ├── vscode-theme.js  # VS Code theme generator
│   └── zed-theme.js     # Zed theme generator
├── vs-code/
│   ├── package.json     # VS Code extension manifest
│   ├── themes/          # Generated VS Code themes
│   └── README.md        # VS Code extension README
├── zed/
│   ├── extension.toml   # Zed extension manifest
│   ├── themes/          # Generated Zed themes
│   └── README.md        # Zed extension README
├── build.js             # Build script to generate themes
└── package.json         # Root package.json with build scripts
```

### Scripts

| Command                  | Description                                        |
| ------------------------ | -------------------------------------------------- |
| `npm run build`          | Generates theme files for all editors              |
| `npm run package:vscode` | Builds themes and creates a .vsix file for VS Code |

### Customizing Colors

Edit `src/colors.js` to customize the color palette, then run `npm run build` to regenerate the themes.

## License

MIT License - see [LICENSE](LICENSE) for details.
