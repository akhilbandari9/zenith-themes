/**
 * VS Code Theme Generator
 * Generates the VS Code theme JSON from color definitions
 */

/** Convert hex to RGBA with alpha - outputs format like #fab28340 */
function hexToRgba(hex, alpha = 1) {
  if (alpha === 1) {
    return hex;
  }
  // Convert alpha (0-1) to 2-digit hex (0-255)
  const a = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0");
  return `${hex}${a}`;
}

function generateVSCodeTheme(colors) {
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
    name: "Zenith Dark",
    type: "dark",
    semanticHighlighting: true,
    colors: {
      // Base
      focusBorder: BG_LIGHTEST,
      foreground: TEXT_PRIMARY,
      disabledForeground: hexToRgba(TEXT_SECONDARY, 0.5),
      "widget.shadow": hexToRgba("#000000", 0.38),
      "selection.background": hexToRgba(PRIMARY_COLOR, 0.25),
      descriptionForeground: TEXT_SECONDARY,
      errorForeground: SYNTAX_RED,
      "icon.foreground": TEXT_SECONDARY,
      "sash.hoverBorder": BG_LIGHTEST,

      // Window
      "window.activeBorder": BG_LIGHTEST,
      "window.inactiveBorder": BG_LIGHTER,

      // Title Bar
      "titleBar.activeBackground": BG_DARKEST,
      "titleBar.activeForeground": TEXT_PRIMARY,
      "titleBar.inactiveBackground": BG_DARKEST,
      "titleBar.inactiveForeground": TEXT_SECONDARY,
      "titleBar.border": BG_DARK,

      // Activity Bar
      "activityBar.background": BG_DARKEST,
      "activityBar.foreground": TEXT_PRIMARY,
      "activityBar.inactiveForeground": TEXT_SECONDARY,
      "activityBar.border": BG_DARK,
      "activityBar.activeBorder": PRIMARY_COLOR,
      "activityBar.activeBackground": hexToRgba(BG_DARK, 0.25),
      "activityBarBadge.background": PRIMARY_COLOR,
      "activityBarBadge.foreground": BG_DARKEST,

      // Side Bar
      "sideBar.background": BG_DARKER,
      "sideBar.foreground": TEXT_PRIMARY,
      "sideBar.border": BG_DARK,
      "sideBar.dropBackground": hexToRgba(BG_LIGHT, 0.5),
      "sideBarTitle.foreground": TEXT_PRIMARY,
      "sideBarSectionHeader.background": BG_DARK,
      "sideBarSectionHeader.foreground": TEXT_PRIMARY,
      "sideBarSectionHeader.border": BG_DARK,

      // Editor
      "editor.background": BG_DARKEST,
      "editor.foreground": TEXT_PRIMARY,
      "editor.lineHighlightBackground": BG_DARKER,
      "editor.lineHighlightBorder": hexToRgba("#000000", 0),
      "editor.selectionBackground": hexToRgba(PRIMARY_COLOR, 0.22),
      "editor.selectionHighlightBackground": hexToRgba(PRIMARY_COLOR, 0.15),
      "editor.inactiveSelectionBackground": hexToRgba(PRIMARY_COLOR, 0.13),
      "editor.wordHighlightBackground": hexToRgba(BG_LIGHT, 0.38),
      "editor.wordHighlightStrongBackground": hexToRgba(BG_LIGHTER, 0.38),
      "editor.findMatchBackground": hexToRgba(PRIMARY_COLOR, 0.25),
      "editor.findMatchHighlightBackground": hexToRgba(PRIMARY_COLOR, 0.13),
      "editor.findMatchBorder": hexToRgba(PRIMARY_COLOR, 0.5),
      "editor.rangeHighlightBackground": hexToRgba(BG_DARKER, 0.5),
      "editor.hoverHighlightBackground": hexToRgba(BG_MEDIUM, 0.5),
      "editor.foldBackground": hexToRgba(BG_DARKER, 0.5),
      "editorLink.activeForeground": INFO_COLOR,
      "editorCursor.foreground": PRIMARY_COLOR,
      "editorCursor.background": BG_DARKEST,
      "editorWhitespace.foreground": BG_LIGHTER,
      "editorIndentGuide.background1": BG_DARK,
      "editorIndentGuide.activeBackground1": BG_LIGHTER,
      "editorRuler.foreground": BG_DARK,
      "editorLineNumber.foreground": BG_LIGHTEST,
      "editorLineNumber.activeForeground": TEXT_SECONDARY,
      "editorBracketMatch.background": hexToRgba(BG_LIGHTER, 0.25),
      "editorBracketMatch.border": hexToRgba(BG_LIGHTEST, 0.5),
      "editorCodeLens.foreground": TEXT_SECONDARY,
      "editorLightBulb.foreground": WARNING_COLOR,
      "editorLightBulbAutoFix.foreground": SUCCESS_COLOR,

      // Bracket Pair Colorization
      "editorBracketHighlight.foreground1": SYNTAX_ORANGE,
      "editorBracketHighlight.foreground2": SYNTAX_PURPLE,
      "editorBracketHighlight.foreground3": SYNTAX_CYAN,
      "editorBracketHighlight.foreground4": SYNTAX_YELLOW,
      "editorBracketHighlight.foreground5": SYNTAX_BLUE,
      "editorBracketHighlight.foreground6": SYNTAX_GREEN,
      "editorBracketHighlight.unexpectedBracket.foreground": SYNTAX_RED,

      // Editor Gutter
      "editorGutter.modifiedBackground": INFO_COLOR,
      "editorGutter.addedBackground": SUCCESS_COLOR,
      "editorGutter.deletedBackground": SYNTAX_RED,
      "editorGutter.commentRangeForeground": BG_LIGHTER,
      "editorGutter.foldingControlForeground": TEXT_SECONDARY,

      // Overview Ruler
      "editorOverviewRuler.border": BG_DARK,
      "editorOverviewRuler.findMatchForeground": hexToRgba(PRIMARY_COLOR, 0.5),
      "editorOverviewRuler.rangeHighlightForeground": hexToRgba(
        PRIMARY_COLOR,
        0.25,
      ),
      "editorOverviewRuler.selectionHighlightForeground": hexToRgba(
        BG_LIGHTEST,
        0.5,
      ),
      "editorOverviewRuler.wordHighlightForeground": hexToRgba(
        BG_LIGHTEST,
        0.5,
      ),
      "editorOverviewRuler.wordHighlightStrongForeground": hexToRgba(
        BG_LIGHTEST,
        0.5,
      ),
      "editorOverviewRuler.modifiedForeground": INFO_COLOR,
      "editorOverviewRuler.addedForeground": SUCCESS_COLOR,
      "editorOverviewRuler.deletedForeground": SYNTAX_RED,
      "editorOverviewRuler.errorForeground": SYNTAX_RED,
      "editorOverviewRuler.warningForeground": WARNING_COLOR,
      "editorOverviewRuler.infoForeground": INFO_COLOR,
      "editorOverviewRuler.bracketMatchForeground": hexToRgba(BG_LIGHTEST, 0.5),

      // Problems
      "editorError.foreground": SYNTAX_RED,
      "editorError.border": hexToRgba("#000000", 0),
      "editorWarning.foreground": WARNING_COLOR,
      "editorWarning.border": hexToRgba("#000000", 0),
      "editorInfo.foreground": INFO_COLOR,
      "editorInfo.border": hexToRgba("#000000", 0),
      "editorHint.foreground": SUCCESS_COLOR,
      "editorHint.border": hexToRgba("#000000", 0),
      "problemsErrorIcon.foreground": SYNTAX_RED,
      "problemsWarningIcon.foreground": WARNING_COLOR,
      "problemsInfoIcon.foreground": INFO_COLOR,

      // Editor Groups & Tabs
      "editorGroup.border": BG_DARK,
      "editorGroup.dropBackground": hexToRgba(BG_LIGHT, 0.5),
      "editorGroupHeader.noTabsBackground": BG_DARKEST,
      "editorGroupHeader.tabsBackground": BG_DARKEST,
      "editorGroupHeader.tabsBorder": BG_DARKEST,
      "editorGroupHeader.border": BG_DARK,

      // Tabs
      "tab.activeBackground": BG_DARKER,
      "tab.activeForeground": TEXT_PRIMARY,
      "tab.activeBorder": hexToRgba("#000000", 0),
      "tab.activeBorderTop": PRIMARY_COLOR,
      "tab.inactiveBackground": BG_DARKEST,
      "tab.inactiveForeground": TEXT_SECONDARY,
      "tab.unfocusedActiveBackground": BG_DARKER,
      "tab.unfocusedActiveForeground": TEXT_SECONDARY,
      "tab.unfocusedActiveBorderTop": hexToRgba("#000000", 0),
      "tab.unfocusedInactiveBackground": BG_DARKEST,
      "tab.unfocusedInactiveForeground": hexToRgba(TEXT_TERTIARY, 0.5),
      "tab.hoverBackground": BG_DARK,
      "tab.hoverForeground": TEXT_PRIMARY,
      "tab.border": BG_DARKEST,
      "tab.lastPinnedBorder": BG_LIGHTER,

      // Status Bar
      "statusBar.background": BG_DARKEST,
      "statusBar.foreground": TEXT_SECONDARY,
      "statusBar.border": BG_DARK,
      "statusBar.debuggingBackground": hexToRgba(SYNTAX_RED, 0.19),
      "statusBar.debuggingForeground": TEXT_PRIMARY,
      "statusBar.debuggingBorder": hexToRgba(SYNTAX_RED, 0.38),
      "statusBar.noFolderBackground": BG_DARKEST,
      "statusBar.noFolderForeground": TEXT_SECONDARY,
      "statusBar.noFolderBorder": BG_DARK,
      "statusBarItem.activeBackground": hexToRgba(BG_LIGHT, 0.5),
      "statusBarItem.hoverBackground": BG_DARK,
      "statusBarItem.prominentBackground": BG_DARK,
      "statusBarItem.prominentForeground": TEXT_PRIMARY,
      "statusBarItem.prominentHoverBackground": BG_MEDIUM,
      "statusBarItem.remoteBackground": BG_DARK,
      "statusBarItem.remoteForeground": TEXT_PRIMARY,
      "statusBarItem.errorBackground": SYNTAX_RED,
      "statusBarItem.errorForeground": BG_DARKEST,
      "statusBarItem.warningBackground": WARNING_COLOR,
      "statusBarItem.warningForeground": BG_DARKEST,

      // Buttons - Using PRIMARY_COLOR
      "button.background": PRIMARY_COLOR,
      "button.foreground": BG_DARKEST,
      "button.hoverBackground": PRIMARY_HOVER_COLOR,
      "button.secondaryBackground": BG_LIGHTER,
      "button.secondaryForeground": TEXT_PRIMARY,
      "button.secondaryHoverBackground": BG_LIGHTEST,
      "button.separator": hexToRgba(BG_DARKEST, 0.25),

      // Inputs
      "input.background": BG_DARKER,
      "input.foreground": TEXT_PRIMARY,
      "input.border": BG_LIGHTER,
      "input.placeholderForeground": TEXT_SECONDARY,
      "inputOption.activeBackground": hexToRgba(BG_LIGHT, 0.5),
      "inputOption.activeBorder": hexToRgba(BG_LIGHTEST, 0.5),
      "inputOption.activeForeground": TEXT_PRIMARY,
      "inputOption.hoverBackground": hexToRgba(BG_MEDIUM, 0.5),
      "inputValidation.errorBackground": BG_DARK,
      "inputValidation.errorBorder": SYNTAX_RED,
      "inputValidation.errorForeground": SYNTAX_RED,
      "inputValidation.warningBackground": BG_DARK,
      "inputValidation.warningBorder": WARNING_COLOR,
      "inputValidation.warningForeground": WARNING_COLOR,
      "inputValidation.infoBackground": BG_DARK,
      "inputValidation.infoBorder": INFO_COLOR,
      "inputValidation.infoForeground": INFO_COLOR,

      // Dropdowns
      "dropdown.background": BG_DARKER,
      "dropdown.foreground": TEXT_PRIMARY,
      "dropdown.border": BG_LIGHTER,
      "dropdown.listBackground": BG_DARKER,

      // Checkboxes
      "checkbox.background": BG_DARKER,
      "checkbox.foreground": TEXT_PRIMARY,
      "checkbox.border": BG_LIGHTER,
      "checkbox.selectBackground": BG_DARK,
      "checkbox.selectBorder": BG_LIGHTEST,

      // Lists
      "list.activeSelectionBackground": BG_MEDIUM,
      "list.activeSelectionForeground": TEXT_PRIMARY,
      "list.activeSelectionIconForeground": TEXT_PRIMARY,
      "list.inactiveSelectionBackground": BG_DARK,
      "list.inactiveSelectionForeground": TEXT_PRIMARY,
      "list.hoverBackground": BG_DARK,
      "list.hoverForeground": TEXT_PRIMARY,
      "list.focusBackground": BG_MEDIUM,
      "list.focusForeground": TEXT_PRIMARY,
      "list.focusOutline": BG_LIGHTEST,
      "list.focusHighlightForeground": PRIMARY_COLOR,
      "list.highlightForeground": PRIMARY_COLOR,
      "list.invalidItemForeground": SYNTAX_RED,
      "list.errorForeground": SYNTAX_RED,
      "list.warningForeground": WARNING_COLOR,
      "list.deemphasizedForeground": TEXT_SECONDARY,
      "list.filterMatchBackground": hexToRgba(PRIMARY_COLOR, 0.25),
      "list.filterMatchBorder": hexToRgba(PRIMARY_COLOR, 0.38),
      "listFilterWidget.background": BG_DARK,
      "listFilterWidget.outline": BG_LIGHTEST,
      "listFilterWidget.noMatchesOutline": SYNTAX_RED,
      "listFilterWidget.shadow": hexToRgba("#000000", 0.38),
      "tree.indentGuidesStroke": BG_LIGHTER,
      "tree.tableColumnsBorder": BG_DARK,
      "tree.tableOddRowsBackground": hexToRgba(BG_DARKER, 0.5),

      // Scrollbar
      "scrollbar.shadow": hexToRgba("#000000", 0.38),
      "scrollbarSlider.background": hexToRgba(BG_LIGHTEST, 0.25),
      "scrollbarSlider.hoverBackground": hexToRgba(BG_LIGHTEST, 0.5),
      "scrollbarSlider.activeBackground": BG_LIGHTEST,

      // Minimap
      "minimap.findMatchHighlight": hexToRgba(PRIMARY_COLOR, 0.5),
      "minimap.selectionHighlight": hexToRgba(BG_LIGHT, 0.5),
      "minimap.errorHighlight": hexToRgba(SYNTAX_RED, 0.5),
      "minimap.warningHighlight": hexToRgba(WARNING_COLOR, 0.5),
      "minimap.selectionOccurrenceHighlight": hexToRgba(BG_LIGHT, 0.38),
      "minimapSlider.background": hexToRgba(BG_LIGHTEST, 0.13),
      "minimapSlider.hoverBackground": hexToRgba(BG_LIGHTEST, 0.25),
      "minimapSlider.activeBackground": hexToRgba(BG_LIGHTEST, 0.38),
      "minimapGutter.addedBackground": SUCCESS_COLOR,
      "minimapGutter.modifiedBackground": INFO_COLOR,
      "minimapGutter.deletedBackground": SYNTAX_RED,

      // Badges - Using PRIMARY_COLOR
      "badge.background": PRIMARY_COLOR,
      "badge.foreground": BG_DARKEST,

      // Breadcrumbs
      "breadcrumb.foreground": TEXT_SECONDARY,
      "breadcrumb.focusForeground": TEXT_PRIMARY,
      "breadcrumb.activeSelectionForeground": TEXT_PRIMARY,
      "breadcrumbPicker.background": BG_DARKER,

      // Quick Input
      "quickInput.background": BG_DARKER,
      "quickInput.foreground": TEXT_PRIMARY,
      "quickInputList.focusBackground": BG_MEDIUM,
      "quickInputList.focusForeground": TEXT_PRIMARY,
      "quickInputList.focusIconForeground": TEXT_PRIMARY,
      "quickInputTitle.background": BG_DARK,
      "commandCenter.foreground": TEXT_SECONDARY,
      "commandCenter.activeForeground": TEXT_PRIMARY,
      "commandCenter.background": BG_DARKER,
      "commandCenter.activeBackground": BG_DARK,
      "commandCenter.border": BG_LIGHTER,
      "commandCenter.inactiveForeground": TEXT_TERTIARY,
      "commandCenter.inactiveBorder": BG_DARK,
      "commandCenter.activeBorder": BG_LIGHTER,

      // Notifications
      "notificationCenter.border": BG_LIGHTER,
      "notificationCenterHeader.background": BG_DARKER,
      "notificationCenterHeader.foreground": TEXT_PRIMARY,
      "notificationToast.border": BG_LIGHTER,
      "notifications.background": BG_DARK,
      "notifications.foreground": TEXT_PRIMARY,
      "notifications.border": BG_LIGHTER,
      "notificationLink.foreground": INFO_COLOR,
      "notificationsErrorIcon.foreground": SYNTAX_RED,
      "notificationsWarningIcon.foreground": WARNING_COLOR,
      "notificationsInfoIcon.foreground": INFO_COLOR,

      // Panel
      "panel.background": BG_DARKEST,
      "panel.border": BG_DARK,
      "panel.dropBorder": TEXT_SECONDARY,
      "panelTitle.activeBorder": PRIMARY_COLOR,
      "panelTitle.activeForeground": TEXT_PRIMARY,
      "panelTitle.inactiveForeground": TEXT_SECONDARY,
      "panelInput.border": BG_LIGHTER,
      "panelSection.border": BG_DARK,
      "panelSection.dropBackground": hexToRgba(BG_LIGHT, 0.5),
      "panelSectionHeader.background": hexToRgba(BG_DARKER, 0.5),
      "panelSectionHeader.foreground": TEXT_PRIMARY,
      "panelSectionHeader.border": BG_DARK,

      // Terminal
      "terminal.background": BG_DARKEST,
      "terminal.foreground": TEXT_PRIMARY,
      "terminal.ansiBlack": BG_MEDIUM,
      "terminal.ansiRed": SYNTAX_RED,
      "terminal.ansiGreen": SYNTAX_GREEN,
      "terminal.ansiYellow": SYNTAX_YELLOW,
      "terminal.ansiBlue": SYNTAX_BLUE,
      "terminal.ansiMagenta": SYNTAX_PURPLE,
      "terminal.ansiCyan": SYNTAX_CYAN,
      "terminal.ansiWhite": TEXT_PRIMARY,
      "terminal.ansiBrightBlack": TEXT_TERTIARY,
      "terminal.ansiBrightRed": "#e88892",
      "terminal.ansiBrightGreen": "#b5d4a2",
      "terminal.ansiBrightYellow": "#edd9a3",
      "terminal.ansiBrightBlue": "#89c4f7",
      "terminal.ansiBrightMagenta": "#d898e8",
      "terminal.ansiBrightCyan": "#7fc9d2",
      "terminal.ansiBrightWhite": "#ffffff",
      "terminal.selectionBackground": hexToRgba(PRIMARY_COLOR, 0.22),
      "terminal.inactiveSelectionBackground": hexToRgba(PRIMARY_COLOR, 0.13),
      "terminalCursor.foreground": PRIMARY_COLOR,
      "terminalCursor.background": BG_DARKEST,

      // Git Decorations
      "gitDecoration.modifiedResourceForeground": INFO_COLOR,
      "gitDecoration.deletedResourceForeground": SYNTAX_RED,
      "gitDecoration.untrackedResourceForeground": SUCCESS_COLOR,
      "gitDecoration.conflictingResourceForeground": WARNING_COLOR,
      "gitDecoration.ignoredResourceForeground": hexToRgba(TEXT_TERTIARY, 0.5),
      "gitDecoration.submoduleResourceForeground": SYNTAX_CYAN,
      "gitDecoration.stageModifiedResourceForeground": INFO_COLOR,
      "gitDecoration.stageDeletedResourceForeground": SYNTAX_RED,
      "gitDecoration.renamedResourceForeground": SYNTAX_CYAN,

      // Diff Editor
      "diffEditor.insertedTextBackground": hexToRgba(SUCCESS_COLOR, 0.13),
      "diffEditor.insertedLineBackground": hexToRgba(SUCCESS_COLOR, 0.08),
      "diffEditor.removedTextBackground": hexToRgba(SYNTAX_RED, 0.13),
      "diffEditor.removedLineBackground": hexToRgba(SYNTAX_RED, 0.08),
      "diffEditor.border": BG_DARK,
      "diffEditor.diagonalFill": BG_DARK,
      "diffEditor.insertedTextBorder": hexToRgba("#000000", 0),
      "diffEditor.removedTextBorder": hexToRgba("#000000", 0),
      "diffEditorGutter.insertedLineBackground": hexToRgba(SUCCESS_COLOR, 0.13),
      "diffEditorGutter.removedLineBackground": hexToRgba(SYNTAX_RED, 0.13),
      "diffEditorOverview.insertedForeground": hexToRgba(SUCCESS_COLOR, 0.5),
      "diffEditorOverview.removedForeground": hexToRgba(SYNTAX_RED, 0.5),

      // Peek View
      "peekView.border": BG_LIGHTEST,
      "peekViewEditor.background": BG_DARKEST,
      "peekViewEditor.matchHighlightBackground": hexToRgba(PRIMARY_COLOR, 0.25),
      "peekViewEditor.matchHighlightBorder": hexToRgba(PRIMARY_COLOR, 0.38),
      "peekViewEditorGutter.background": BG_DARKEST,
      "peekViewResult.background": BG_DARKER,
      "peekViewResult.fileForeground": TEXT_PRIMARY,
      "peekViewResult.lineForeground": TEXT_SECONDARY,
      "peekViewResult.matchHighlightBackground": hexToRgba(PRIMARY_COLOR, 0.25),
      "peekViewResult.selectionBackground": hexToRgba(BG_MEDIUM, 0.5),
      "peekViewResult.selectionForeground": TEXT_PRIMARY,
      "peekViewTitle.background": BG_DARKER,
      "peekViewTitleDescription.foreground": TEXT_SECONDARY,
      "peekViewTitleLabel.foreground": TEXT_PRIMARY,

      // Merge Conflicts
      "merge.currentHeaderBackground": hexToRgba(SUCCESS_COLOR, 0.25),
      "merge.currentContentBackground": hexToRgba(SUCCESS_COLOR, 0.13),
      "merge.incomingHeaderBackground": hexToRgba(INFO_COLOR, 0.25),
      "merge.incomingContentBackground": hexToRgba(INFO_COLOR, 0.13),
      "merge.border": hexToRgba("#000000", 0),
      "merge.commonHeaderBackground": BG_LIGHTEST,
      "merge.commonContentBackground": hexToRgba(BG_MEDIUM, 0.5),
      "editorOverviewRuler.currentContentForeground": hexToRgba(
        SUCCESS_COLOR,
        0.5,
      ),
      "editorOverviewRuler.incomingContentForeground": hexToRgba(
        INFO_COLOR,
        0.5,
      ),
      "editorOverviewRuler.commonContentForeground": hexToRgba(
        BG_LIGHTEST,
        0.5,
      ),

      // Settings
      "settings.headerForeground": TEXT_PRIMARY,
      "settings.modifiedItemIndicator": INFO_COLOR,
      "settings.dropdownBackground": BG_DARKER,
      "settings.dropdownForeground": TEXT_PRIMARY,
      "settings.dropdownBorder": BG_LIGHTER,
      "settings.dropdownListBorder": BG_LIGHTER,
      "settings.checkboxBackground": BG_DARKER,
      "settings.checkboxForeground": TEXT_PRIMARY,
      "settings.checkboxBorder": BG_LIGHTER,
      "settings.textInputBackground": BG_DARKER,
      "settings.textInputForeground": TEXT_PRIMARY,
      "settings.textInputBorder": BG_LIGHTER,
      "settings.numberInputBackground": BG_DARKER,
      "settings.numberInputForeground": TEXT_PRIMARY,
      "settings.numberInputBorder": BG_LIGHTER,
      "settings.focusedRowBackground": hexToRgba(BG_DARK, 0.25),
      "settings.focusedRowBorder": BG_LIGHTEST,
      "settings.rowHoverBackground": hexToRgba(BG_DARKER, 0.5),
      "settings.sashBorder": BG_LIGHTER,

      // Debug
      "debugToolBar.background": BG_DARK,
      "debugToolBar.border": BG_LIGHTER,
      "debugExceptionWidget.background": BG_DARK,
      "debugExceptionWidget.border": SYNTAX_RED,
      "debugTokenExpression.name": SYNTAX_RED,
      "debugTokenExpression.value": SYNTAX_GREEN,
      "debugTokenExpression.string": SYNTAX_GREEN,
      "debugTokenExpression.boolean": SYNTAX_ORANGE,
      "debugTokenExpression.number": SYNTAX_ORANGE,
      "debugTokenExpression.error": SYNTAX_RED,
      "debugIcon.breakpointForeground": SYNTAX_RED,
      "debugIcon.breakpointDisabledForeground": TEXT_SECONDARY,
      "debugIcon.breakpointUnverifiedForeground": TEXT_SECONDARY,
      "debugIcon.startForeground": SUCCESS_COLOR,
      "debugIcon.pauseForeground": SYNTAX_YELLOW,
      "debugIcon.stopForeground": SYNTAX_RED,
      "debugIcon.disconnectForeground": SYNTAX_RED,
      "debugIcon.restartForeground": SUCCESS_COLOR,
      "debugIcon.stepOverForeground": INFO_COLOR,
      "debugIcon.stepIntoForeground": INFO_COLOR,
      "debugIcon.stepOutForeground": INFO_COLOR,
      "debugIcon.continueForeground": SUCCESS_COLOR,
      "debugIcon.stepBackForeground": INFO_COLOR,
      "debugConsole.infoForeground": INFO_COLOR,
      "debugConsole.warningForeground": WARNING_COLOR,
      "debugConsole.errorForeground": SYNTAX_RED,
      "debugConsole.sourceForeground": TEXT_SECONDARY,
      "debugConsoleInputIcon.foreground": PRIMARY_COLOR,

      // Editor Widget
      "editorWidget.background": BG_DARKER,
      "editorWidget.foreground": TEXT_PRIMARY,
      "editorWidget.border": BG_LIGHTER,
      "editorWidget.resizeBorder": BG_LIGHTEST,
      "editorSuggestWidget.background": BG_DARKER,
      "editorSuggestWidget.foreground": TEXT_PRIMARY,
      "editorSuggestWidget.border": BG_LIGHTER,
      "editorSuggestWidget.highlightForeground": PRIMARY_COLOR,
      "editorSuggestWidget.focusHighlightForeground": PRIMARY_COLOR,
      "editorSuggestWidget.selectedBackground": BG_MEDIUM,
      "editorSuggestWidget.selectedForeground": TEXT_PRIMARY,
      "editorSuggestWidget.selectedIconForeground": TEXT_PRIMARY,
      "editorHoverWidget.background": BG_DARKER,
      "editorHoverWidget.foreground": TEXT_PRIMARY,
      "editorHoverWidget.border": BG_LIGHTER,
      "editorHoverWidget.highlightForeground": PRIMARY_COLOR,
      "editorHoverWidget.statusBarBackground": BG_DARK,
      "editorGhostText.foreground": hexToRgba(TEXT_TERTIARY, 0.5),

      // Keybindings
      "keybindingLabel.background": hexToRgba(BG_MEDIUM, 0.5),
      "keybindingLabel.foreground": TEXT_PRIMARY,
      "keybindingLabel.border": hexToRgba(BG_LIGHTEST, 0.5),
      "keybindingLabel.bottomBorder": hexToRgba(BG_LIGHTER, 0.5),

      // Text
      "textLink.foreground": INFO_COLOR,
      "textLink.activeForeground": "#82b4f7",
      "textBlockQuote.background": hexToRgba(BG_DARKER, 0.5),
      "textBlockQuote.border": BG_LIGHTER,
      "textCodeBlock.background": BG_DARK,
      "textPreformat.foreground": PRIMARY_COLOR,
      "textPreformat.background": BG_DARK,
      "textSeparator.foreground": BG_LIGHTER,

      // Welcome Page
      "welcomePage.background": BG_DARKEST,
      "welcomePage.tileBackground": BG_DARKER,
      "welcomePage.tileHoverBackground": BG_DARK,
      "welcomePage.tileBorder": BG_DARK,
      "welcomePage.progress.foreground": PRIMARY_COLOR,
      "walkThrough.embeddedEditorBackground": BG_DARKEST,

      // Progress Bar - Using PRIMARY_COLOR
      "progressBar.background": PRIMARY_COLOR,

      // Charts
      "charts.foreground": TEXT_PRIMARY,
      "charts.lines": TEXT_SECONDARY,
      "charts.red": SYNTAX_RED,
      "charts.blue": SYNTAX_BLUE,
      "charts.yellow": SYNTAX_YELLOW,
      "charts.orange": SYNTAX_ORANGE,
      "charts.green": SYNTAX_GREEN,
      "charts.purple": SYNTAX_PURPLE,

      // Testing
      "testing.iconFailed": SYNTAX_RED,
      "testing.iconErrored": SYNTAX_RED,
      "testing.iconPassed": SUCCESS_COLOR,
      "testing.iconQueued": TEXT_SECONDARY,
      "testing.iconUnset": TEXT_SECONDARY,
      "testing.iconSkipped": TEXT_SECONDARY,
      "testing.runAction": SUCCESS_COLOR,

      // Symbol Icons
      "symbolIcon.classForeground": SYNTAX_YELLOW,
      "symbolIcon.colorForeground": SYNTAX_ORANGE,
      "symbolIcon.constantForeground": SYNTAX_ORANGE,
      "symbolIcon.constructorForeground": SYNTAX_PURPLE,
      "symbolIcon.enumeratorForeground": SYNTAX_YELLOW,
      "symbolIcon.enumeratorMemberForeground": SYNTAX_ORANGE,
      "symbolIcon.eventForeground": SYNTAX_ORANGE,
      "symbolIcon.fieldForeground": SYNTAX_RED,
      "symbolIcon.fileForeground": TEXT_SECONDARY,
      "symbolIcon.folderForeground": TEXT_SECONDARY,
      "symbolIcon.functionForeground": SYNTAX_BLUE,
      "symbolIcon.interfaceForeground": SYNTAX_YELLOW,
      "symbolIcon.keyForeground": SYNTAX_RED,
      "symbolIcon.keywordForeground": SYNTAX_PURPLE,
      "symbolIcon.methodForeground": SYNTAX_BLUE,
      "symbolIcon.moduleForeground": SYNTAX_RED,
      "symbolIcon.namespaceForeground": SYNTAX_YELLOW,
      "symbolIcon.numberForeground": SYNTAX_ORANGE,
      "symbolIcon.objectForeground": SYNTAX_YELLOW,
      "symbolIcon.operatorForeground": SYNTAX_CYAN,
      "symbolIcon.packageForeground": SYNTAX_ORANGE,
      "symbolIcon.propertyForeground": SYNTAX_RED,
      "symbolIcon.referenceForeground": SYNTAX_RED,
      "symbolIcon.snippetForeground": TEXT_SECONDARY,
      "symbolIcon.stringForeground": SYNTAX_GREEN,
      "symbolIcon.structForeground": SYNTAX_YELLOW,
      "symbolIcon.textForeground": TEXT_PRIMARY,
      "symbolIcon.typeParameterForeground": SYNTAX_YELLOW,
      "symbolIcon.unitForeground": SYNTAX_ORANGE,
      "symbolIcon.variableForeground": SYNTAX_RED,
    },
    tokenColors: [
      {
        name: "Comments",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: SYNTAX_COMMENT,
          fontStyle: "italic",
        },
      },
      {
        name: "Keywords",
        scope: [
          "keyword",
          "keyword.control",
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.operator.cast",
          "keyword.operator.sizeof",
          "keyword.operator.instanceof",
          "keyword.operator.logical.python",
          "keyword.operator.wordlike",
          "keyword.operator.module",
          "storage",
          "storage.type",
          "storage.modifier",
        ],
        settings: {
          foreground: SYNTAX_PURPLE,
        },
      },
      {
        name: "Functions",
        scope: [
          "entity.name.function",
          "meta.function-call",
          "support.function",
          "variable.function",
          "keyword.other.special-method",
          "meta.method-call entity.name.function",
          "entity.name.function.member",
        ],
        settings: {
          foreground: SYNTAX_BLUE,
        },
      },
      {
        name: "Variables",
        scope: [
          "variable",
          "variable.other",
          "variable.other.readwrite",
          "meta.object-literal.key",
          "support.variable.property",
          "support.variable.object",
        ],
        settings: {
          foreground: SYNTAX_RED,
        },
      },
      {
        name: "Variable Object and Constant",
        scope: ["variable.other.object", "variable.other.constant"],
        settings: {
          foreground: SYNTAX_YELLOW,
        },
      },
      {
        name: "Variable Language",
        scope: [
          "variable.language",
          "variable.language.this",
          "variable.language.self",
          "variable.language.super",
        ],
        settings: {
          foreground: SYNTAX_YELLOW,
          fontStyle: "italic",
        },
      },
      {
        name: "Parameters",
        scope: ["variable.parameter", "meta.parameter"],
        settings: {
          foreground: SYNTAX_PUNCTUATION,
          fontStyle: "italic",
        },
      },
      {
        name: "Strings",
        scope: [
          "string",
          "string.quoted",
          "string.template",
          "string.quoted.single",
          "string.quoted.double",
          "string.quoted.triple",
        ],
        settings: {
          foreground: SYNTAX_GREEN,
        },
      },
      {
        name: "Template String Interpolation",
        scope: [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
        ],
        settings: {
          foreground: SYNTAX_PURPLE,
        },
      },
      {
        name: "String Escape Characters",
        scope: ["constant.character.escape"],
        settings: {
          foreground: SYNTAX_CYAN,
        },
      },
      {
        name: "Numbers",
        scope: [
          "constant.numeric",
          "constant.numeric.integer",
          "constant.numeric.float",
          "constant.numeric.hex",
          "constant.numeric.octal",
          "constant.numeric.binary",
        ],
        settings: {
          foreground: SYNTAX_ORANGE,
        },
      },
      {
        name: "Built-in Constants",
        scope: [
          "constant.language",
          "constant.language.boolean",
          "constant.language.null",
          "constant.language.undefined",
        ],
        settings: {
          foreground: SYNTAX_ORANGE,
        },
      },
      {
        name: "Types and Classes",
        scope: [
          "entity.name.type",
          "entity.name.class",
          "entity.name.namespace",
          "entity.name.type.class",
          "support.type",
          "support.class",
          "entity.other.inherited-class",
          "storage.type.java",
          "storage.type.cs",
          "storage.type.generic.java",
          "storage.type.generic.cs",
        ],
        settings: {
          foreground: SYNTAX_YELLOW,
        },
      },
      {
        name: "Interfaces and Type Parameters",
        scope: [
          "entity.name.type.interface",
          "entity.name.type.type-parameter",
        ],
        settings: {
          foreground: SYNTAX_YELLOW,
        },
      },
      {
        name: "Operators",
        scope: [
          "keyword.operator",
          "keyword.operator.assignment",
          "keyword.operator.arithmetic",
          "keyword.operator.comparison",
          "keyword.operator.logical",
          "keyword.operator.spread",
          "keyword.operator.rest",
          "keyword.operator.type",
          "keyword.operator.relational",
          "keyword.operator.increment",
          "keyword.operator.decrement",
          "keyword.operator.bitwise",
        ],
        settings: {
          foreground: SYNTAX_CYAN,
        },
      },
      {
        name: "Ternary and Optional Operators",
        scope: ["keyword.operator.ternary", "keyword.operator.optional"],
        settings: {
          foreground: SYNTAX_PURPLE,
        },
      },
      {
        name: "Punctuation",
        scope: [
          "punctuation",
          "punctuation.definition.tag",
          "punctuation.separator",
          "punctuation.terminator",
          "punctuation.definition.parameters",
          "punctuation.definition.array",
          "punctuation.section",
          "punctuation.accessor",
          "meta.brace.round",
          "meta.brace.square",
          "meta.brace.curly",
        ],
        settings: {
          foreground: SYNTAX_PUNCTUATION,
        },
      },
      {
        name: "HTML Tags",
        scope: [
          "entity.name.tag",
          "entity.name.tag.html",
          "entity.name.tag.xml",
          "entity.name.tag.css",
          "entity.name.tag.js.jsx",
          "entity.name.tag.ts.tsx",
          "support.class.component",
        ],
        settings: {
          foreground: SYNTAX_RED,
        },
      },
      {
        name: "HTML Attributes",
        scope: [
          "entity.other.attribute-name",
          "entity.other.attribute-name.html",
          "entity.other.attribute-name.xml",
          "entity.other.attribute-name.jsx",
          "entity.other.attribute-name.tsx",
        ],
        settings: {
          foreground: SYNTAX_ORANGE,
          fontStyle: "italic",
        },
      },
      {
        name: "HTML Attribute ID",
        scope: ["entity.other.attribute-name.id"],
        settings: {
          foreground: SYNTAX_BLUE,
        },
      },
      {
        name: "CSS Properties",
        scope: [
          "support.type.property-name",
          "support.type.property-name.css",
          "support.type.property-name.scss",
          "support.type.property-name.less",
        ],
        settings: {
          foreground: SYNTAX_PUNCTUATION,
        },
      },
      {
        name: "CSS Vendor Properties",
        scope: [
          "support.type.vendored.property-name.css",
          "support.type.vendored.property-name.scss",
          "support.type.vendored.property-name.less",
        ],
        settings: {
          foreground: SYNTAX_CYAN,
        },
      },
      {
        name: "CSS Values",
        scope: [
          "support.constant.property-value",
          "support.constant.font-name",
          "support.constant.color",
          "support.constant.color.w3c-standard-color-name",
          "constant.other.color",
        ],
        settings: {
          foreground: SYNTAX_ORANGE,
        },
      },
      {
        name: "CSS Units",
        scope: ["keyword.other.unit"],
        settings: {
          foreground: SYNTAX_RED,
        },
      },
      {
        name: "CSS Selectors",
        scope: [
          "entity.other.attribute-name.class.css",
          "entity.other.attribute-name.class.scss",
        ],
        settings: {
          foreground: SYNTAX_ORANGE,
        },
      },
      {
        name: "CSS Pseudo",
        scope: [
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.pseudo-element.css",
          "entity.other.attribute-name.id.css",
        ],
        settings: {
          foreground: SYNTAX_CYAN,
        },
      },
      {
        name: "JSON Keys",
        scope: [
          "support.type.property-name.json",
          "string.json support.type.property-name",
        ],
        settings: {
          foreground: SYNTAX_RED,
        },
      },
      {
        name: "JSON Constants",
        scope: ["constant.language.json"],
        settings: {
          foreground: SYNTAX_CYAN,
        },
      },
      {
        name: "Markdown Headings",
        scope: [
          "entity.name.section.markdown",
          "punctuation.definition.heading.markdown",
          "heading.1.markdown entity.name",
          "heading.2.markdown entity.name",
          "heading.3.markdown entity.name",
          "heading.4.markdown entity.name",
          "heading.5.markdown entity.name",
          "heading.6.markdown entity.name",
          "markup.heading",
          "markup.heading.setext",
        ],
        settings: {
          foreground: SYNTAX_RED,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown Bold",
        scope: ["markup.bold", "punctuation.definition.bold"],
        settings: {
          foreground: SYNTAX_ORANGE,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown Italic",
        scope: ["markup.italic", "punctuation.definition.italic"],
        settings: {
          foreground: SYNTAX_PURPLE,
          fontStyle: "italic",
        },
      },
      {
        name: "Markdown Link URLs",
        scope: ["markup.underline.link", "markup.underline.link.markdown"],
        settings: {
          foreground: SYNTAX_PURPLE,
        },
      },
      {
        name: "Markdown Link Text",
        scope: [
          "string.other.link.title.markdown",
          "string.other.link.description.markdown",
        ],
        settings: {
          foreground: SYNTAX_BLUE,
        },
      },
      {
        name: "Markdown Inline Code",
        scope: [
          "markup.inline.raw",
          "markup.inline.raw.string.markdown",
          "markup.fenced_code.block",
          "markup.raw.block",
        ],
        settings: {
          foreground: SYNTAX_GREEN,
        },
      },
      {
        name: "Markdown Code Fence",
        scope: ["punctuation.definition.raw.markdown"],
        settings: {
          foreground: SYNTAX_YELLOW,
        },
      },
      {
        name: "Markdown List",
        scope: [
          "beginning.punctuation.definition.list",
          "punctuation.definition.list.begin.markdown",
        ],
        settings: {
          foreground: SYNTAX_YELLOW,
        },
      },
      {
        name: "Markdown Quote",
        scope: ["markup.quote"],
        settings: {
          foreground: "#5c6370",
          fontStyle: "italic",
        },
      },
      {
        name: "Decorators",
        scope: [
          "meta.decorator",
          "meta.decorator entity.name.function",
          "punctuation.decorator",
        ],
        settings: {
          foreground: SYNTAX_BLUE,
          fontStyle: "italic",
        },
      },
      {
        name: "Annotations",
        scope: ["storage.type.annotation", "meta.annotation"],
        settings: {
          foreground: SYNTAX_YELLOW,
        },
      },
      {
        name: "Regular Expressions",
        scope: ["string.regexp", "constant.other.character-class.regexp"],
        settings: {
          foreground: SYNTAX_RED,
        },
      },
      {
        name: "Regex Quantifiers and Groups",
        scope: [
          "keyword.operator.quantifier.regexp",
          "support.other.parenthesis.regexp",
        ],
        settings: {
          foreground: SYNTAX_ORANGE,
        },
      },
      {
        name: "Library and Support",
        scope: ["support.variable", "support.constant", "support.other"],
        settings: {
          foreground: SYNTAX_CYAN,
        },
      },
      {
        name: "Markup Inserted",
        scope: ["markup.inserted"],
        settings: {
          foreground: SYNTAX_GREEN,
        },
      },
      {
        name: "Markup Deleted",
        scope: ["markup.deleted"],
        settings: {
          foreground: SYNTAX_RED,
        },
      },
      {
        name: "Markup Changed",
        scope: ["markup.changed"],
        settings: {
          foreground: SYNTAX_BLUE,
        },
      },
      {
        name: "Invalid",
        scope: ["invalid", "invalid.illegal"],
        settings: {
          foreground: SYNTAX_RED,
          fontStyle: "strikethrough",
        },
      },
      {
        name: "Deprecated",
        scope: ["invalid.deprecated"],
        settings: {
          foreground: SYNTAX_ORANGE,
          fontStyle: "strikethrough",
        },
      },
    ],
    semanticTokenColors: {
      namespace: SYNTAX_YELLOW,
      type: SYNTAX_YELLOW,
      "type.declaration": SYNTAX_YELLOW,
      "type.defaultLibrary": SYNTAX_YELLOW,
      class: SYNTAX_YELLOW,
      "class.declaration": SYNTAX_YELLOW,
      "class.defaultLibrary": SYNTAX_YELLOW,
      interface: SYNTAX_YELLOW,
      "interface.declaration": SYNTAX_YELLOW,
      struct: SYNTAX_YELLOW,
      typeParameter: SYNTAX_YELLOW,
      enum: SYNTAX_YELLOW,
      enumMember: SYNTAX_ORANGE,
      function: SYNTAX_BLUE,
      "function.declaration": SYNTAX_BLUE,
      "function.defaultLibrary": SYNTAX_CYAN,
      method: SYNTAX_BLUE,
      "method.declaration": SYNTAX_BLUE,
      "method.defaultLibrary": SYNTAX_CYAN,
      macro: SYNTAX_BLUE,
      variable: SYNTAX_RED,
      "variable.declaration": SYNTAX_RED,
      "variable.readonly": SYNTAX_YELLOW,
      "variable.readonly.defaultLibrary": SYNTAX_ORANGE,
      "variable.defaultLibrary": SYNTAX_RED,
      parameter: { foreground: SYNTAX_PUNCTUATION, italic: true },
      property: SYNTAX_RED,
      "property.declaration": SYNTAX_RED,
      "property.readonly": SYNTAX_RED,
      string: SYNTAX_GREEN,
      number: SYNTAX_ORANGE,
      boolean: SYNTAX_ORANGE,
      keyword: SYNTAX_PURPLE,
      modifier: SYNTAX_PURPLE,
      comment: { foreground: SYNTAX_COMMENT, italic: true },
      regexp: SYNTAX_RED,
      operator: SYNTAX_CYAN,
      decorator: { foreground: SYNTAX_BLUE, italic: true },
      label: SYNTAX_RED,
    },
  };
}

module.exports = { generateVSCodeTheme };
