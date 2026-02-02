/**
 * Zenith Theme - Color Definitions
 *
 * This file contains all color definitions for the Zenith theme.
 * Edit these values to customize your theme, then run: node build.js
 */

/** Primary accent color - used for buttons, active states, badges, progress bars, etc. */
const PRIMARY_COLOR = "#fab283";

/** Primary color hover state - slightly lighter */
const PRIMARY_HOVER_COLOR = "#ffc09f";

/** Background colors */
const BG_DARKEST = "#0a0a0a"; // Main editor background
const BG_DARKER = "#141414"; // Sidebar, panels
const BG_DARK = "#1e1e1e"; // Section headers, elevated surfaces
const BG_MEDIUM = "#282828"; // Hover states
const BG_LIGHT = "#323232"; // Active states, borders
const BG_LIGHTER = "#3c3c3c"; // Input borders, dividers
const BG_LIGHTEST = "#484848"; // Line numbers, subtle elements

/** Text colors */
const TEXT_PRIMARY = "#eeeeee"; // Main text
const TEXT_SECONDARY = "#808080"; // Muted text, inactive states
const TEXT_TERTIARY = "#606060"; // Placeholder text, subtle elements

/** Syntax colors */
const SYNTAX_RED = "#e06c75"; // Variables, errors, deleted
const SYNTAX_GREEN = "#98c379"; // Strings, added, success
const SYNTAX_YELLOW = "#e5c07b"; // Types, classes, warnings
const SYNTAX_BLUE = "#61afef"; // Functions, info
const SYNTAX_PURPLE = "#c678dd"; // Keywords
const SYNTAX_CYAN = "#56b6c2"; // Operators, builtins
const SYNTAX_ORANGE = "#d19a66"; // Numbers, constants
const SYNTAX_COMMENT = "#7f848e"; // Comments
const SYNTAX_PUNCTUATION = "#abb2bf"; // Punctuation, parameters

/** Status colors */
const SUCCESS_COLOR = "#7fd88f"; // Success, added
const WARNING_COLOR = "#f5a742"; // Warnings, conflicts
const ERROR_COLOR = "#e06c75"; // Errors, deleted
const INFO_COLOR = "#5c9cf5"; // Info, modified, links

module.exports = {
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
};
