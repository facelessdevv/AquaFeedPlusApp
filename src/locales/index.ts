import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import { I18nManager } from 'react-native';

// فایل‌های ترجمه
const fa = { welcome: 'خوش آمدید', latestNews: 'آخرین اخبار' };
const en = { welcome: 'Welcome', latestNews: 'Latest News' };
const ru = { welcome: 'добро пожаловать', latestNews: 'последние новости' };

// اضافه کردن ترجمه‌ها با Type Assertion
(i18n as any).translations = { fa, en, ru };

// گرفتن زبان‌های دستگاه
const locales = RNLocalize.getLocales();
export const isRTL = locales.length > 0 ? locales[0].isRTL : false;

// تنظیم RTL/LTR
I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

// انتخاب بهترین زبان
let bestLang = 'fa';
if (locales.length > 0) {
  for (let locale of locales) {
    if (['fa', 'en', 'ru'].includes(locale.languageCode)) {
      bestLang = locale.languageCode;
      break;
    }
  }
}

// تنظیم زبان فعال با Type Assertion
(i18n as any).locale = bestLang;

export default i18n;
