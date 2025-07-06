import { ConfigPlugin } from '@expo/config-plugins';

/**
 * Configuration options for the app name localization plugin
 */
export interface AppNameLocalizationOptions {
  /**
   * Object containing locale codes as keys and localized app names as values
   * @example
   * {
   *   "en": "My App",
   *   "ko": "내 앱",
   *   "ja": "私のアプリ",
   *   "es": "Mi Aplicación"
   * }
   */
  localizations: Record<string, string>;
}

/**
 * Type definition for the config plugin
 */
export type WithAppNameLocalizationPlugin = ConfigPlugin<AppNameLocalizationOptions>;