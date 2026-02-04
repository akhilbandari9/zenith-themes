#!/usr/bin/env node

/**
 * Zenith Theme Builder
 *
 * This script generates VS Code and Zed theme files from a single source of truth.
 * To change the primary color (used for buttons, accents, etc.), edit src/colors.js
 *
 * Usage: node build.js
 */

const fs = require("fs");
const path = require("path");
const colors = require("./src/colors");
const { generateVSCodeTheme } = require("./src/vscode-theme");
const { generateZedTheme } = require("./src/zed-theme");

function build() {
  console.log("🏗️  Building Zenith themes and extension...\n");

  // Generate VS Code theme
  const vsCodeTheme = generateVSCodeTheme(colors);
  const vsCodePath = path.join(
    __dirname,
    "vs-code",
    "themes",
    "zenith-dark.json",
  );
  fs.writeFileSync(vsCodePath, JSON.stringify(vsCodeTheme, null, 2));
  console.log(`✅ VS Code theme written to: ${vsCodePath}`);

  // Generate Zed theme
  const zedTheme = generateZedTheme(colors);
  const zedPath = path.join(__dirname, "zed", "themes", "zenith-dark.json");
  fs.writeFileSync(zedPath, JSON.stringify(zedTheme, null, 2));
  console.log(`✅ Zed theme written to: ${zedPath}`);

  console.log("\n🎨 Theme build complete!");
  console.log(`\n📋 Current primary color: ${colors.PRIMARY_COLOR}`);
  console.log(
    "   To change the primary color, edit PRIMARY_COLOR in src/colors.js",
  );
}

// Run the build
build();
