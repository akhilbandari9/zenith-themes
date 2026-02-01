# Zenith Dark - Theme Reference

Quick reference for understanding what colors are used where without reading the full JSON.

## Design Philosophy

- Primary color (coral) is used **only** for actionable/important indicators — buttons, badges, active tab markers, cursor
- All borders, focus outlines, and window borders are **neutral grays** — never colored
- Backgrounds use a 3-tier depth system from darkest (editor) to lighter (widgets)
- Semantic colors (red/orange/green/blue) are used consistently for their meaning across all UI areas
- Syntax highlighting uses **One Dark Pro** colors for editor text

---

## Color Palette

### Grayscale (backgrounds, borders, text)

| Name    | Hex       | Used For                                                                    |
| ------- | --------- | --------------------------------------------------------------------------- |
| Step 1  | `#0a0a0a` | Editor background, terminal, panel, title bar, activity bar                 |
| Step 2  | `#141414` | Sidebar, widgets, dropdowns, input backgrounds, hover widget                |
| Step 3  | `#1e1e1e` | Section headers, debug toolbar, notifications, code blocks                  |
| Step 4  | `#282828` | Active list selection, hover surfaces, elevated elements                    |
| Step 5  | `#323232` | Selection backgrounds (with transparency)                                   |
| Step 6  | `#3c3c3c` | Subtle borders (input, dropdown, notification, sidebar sections)            |
| Step 7  | `#484848` | Standard borders (window active, peek view), line numbers                   |
| Step 8  | `#606060` | Focus borders (global focus ring, sash, settings focus, list focus outline) |
| Step 11 | `#808080` | Muted text, placeholders, breadcrumbs, inactive icons, comments             |
| Step 12 | `#eeeeee` | Primary text, active foregrounds                                            |

### UI Accent Colors

| Name          | Hex       | Swatch        | Role                                              |
| ------------- | --------- | ------------- | ------------------------------------------------- |
| Primary       | `#fab283` | coral/warm    | Action buttons, badges, active indicators, cursor |
| Primary Hover | `#ffc09f` | lighter coral | Button hover state                                |
| Secondary     | `#5c9cf5` | blue          | Links, info indicators, git modified              |

### Syntax Colors (One Dark Pro)

| Name       | Hex       | Swatch      | Role                                                 |
| ---------- | --------- | ----------- | ---------------------------------------------------- |
| Purple     | `#c678dd` | magenta     | Keywords, storage, template interpolation            |
| Blue       | `#61afef` | sky blue    | Functions, methods, decorators, link text            |
| Red        | `#e06c75` | soft red    | Variables, HTML tags, JSON keys, regex, headings     |
| Orange     | `#d19a66` | muted amber | Numbers, constants, HTML attrs, CSS values, bold     |
| Green      | `#98c379` | olive green | Strings, inline code, diff inserted                  |
| Cyan       | `#56b6c2` | teal        | Operators, escape chars, vendor CSS, pseudo-classes  |
| Yellow     | `#e5c07b` | warm yellow | Types, classes, this/self, annotations, list markers |
| Foreground | `#abb2bf` | silver      | Punctuation, parameters, CSS properties              |
| Comment    | `#7f848e` | gray        | Comments                                             |
| Quote      | `#5c6370` | dark gray   | Markdown block quotes                                |

---

## Where Primary Color (#fab283) Appears

These are the **only** places the coral primary is used in the UI:

| Element                                   | What It Does                                             |
| ----------------------------------------- | -------------------------------------------------------- |
| `button.background`                       | Primary action buttons                                   |
| `badge.background`                        | All badge counts (SCM file change count, etc.)           |
| `activityBarBadge.background`             | Badge on activity bar icons                              |
| `activityBar.activeBorder`                | Left border on active sidebar icon                       |
| `tab.activeBorderTop`                     | Top border on active editor tab                          |
| `panelTitle.activeBorder`                 | Underline on active panel tab (Terminal, Problems, etc.) |
| `editorCursor.foreground`                 | Cursor in editor                                         |
| `terminalCursor.foreground`               | Cursor in terminal                                       |
| `progressBar.background`                  | Progress indicators                                      |
| `welcomePage.progress.foreground`         | Welcome page progress                                    |
| `list.highlightForeground`                | Matched characters in search/filter results              |
| `editorSuggestWidget.highlightForeground` | Matched chars in autocomplete                            |
| `editor.findMatchBackground`              | Current search match (at 25% opacity)                    |

Everything else is gray or semantic.

---

## Borders & Focus (All Gray)

| Context                     | Color     | Notes                                    |
| --------------------------- | --------- | ---------------------------------------- |
| Global focus ring           | `#606060` | Step 8 — applies to all focused elements |
| Window active border        | `#484848` | Step 7                                   |
| Window inactive border      | `#3c3c3c` | Step 6                                   |
| Input border                | `#3c3c3c` | Step 6                                   |
| Input option active border  | `#606060` | Step 8 (at 50% opacity)                  |
| List focus outline          | `#606060` | Step 8                                   |
| Settings focused row border | `#606060` | Step 8                                   |
| Peek view border            | `#484848` | Step 7                                   |
| Sidebar/panel borders       | `#1e1e1e` | Step 3 (very subtle)                     |

---

## Syntax Highlighting

| Token                   | Color                 | Style         | Example                           |
| ----------------------- | --------------------- | ------------- | --------------------------------- |
| Comments                | `#7f848e` (gray)      | italic        | `// comment`                      |
| Keywords                | `#c678dd` (purple)    | —             | `const`, `return`, `if`, `import` |
| Functions               | `#61afef` (blue)      | —             | `myFunction()`, `console.log`     |
| Variables               | `#e06c75` (red)       | —             | `myVar`, `count`                  |
| Variable obj/const      | `#e5c07b` (yellow)    | —             | `myObj.prop`, `MY_CONST`          |
| Parameters              | `#abb2bf` (silver)    | italic        | function params                   |
| `this`/`self`/`super`   | `#e5c07b` (yellow)    | italic        | `this.value`                      |
| Strings                 | `#98c379` (green)     | —             | `"hello"`                         |
| Template interpolation  | `#c678dd` (purple)    | —             | `${expr}`                         |
| Escape chars            | `#56b6c2` (cyan)      | —             | `\n`, `\t`                        |
| Numbers                 | `#d19a66` (orange)    | —             | `42`, `3.14`                      |
| Booleans/null           | `#d19a66` (orange)    | —             | `true`, `null`                    |
| Types/Classes           | `#e5c07b` (yellow)    | —             | `MyClass`, `string`               |
| Interfaces              | `#e5c07b` (yellow)    | —             | `IMyInterface`                    |
| Operators               | `#56b6c2` (cyan)      | —             | `=`, `+`, `===`                   |
| Ternary/optional        | `#c678dd` (purple)    | —             | `?`, `?.`                         |
| Punctuation             | `#abb2bf` (silver)    | —             | `{}`, `()`, `;`                   |
| HTML tags               | `#e06c75` (red)       | —             | `<div>`, `<span>`                 |
| HTML attributes         | `#d19a66` (orange)    | italic        | `class=`, `href=`                 |
| HTML id attribute       | `#61afef` (blue)      | —             | `id=`                             |
| CSS properties          | `#abb2bf` (silver)    | —             | `color:`, `margin:`               |
| CSS vendor properties   | `#56b6c2` (cyan)      | —             | `-webkit-`, `-moz-`               |
| CSS values              | `#d19a66` (orange)    | —             | `auto`, `bold`, `#fff`            |
| CSS units               | `#e06c75` (red)       | —             | `px`, `em`, `rem`                 |
| CSS class selectors     | `#d19a66` (orange)    | —             | `.class`                          |
| CSS id/pseudo selectors | `#56b6c2` (cyan)      | —             | `#id`, `:hover`, `::before`       |
| JSON keys               | `#e06c75` (red)       | —             | `"name":`                         |
| JSON true/false/null    | `#56b6c2` (cyan)      | —             | `true`, `null`                    |
| Decorators              | `#61afef` (blue)      | italic        | `@Component`                      |
| Annotations             | `#e5c07b` (yellow)    | —             | `@Override` (Java)                |
| Regex                   | `#e06c75` (red)       | —             | `/pattern/g`                      |
| Regex quantifiers       | `#d19a66` (orange)    | —             | `+`, `*`, `{1,3}`                 |
| Markdown headings       | `#e06c75` (red)       | bold          | `# Title`                         |
| Markdown bold           | `#d19a66` (orange)    | bold          | `**bold**`                        |
| Markdown italic         | `#c678dd` (purple)    | italic        | `*italic*`                        |
| Markdown link URL       | `#c678dd` (purple)    | —             | `(https://...)`                   |
| Markdown link text      | `#61afef` (blue)      | —             | `[text]`                          |
| Markdown code           | `#98c379` (green)     | —             | `` `code` ``                      |
| Markdown code fence     | `#e5c07b` (yellow)    | —             | ` ``` `                           |
| Markdown list markers   | `#e5c07b` (yellow)    | —             | `-`, `1.`                         |
| Markdown quotes         | `#5c6370` (dark gray) | italic        | `> quote`                         |
| Invalid                 | `#e06c75` (red)       | strikethrough | —                                 |
| Deprecated              | `#d19a66` (orange)    | strikethrough | —                                 |

---

## Git Colors

| State           | Color                 | Where                                          |
| --------------- | --------------------- | ---------------------------------------------- |
| Modified        | `#5c9cf5` (blue)      | File explorer, gutter, overview ruler, minimap |
| Added/Untracked | `#7fd88f` (green)     | File explorer, gutter, overview ruler, minimap |
| Deleted         | `#e06c75` (red)       | File explorer, gutter, overview ruler, minimap |
| Conflicting     | `#f5a742` (orange)    | File explorer                                  |
| Renamed         | `#56b6c2` (cyan)      | File explorer                                  |
| Ignored         | `#606060` (gray, 50%) | File explorer                                  |

---

## Diff Editor

| Element          | Color                    |
| ---------------- | ------------------------ |
| Inserted text bg | `#7fd88f` at 12% opacity |
| Inserted line bg | `#7fd88f` at 8% opacity  |
| Removed text bg  | `#e06c75` at 12% opacity |
| Removed line bg  | `#e06c75` at 8% opacity  |

---

## Terminal ANSI Palette

| ANSI Color | Normal    | Bright    |
| ---------- | --------- | --------- |
| Black      | `#282828` | `#606060` |
| Red        | `#e06c75` | `#e88892` |
| Green      | `#98c379` | `#b5d4a2` |
| Yellow     | `#e5c07b` | `#edd9a3` |
| Blue       | `#61afef` | `#89c4f7` |
| Magenta    | `#c678dd` | `#d898e8` |
| Cyan       | `#56b6c2` | `#7fc9d2` |
| White      | `#eeeeee` | `#ffffff` |

---

## Bracket Pair Colors (in order)

1. `#d19a66` (orange)
2. `#c678dd` (purple)
3. `#56b6c2` (cyan)
4. `#e5c07b` (yellow)
5. `#61afef` (blue)
6. `#98c379` (green)
