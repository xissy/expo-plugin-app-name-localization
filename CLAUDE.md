# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an Expo config plugin that allows app developers to localize their app display names for different languages and regions. The plugin automatically configures both iOS (`Info.plist`) and Android (`strings.xml`) native files with localized app names.

## Essential Development Commands

```bash
# Development
npm run watch              # Watch TypeScript files for changes
npm run build              # Compile TypeScript to JavaScript
npm run clean              # Remove compiled output

# Testing
npm test                   # Run all tests
npm run test:watch         # Run tests in watch mode

# Code Quality
npm run lint               # Run ESLint on TypeScript files
npm run format             # Format code with Prettier
npm run format:check       # Check code formatting

# Pre-publish
npm run prepare            # Clean and build (runs automatically)
```

## Architecture & Code Organization

### Project Structure

- **`src/`** - TypeScript source files
  - `index.ts` - Main plugin implementation with iOS/Android handlers
  - `types.ts` - TypeScript type definitions
- **`lib/`** - Compiled JavaScript output (generated, not in source control)
- **`__tests__/`** - Jest unit tests
- **`example/`** - Usage example with app.config.js

### Key Implementation Details

1. **Plugin Architecture**: The plugin exports a default function that modifies the Expo config:
   - `withIOSLocalizedNames` - Creates `.lproj` directories with `InfoPlist.strings`
   - `withAndroidLocalizedNames` - Creates `values-[locale]` directories with `strings.xml`

2. **Locale Handling**:
   - Validates locale codes with regex: `/^[a-z]{2}(-[A-Z]{2})?(-[A-Za-z]+)?$/`
   - Converts locale formats (e.g., `en-US` → `en-rUS` for Android)
   - Supports special cases like `zh-Hans` and `zh-Hant`

3. **File Operations**: Uses `fs-extra` for creating directories and writing localization files

### Testing Strategy

Tests are comprehensive and cover:

- Plugin validation (missing/invalid options)
- iOS configuration updates
- Android configuration updates
- Locale validation and format conversion

Run tests before committing any changes to ensure nothing breaks.

## Development Workflow

1. Make changes in `src/` directory
2. Run `npm run watch` to compile changes automatically
3. Test changes with `npm test`
4. Ensure linting passes with `npm run lint`
5. Format code with `npm run format`
6. Build final output with `npm run build`

## Important Notes

- This is a TypeScript project - all source code should be in TypeScript
- The `lib/` directory is generated - never edit files there directly
- Always validate locale codes before processing
- Test both iOS and Android paths when making changes
- The plugin requires Expo SDK 53 or later and has been tested with Expo SDK 53
