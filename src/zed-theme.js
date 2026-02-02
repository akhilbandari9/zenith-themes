/**
 * Zed Theme Generator
 * Generates the Zed theme JSON from color definitions
 */

/** Convert hex to Zed format (with alpha as hex) */
function zedColor(hex, alpha = "ff") {
  return `${hex}${alpha}`;
}

function generateZedTheme(colors) {
  const {
    PRIMARY_COLOR,
    PRIMARY_HOVER_COLOR,
    BG_DARKEST,
    BG_DARKER,
    BG_DARK,
    BG_MEDIUM,
    BG_LIGHT,
    BG_LIGHTER,
    BG_LIGHTEST,
    TEXT_PRIMARY,
    TEXT_SECONDARY,
    TEXT_TERTIARY,
    SYNTAX_RED,
    SYNTAX_GREEN,
    SYNTAX_YELLOW,
    SYNTAX_BLUE,
    SYNTAX_PURPLE,
    SYNTAX_CYAN,
    SYNTAX_ORANGE,
    SYNTAX_COMMENT,
    SYNTAX_PUNCTUATION,
    SUCCESS_COLOR,
    WARNING_COLOR,
    ERROR_COLOR,
    INFO_COLOR,
  } = colors;

  return {
    $schema: "https://zed.dev/schema/themes/v0.2.0.json",
    name: "Zenith",
    author: "Zenith Themes",
    themes: [
      {
        name: "Zenith Dark",
        appearance: "dark",
        style: {
          // Borders
          border: zedColor(BG_DARK),
          "border.variant": zedColor(BG_LIGHTER),
          "border.focused": zedColor(BG_LIGHTEST),
          "border.selected": zedColor(BG_LIGHTEST),
          "border.transparent": zedColor("#000000", "00"),
          "border.disabled": zedColor(BG_DARK),

          // Surfaces
          "elevated_surface.background": zedColor(BG_DARK),
          "surface.background": zedColor(BG_DARKER),
          background: zedColor(BG_DARKEST),
          "panel.background": zedColor(BG_DARKER),
          "panel.focused_border": zedColor(BG_LIGHTEST),
          "pane.focused_border": zedColor(BG_LIGHTEST),

          // Elements
          "element.background": zedColor(BG_DARK),
          "element.hover": zedColor(BG_MEDIUM),
          "element.active": zedColor(BG_LIGHT),
          "element.selected": zedColor(BG_MEDIUM),
          "element.disabled": zedColor(BG_DARKER),

          "drop_target.background": zedColor(BG_LIGHT, "80"),

          "ghost_element.background": zedColor("#000000", "00"),
          "ghost_element.hover": zedColor(BG_DARK),
          "ghost_element.active": zedColor(BG_MEDIUM),
          "ghost_element.selected": zedColor(BG_MEDIUM),
          "ghost_element.disabled": zedColor(BG_DARKER),

          // Text - Using PRIMARY_COLOR for accent
          text: zedColor(TEXT_PRIMARY),
          "text.muted": zedColor(TEXT_SECONDARY),
          "text.placeholder": zedColor(TEXT_TERTIARY),
          "text.disabled": zedColor(TEXT_TERTIARY),
          "text.accent": zedColor(PRIMARY_COLOR),

          // Icons - Using PRIMARY_COLOR for accent
          icon: zedColor(TEXT_PRIMARY),
          "icon.muted": zedColor(TEXT_SECONDARY),
          "icon.disabled": zedColor(TEXT_TERTIARY),
          "icon.placeholder": zedColor(TEXT_SECONDARY),
          "icon.accent": zedColor(PRIMARY_COLOR),

          // Bars
          "status_bar.background": zedColor(BG_DARKEST),
          "title_bar.background": zedColor(BG_DARKEST),
          "title_bar.inactive_background": zedColor(BG_DARKEST),
          "toolbar.background": zedColor(BG_DARKEST),

          // Tabs
          "tab_bar.background": zedColor(BG_DARKEST),
          "tab.inactive_background": zedColor(BG_DARKEST),
          "tab.active_background": zedColor(BG_DARKER),

          // Search - Using PRIMARY_COLOR
          "search.match_background": zedColor(PRIMARY_COLOR, "40"),
          "search.active_match_background": zedColor(PRIMARY_COLOR, "66"),

          // Scrollbar
          "scrollbar.thumb.background": zedColor(BG_LIGHTEST, "4c"),
          "scrollbar.thumb.hover_background": zedColor(BG_LIGHTEST, "80"),
          "scrollbar.thumb.border": zedColor(BG_LIGHTEST, "40"),
          "scrollbar.track.background": zedColor("#000000", "00"),
          "scrollbar.track.border": zedColor(BG_DARK),

          // Editor
          "editor.foreground": zedColor(TEXT_PRIMARY),
          "editor.background": zedColor(BG_DARKEST),
          "editor.gutter.background": zedColor(BG_DARKEST),
          "editor.subheader.background": zedColor(BG_DARKER),
          "editor.active_line.background": zedColor(BG_DARKER, "bf"),
          "editor.highlighted_line.background": zedColor(BG_DARKER),
          "editor.line_number": zedColor(BG_LIGHTEST),
          "editor.active_line_number": zedColor(TEXT_SECONDARY),
          "editor.hover_line_number": zedColor(TEXT_TERTIARY),
          "editor.invisible": zedColor(BG_LIGHTER),
          "editor.wrap_guide": zedColor(BG_DARK),
          "editor.active_wrap_guide": zedColor(BG_LIGHTER),
          "editor.document_highlight.read_background": zedColor(
            PRIMARY_COLOR,
            "1a",
          ),
          "editor.document_highlight.write_background": zedColor(
            BG_LIGHT,
            "66",
          ),

          // Terminal
          "terminal.background": zedColor(BG_DARKEST),
          "terminal.foreground": zedColor(TEXT_PRIMARY),
          "terminal.bright_foreground": zedColor("#ffffff"),
          "terminal.dim_foreground": zedColor(TEXT_SECONDARY),
          "terminal.ansi.black": zedColor(BG_MEDIUM),
          "terminal.ansi.bright_black": zedColor(TEXT_TERTIARY),
          "terminal.ansi.dim_black": zedColor(BG_DARK),
          "terminal.ansi.red": zedColor(SYNTAX_RED),
          "terminal.ansi.bright_red": zedColor("#e88892"),
          "terminal.ansi.dim_red": zedColor("#a8515a"),
          "terminal.ansi.green": zedColor(SYNTAX_GREEN),
          "terminal.ansi.bright_green": zedColor("#b5d4a2"),
          "terminal.ansi.dim_green": zedColor("#6d8f59"),
          "terminal.ansi.yellow": zedColor(SYNTAX_YELLOW),
          "terminal.ansi.bright_yellow": zedColor("#edd9a3"),
          "terminal.ansi.dim_yellow": zedColor("#b8985b"),
          "terminal.ansi.blue": zedColor(SYNTAX_BLUE),
          "terminal.ansi.bright_blue": zedColor("#89c4f7"),
          "terminal.ansi.dim_blue": zedColor("#457cad"),
          "terminal.ansi.magenta": zedColor(SYNTAX_PURPLE),
          "terminal.ansi.bright_magenta": zedColor("#d898e8"),
          "terminal.ansi.dim_magenta": zedColor("#8d54a0"),
          "terminal.ansi.cyan": zedColor(SYNTAX_CYAN),
          "terminal.ansi.bright_cyan": zedColor("#7fc9d2"),
          "terminal.ansi.dim_cyan": zedColor("#3c818a"),
          "terminal.ansi.white": zedColor(TEXT_PRIMARY),
          "terminal.ansi.bright_white": zedColor("#ffffff"),
          "terminal.ansi.dim_white": zedColor(TEXT_SECONDARY),

          // Links
          "link_text.hover": zedColor(INFO_COLOR),

          // Version Control
          "version_control.added": zedColor(SUCCESS_COLOR),
          "version_control.modified": zedColor(INFO_COLOR),
          "version_control.word_added": zedColor(SUCCESS_COLOR, "59"),
          "version_control.word_deleted": zedColor(SYNTAX_RED, "cc"),
          "version_control.deleted": zedColor(SYNTAX_RED),
          "version_control.conflict_marker.ours": zedColor(SUCCESS_COLOR, "1a"),
          "version_control.conflict_marker.theirs": zedColor(INFO_COLOR, "1a"),

          // Status Colors
          conflict: zedColor(WARNING_COLOR),
          "conflict.background": zedColor(WARNING_COLOR, "1a"),
          "conflict.border": zedColor("#5d4c2f"),

          created: zedColor(SUCCESS_COLOR),
          "created.background": zedColor(SUCCESS_COLOR, "1a"),
          "created.border": zedColor("#38482f"),

          deleted: zedColor(SYNTAX_RED),
          "deleted.background": zedColor(SYNTAX_RED, "1a"),
          "deleted.border": zedColor("#4c2b2c"),

          error: zedColor(SYNTAX_RED),
          "error.background": zedColor(SYNTAX_RED, "1a"),
          "error.border": zedColor("#4c2b2c"),

          hidden: zedColor(TEXT_TERTIARY),
          "hidden.background": zedColor(TEXT_TERTIARY, "1a"),
          "hidden.border": zedColor(BG_DARK),

          hint: zedColor(TEXT_SECONDARY),
          "hint.background": zedColor(TEXT_SECONDARY, "1a"),
          "hint.border": zedColor(BG_LIGHTER),

          ignored: zedColor(TEXT_TERTIARY),
          "ignored.background": zedColor(TEXT_TERTIARY, "1a"),
          "ignored.border": zedColor(BG_DARK),

          info: zedColor(INFO_COLOR),
          "info.background": zedColor(INFO_COLOR, "1a"),
          "info.border": zedColor("#293b5b"),

          modified: zedColor(INFO_COLOR),
          "modified.background": zedColor(INFO_COLOR, "1a"),
          "modified.border": zedColor("#293b5b"),

          predictive: zedColor(TEXT_TERTIARY),
          "predictive.background": zedColor(TEXT_TERTIARY, "1a"),
          "predictive.border": zedColor(BG_LIGHTER),

          renamed: zedColor(SYNTAX_CYAN),
          "renamed.background": zedColor(SYNTAX_CYAN, "1a"),
          "renamed.border": zedColor(BG_LIGHTER),

          success: zedColor(SUCCESS_COLOR),
          "success.background": zedColor(SUCCESS_COLOR, "1a"),
          "success.border": zedColor("#38482f"),

          unreachable: zedColor(TEXT_SECONDARY),
          "unreachable.background": zedColor(TEXT_SECONDARY, "1a"),
          "unreachable.border": zedColor(BG_LIGHTER),

          warning: zedColor(WARNING_COLOR),
          "warning.background": zedColor(WARNING_COLOR, "1a"),
          "warning.border": zedColor("#5d4c2f"),

          // Players (Multiplayer cursors) - Using PRIMARY_COLOR for first player
          players: [
            {
              cursor: zedColor(PRIMARY_COLOR),
              background: zedColor(PRIMARY_COLOR),
              selection: zedColor(PRIMARY_COLOR, "60"),
            },
            {
              cursor: zedColor(SYNTAX_BLUE),
              background: zedColor(SYNTAX_BLUE),
              selection: zedColor(SYNTAX_BLUE, "60"),
            },
            {
              cursor: zedColor(SYNTAX_GREEN),
              background: zedColor(SYNTAX_GREEN),
              selection: zedColor(SYNTAX_GREEN, "60"),
            },
            {
              cursor: zedColor(SYNTAX_PURPLE),
              background: zedColor(SYNTAX_PURPLE),
              selection: zedColor(SYNTAX_PURPLE, "60"),
            },
            {
              cursor: zedColor(SYNTAX_CYAN),
              background: zedColor(SYNTAX_CYAN),
              selection: zedColor(SYNTAX_CYAN, "60"),
            },
            {
              cursor: zedColor(SYNTAX_RED),
              background: zedColor(SYNTAX_RED),
              selection: zedColor(SYNTAX_RED, "60"),
            },
            {
              cursor: zedColor(SYNTAX_YELLOW),
              background: zedColor(SYNTAX_YELLOW),
              selection: zedColor(SYNTAX_YELLOW, "60"),
            },
            {
              cursor: zedColor(SYNTAX_ORANGE),
              background: zedColor(SYNTAX_ORANGE),
              selection: zedColor(SYNTAX_ORANGE, "60"),
            },
          ],

          // Syntax Highlighting
          syntax: {
            attribute: {
              color: zedColor(SYNTAX_ORANGE),
              font_style: "italic",
              font_weight: null,
            },
            boolean: {
              color: zedColor(SYNTAX_ORANGE),
              font_style: null,
              font_weight: null,
            },
            comment: {
              color: zedColor(SYNTAX_COMMENT),
              font_style: "italic",
              font_weight: null,
            },
            "comment.doc": {
              color: zedColor(SYNTAX_COMMENT),
              font_style: "italic",
              font_weight: null,
            },
            constant: {
              color: zedColor(SYNTAX_ORANGE),
              font_style: null,
              font_weight: null,
            },
            constructor: {
              color: zedColor(SYNTAX_YELLOW),
              font_style: null,
              font_weight: null,
            },
            embedded: {
              color: zedColor(TEXT_PRIMARY),
              font_style: null,
              font_weight: null,
            },
            emphasis: {
              color: zedColor(SYNTAX_PURPLE),
              font_style: "italic",
              font_weight: null,
            },
            "emphasis.strong": {
              color: zedColor(SYNTAX_ORANGE),
              font_style: null,
              font_weight: 700,
            },
            enum: {
              color: zedColor(SYNTAX_YELLOW),
              font_style: null,
              font_weight: null,
            },
            function: {
              color: zedColor(SYNTAX_BLUE),
              font_style: null,
              font_weight: null,
            },
            "function.builtin": {
              color: zedColor(SYNTAX_CYAN),
              font_style: null,
              font_weight: null,
            },
            hint: {
              color: zedColor(TEXT_SECONDARY),
              font_style: null,
              font_weight: null,
            },
            keyword: {
              color: zedColor(SYNTAX_PURPLE),
              font_style: null,
              font_weight: null,
            },
            label: {
              color: zedColor(SYNTAX_RED),
              font_style: null,
              font_weight: null,
            },
            link_text: {
              color: zedColor(SYNTAX_BLUE),
              font_style: "normal",
              font_weight: null,
            },
            link_uri: {
              color: zedColor(SYNTAX_PURPLE),
              font_style: null,
              font_weight: null,
            },
            namespace: {
              color: zedColor(SYNTAX_YELLOW),
              font_style: null,
              font_weight: null,
            },
            number: {
              color: zedColor(SYNTAX_ORANGE),
              font_style: null,
              font_weight: null,
            },
            operator: {
              color: zedColor(SYNTAX_CYAN),
              font_style: null,
              font_weight: null,
            },
            predictive: {
              color: zedColor(TEXT_TERTIARY),
              font_style: "italic",
              font_weight: null,
            },
            preproc: {
              color: zedColor(SYNTAX_PURPLE),
              font_style: null,
              font_weight: null,
            },
            primary: {
              color: zedColor(SYNTAX_PUNCTUATION),
              font_style: null,
              font_weight: null,
            },
            property: {
              color: zedColor(SYNTAX_RED),
              font_style: null,
              font_weight: null,
            },
            punctuation: {
              color: zedColor(SYNTAX_PUNCTUATION),
              font_style: null,
              font_weight: null,
            },
            "punctuation.bracket": {
              color: zedColor(SYNTAX_PUNCTUATION),
              font_style: null,
              font_weight: null,
            },
            "punctuation.delimiter": {
              color: zedColor(SYNTAX_PUNCTUATION),
              font_style: null,
              font_weight: null,
            },
            "punctuation.list_marker": {
              color: zedColor(SYNTAX_YELLOW),
              font_style: null,
              font_weight: null,
            },
            "punctuation.markup": {
              color: zedColor(SYNTAX_RED),
              font_style: null,
              font_weight: null,
            },
            "punctuation.special": {
              color: zedColor(SYNTAX_PURPLE),
              font_style: null,
              font_weight: null,
            },
            selector: {
              color: zedColor(SYNTAX_ORANGE),
              font_style: null,
              font_weight: null,
            },
            "selector.pseudo": {
              color: zedColor(SYNTAX_CYAN),
              font_style: null,
              font_weight: null,
            },
            string: {
              color: zedColor(SYNTAX_GREEN),
              font_style: null,
              font_weight: null,
            },
            "string.escape": {
              color: zedColor(SYNTAX_CYAN),
              font_style: null,
              font_weight: null,
            },
            "string.regex": {
              color: zedColor(SYNTAX_RED),
              font_style: null,
              font_weight: null,
            },
            "string.special": {
              color: zedColor(SYNTAX_ORANGE),
              font_style: null,
              font_weight: null,
            },
            "string.special.symbol": {
              color: zedColor(SYNTAX_ORANGE),
              font_style: null,
              font_weight: null,
            },
            tag: {
              color: zedColor(SYNTAX_RED),
              font_style: null,
              font_weight: null,
            },
            "text.literal": {
              color: zedColor(SYNTAX_GREEN),
              font_style: null,
              font_weight: null,
            },
            title: {
              color: zedColor(SYNTAX_RED),
              font_style: null,
              font_weight: 700,
            },
            type: {
              color: zedColor(SYNTAX_YELLOW),
              font_style: null,
              font_weight: null,
            },
            variable: {
              color: zedColor(SYNTAX_RED),
              font_style: null,
              font_weight: null,
            },
            "variable.special": {
              color: zedColor(SYNTAX_YELLOW),
              font_style: "italic",
              font_weight: null,
            },
          },
        },
      },
    ],
  };
}

module.exports = { generateZedTheme };
