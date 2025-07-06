# expo-plugin-app-name-localization

[![npm version](https://badge.fury.io/js/expo-plugin-app-name-localization.svg)](https://badge.fury.io/js/expo-plugin-app-name-localization)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An Expo config plugin that enables app name localization for iOS and Android. This plugin allows you to display different app names for different languages/regions while keeping the same app bundle.

## Features

- 🌍 **Multi-language support** - Localize your app name in any language
- 📱 **iOS support** - Automatically configures `InfoPlist.strings` files
- 🤖 **Android support** - Automatically configures `strings.xml` files
- 🔧 **Easy configuration** - Simple object-based configuration
- 📝 **TypeScript support** - Full type definitions included
- ✅ **Validation** - Built-in locale code validation
- 🚀 **Expo SDK 47+** - Compatible with modern Expo versions

## Installation

```bash
npm install expo-plugin-app-name-localization
# or
yarn add expo-plugin-app-name-localization
# or
pnpm add expo-plugin-app-name-localization
```

## Usage

Add the plugin to your `app.config.js` or `app.json`:

### app.config.js

```javascript
module.exports = {
  expo: {
    // ... other config
    plugins: [
      [
        'expo-plugin-app-name-localization',
        {
          localizations: {
            en: 'My App',
            ko: '내 앱',
            ja: '私のアプリ',
            'zh-Hans': '我的应用',
            'es-ES': 'Mi Aplicación',
            fr: 'Mon Application',
            de: 'Meine App',
          },
        },
      ],
    ],
  },
};
```

### app.json

```json
{
  "expo": {
    "plugins": [
      [
        "expo-plugin-app-name-localization",
        {
          "localizations": {
            "en": "My App",
            "ko": "내 앱",
            "ja": "私のアプリ",
            "zh-Hans": "我的应用",
            "es-ES": "Mi Aplicación",
            "fr": "Mon Application",
            "de": "Meine App"
          }
        }
      ]
    ]
  }
}
```

## Configuration

The plugin accepts a configuration object with the following structure:

```typescript
{
  localizations: {
    [locale: string]: string
  }
}
```

### Locale Codes

The plugin supports standard locale codes:

- Language codes: `en`, `ko`, `ja`, `fr`, `de`, etc.
- Language-Region codes: `en-US`, `es-ES`, `zh-Hans`, `zh-Hant`, etc.

### Example Configurations

#### Basic Example

```javascript
{
  localizations: {
    en: "Weather",
    ko: "날씨"
  }
}
```

#### Extended Example with Regions

```javascript
{
  localizations: {
    en: "Shopping Cart",
    "en-GB": "Shopping Trolley",
    es: "Carrito",
    "es-MX": "Carrito de Compras",
    pt: "Carrinho",
    "pt-BR": "Carrinho de Compras"
  }
}
```

## How It Works

### iOS

The plugin automatically:

1. Sets `LSHasLocalizedDisplayName` to `true` in `Info.plist`
2. Creates `.lproj` directories for each locale
3. Generates `InfoPlist.strings` files with the localized app names
4. Adds the localization files to your Xcode project

### Android

The plugin automatically:

1. Creates `values-[locale]` directories in your Android resources
2. Generates or updates `strings.xml` files with the localized app names
3. Sets the default app name in the main `strings.xml`

## Build Process

After adding the plugin, build your app:

```bash
# For development builds
expo prebuild
expo run:ios
expo run:android

# For production builds
eas build --platform ios
eas build --platform android
```

## Testing Localizations

### iOS Simulator

1. Open Settings
2. Go to General → Language & Region
3. Change the iPhone Language
4. Your app name should update accordingly

### Android Emulator

1. Open Settings
2. Go to System → Languages & input → Languages
3. Add and select a language
4. Your app name should update accordingly

## Troubleshooting

### Plugin not working after configuration

- Run `expo prebuild --clean` to regenerate native projects
- Ensure locale codes are valid (e.g., `en`, `en-US`)
- Check console logs for any warnings

### App name not changing

- iOS: Restart the device/simulator after changing language
- Android: Force stop the launcher app or restart device
- Verify the locale code matches system language settings

### Build errors

- Ensure you're using Expo SDK 47 or higher
- Check that all dependencies are installed
- Run `npx expo-doctor` to diagnose issues

## TypeScript

This plugin includes TypeScript definitions. When using TypeScript, you'll get full IntelliSense support:

```typescript
import { AppNameLocalizationOptions } from 'expo-plugin-app-name-localization';

const config: AppNameLocalizationOptions = {
  localizations: {
    en: 'My App',
    ko: '내 앱',
  },
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Taeho Kim**

- GitHub: [@taehoio](https://github.com/taehoio)
- Email: [taeho@taeho.io](mailto:taeho@taeho.io)

## Acknowledgments

- Inspired by the need for easy app name localization in Expo projects
- Thanks to the Expo team for the excellent config plugins system

## Support

If you found this plugin helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving documentation
