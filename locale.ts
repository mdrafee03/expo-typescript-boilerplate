import { I18n } from 'i18n-js';
import { en } from './assets/i18n/en';
import { fr } from './assets/i18n/fr';
import * as Localization from 'expo-localization';

const i18n = new I18n({ en, fr });

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;

export default i18n;
