module.exports = {
  expo: {
    name: "LocalizationExample",
    slug: "localization-example",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      bundleIdentifier: "com.example.localization",
      supportsTablet: true
    },
    android: {
      package: "com.example.localization",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      }
    },
    plugins: [
      [
        "expo-plugin-app-name-localization",
        {
          localizations: {
            // Basic language codes
            en: "Localization Demo",
            ko: "현지화 데모",
            ja: "ローカライゼーションデモ",
            es: "Demo de Localización",
            fr: "Démo de Localisation",
            de: "Lokalisierungsdemo",
            it: "Demo di Localizzazione",
            pt: "Demo de Localização",
            ru: "Демо Локализации",
            
            // Language-Region codes
            "zh-Hans": "本地化演示",     // Simplified Chinese
            "zh-Hant": "本地化演示",     // Traditional Chinese
            "en-GB": "Localisation Demo", // British English
            "pt-BR": "Demonstração de Localização", // Brazilian Portuguese
            "es-MX": "Demostración de Localización" // Mexican Spanish
          }
        }
      ]
    ]
  }
};