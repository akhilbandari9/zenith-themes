# Zenith Dark - Theme Reference

Quick reference for understanding what colors are used where without reading the full JSON.

## Design Philosophy

- Primary color (coral) is used **only** for actionable/important indicators — buttons, badges, active tab markers, cursor
- All borders, focus outlines, and window borders are **neutral grays** — never colored
- Backgrounds use a 3-tier depth system from darkest (editor) to lighter (widgets)
- Semantic colors (red/orange/green/blue) are used consistently for their meaning across all UI areas

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

### Primary & Accent Colors

| Name          | Hex       | Swatch        | Role                                                 |
| ------------- | --------- | ------------- | ---------------------------------------------------- |
| Primary       | `#fab283` | coral/warm    | Action buttons, badges, active indicators, cursor    |
| Primary Hover | `#ffc09f` | lighter coral | Button hover state                                   |
| Secondary     | `#5c9cf5` | blue          | Links, info indicators, git modified, CSS properties |
| Accent        | `#9d7cd8` | purple        | Syntax keywords, constructors, bracket pair #2       |
| Red           | `#e06c75` | soft red      | Errors, deletions, variables, HTML tags              |
| Orange        | `#f5a742` | amber         | Warnings, numbers, decorators, HTML attributes       |
| Green         | `#7fd88f` | soft green    | Success, additions, strings                          |
| Cyan          | `#56b6c2` | teal          | Operators, interfaces, escape chars, submodules      |
| Yellow        | `#e5c07b` | warm yellow   | Types, classes, enums, CSS selectors                 |

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

| Token                 | Color              | Style         | Example                           |
| --------------------- | ------------------ | ------------- | --------------------------------- |
| Comments              | `#808080`          | italic        | `// comment`                      |
| Keywords              | `#9d7cd8` (purple) | —             | `const`, `return`, `if`, `import` |
| Functions             | `#fab283` (coral)  | —             | `myFunction()`, `console.log`     |
| Variables             | `#e06c75` (red)    | —             | `myVar`, `count`                  |
| Parameters            | `#e06c75` (red)    | italic        | function params                   |
| `this`/`self`/`super` | `#e06c75` (red)    | italic        | `this.value`                      |
| Strings               | `#7fd88f` (green)  | —             | `"hello"`                         |
| Escape chars          | `#56b6c2` (cyan)   | —             | `\n`, `\t`                        |
| Numbers               | `#f5a742` (orange) | —             | `42`, `3.14`                      |
| Booleans/null         | `#f5a742` (orange) | —             | `true`, `null`                    |
| Types/Classes         | `#e5c07b` (yellow) | —             | `MyClass`, `string`               |
| Interfaces            | `#56b6c2` (cyan)   | —             | `IMyInterface`                    |
| Operators             | `#56b6c2` (cyan)   | —             | `=`, `+`, `===`                   |
| Punctuation           | `#eeeeee` (white)  | —             | `{}`, `()`, `;`                   |
| HTML tags             | `#e06c75` (red)    | —             | `<div>`, `<span>`                 |
| HTML attributes       | `#f5a742` (orange) | italic        | `class=`, `id=`                   |
| CSS properties        | `#5c9cf5` (blue)   | —             | `color:`, `margin:`               |
| CSS selectors         | `#e5c07b` (yellow) | —             | `.class`, `#id`                   |
| CSS values            | `#fab283` (coral)  | —             | `auto`, `bold`                    |
| JSON keys             | `#e06c75` (red)    | —             | `"name":`                         |
| Decorators            | `#f5a742` (orange) | italic        | `@Component`                      |
| Regex                 | `#56b6c2` (cyan)   | —             | `/pattern/g`                      |
| Markdown headings     | `#fab283` (coral)  | bold          | `# Title`                         |
| Markdown bold         | `#f5a742` (orange) | bold          | `**bold**`                        |
| Markdown italic       | `#9d7cd8` (purple) | italic        | `*italic*`                        |
| Markdown links        | `#5c9cf5` (blue)   | —             | `[text](url)`                     |
| Markdown code         | `#7fd88f` (green)  | —             | `` `code` ``                      |
| Invalid               | `#e06c75` (red)    | strikethrough | —                                 |
| Deprecated            | `#f5a742` (orange) | strikethrough | —                                 |

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
| Green      | `#7fd88f` | `#a0e8ab` |
| Yellow     | `#e5c07b` | `#edd9a3` |
| Blue       | `#5c9cf5` | `#82b4f7` |
| Magenta    | `#9d7cd8` | `#b8a0e5` |
| Cyan       | `#56b6c2` | `#7fc9d2` |
| White      | `#eeeeee` | `#ffffff` |

---

## Bracket Pair Colors (in order)

1. `#fab283` (coral)
2. `#9d7cd8` (purple)
3. `#56b6c2` (cyan)
4. `#e5c07b` (yellow)
5. `#5c9cf5` (blue)
6. `#7fd88f` (green)
