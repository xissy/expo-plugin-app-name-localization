# Expo App Name Localization Example

This example demonstrates how to use the `expo-plugin-app-name-localization` plugin in an Expo project.

## Setup

1. Create a new Expo project:

```bash
expo init LocalizationExample
cd LocalizationExample
```

2. Install the plugin:

```bash
npm install expo-plugin-app-name-localization
```

3. Replace your `app.config.js` with the example configuration provided.

4. Run prebuild to generate native projects:

```bash
expo prebuild
```

5. Run the app:

```bash
# iOS
expo run:ios

# Android
expo run:android
```

## Testing Different Languages

### iOS Simulator

1. Open Settings → General → Language & Region
2. Change iPhone Language to test different localizations
3. The app name will update based on the selected language

### Android Emulator

1. Open Settings → System → Languages & input → Languages
2. Add and select different languages
3. The app name will update based on the system language

## Supported Languages in this Example

- 🇺🇸 English: "Localization Demo"
- 🇬🇧 British English: "Localisation Demo"
- 🇰🇷 Korean: "현지화 데모"
- 🇯🇵 Japanese: "ローカライゼーションデモ"
- 🇪🇸 Spanish: "Demo de Localización"
- 🇲🇽 Mexican Spanish: "Demostración de Localización"
- 🇫🇷 French: "Démo de Localisation"
- 🇩🇪 German: "Lokalisierungsdemo"
- 🇮🇹 Italian: "Demo di Localizzazione"
- 🇵🇹 Portuguese: "Demo de Localização"
- 🇧🇷 Brazilian Portuguese: "Demonstração de Localização"
- 🇷🇺 Russian: "Демо Локализации"
- 🇨🇳 Chinese Simplified: "本地化演示"
- 🇹🇼 Chinese Traditional: "本地化演示"

## Customization

Feel free to modify the `localizations` object in `app.config.js` to add or remove languages according to your needs.
