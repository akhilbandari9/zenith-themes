# Zenith Theme for Zed

A dark theme for [Zed](https://zed.dev) with a warm coral accent and One Dark-inspired syntax highlighting.

## Installation

### Install as Dev Extension (Recommended for Development)

1. Build the theme:
   ```sh
   npm run build
   ```

2. Open Zed

3. Open the Extensions panel (`cmd+shift+x` on macOS / `ctrl+shift+x` on Linux)

4. Click the `Install Dev Extension` button

5. Select the `zed/` directory from this project

The theme will be installed and available immediately. Select it via Command Palette > "Change Theme" > "Zenith Dark".

### Manual Installation

1. Build the theme:
   ```sh
   npm run build
   ```

2. Copy the theme file to your Zed themes directory:
   ```sh
   # macOS / Linux
   cp zed/themes/zenith-dark.json ~/.config/zed/themes/
   ```

3. Open Zed and select the theme via Command Palette > "Change Theme" > "Zenith Dark"

## Development

1. Run the build in watch mode:
   ```sh
   npm run watch
   ```

2. Install as dev extension (see above)

3. Make changes to `src/colors.js` or `src/zed-theme.js`

4. The theme will rebuild automatically. Restart Zed to see changes.

## Color Palette

| Role       | Color     | Used for                         |
| ---------- | --------- | -------------------------------- |
| Background | `#0a0a0a` | Editor, terminal, title bar      |
| Surface    | `#141414` | Panels, sidebar, dropdowns       |
| Elevated   | `#1e1e1e` | Hover surfaces, widgets          |
| Accent     | `#fab283` | Cursor, highlights, badges       |
| Purple     | `#c678dd` | Keywords, storage                |
| Blue       | `#61afef` | Functions, methods               |
| Red        | `#e06c75` | Variables, HTML tags, properties |
| Orange     | `#d19a66` | Numbers, constants, attributes   |
| Green      | `#98c379` | Strings                          |
| Cyan       | `#56b6c2` | Operators, escape characters     |
| Yellow     | `#e5c07b` | Types, classes, namespaces       |
