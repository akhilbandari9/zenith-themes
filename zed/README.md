# Zenith Dark for Zed

A dark theme for [Zed](https://zed.dev) with a warm coral accent and One Dark-inspired syntax highlighting.

## Installation

### From the Extensions panel

1. Open Zed
2. Open the Extensions panel (`cmd+shift+x` on macOS / `ctrl+shift+x` on Linux)
3. Search for "Zenith"
4. Click **Install**

### Manual installation

1. Copy the theme file into your Zed themes directory:

   ```sh
   # macOS
   cp themes/zenith-dark.json ~/.config/zed/themes/

   # Linux
   cp themes/zenith-dark.json ~/.config/zed/themes/
   ```

2. Open Zed and select the theme:
   - Open the command palette (`cmd+shift+p` / `ctrl+shift+p`)
   - Type "theme" and select **Change Theme**
   - Search for **Zenith Dark**

## Color palette

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
