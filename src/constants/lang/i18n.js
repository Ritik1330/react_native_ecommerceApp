import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import hi from './hi.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    hi: hi,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;

// const changeLanguage = value => {
//   i18n
//     .changeLanguage(value)
//     .then(() => setLanguage(value))
//     .catch(err => console.log(err));
// };

// const changeLanguage = value => {
//   i18n.changeLanguage(value);
// };

// t('CREATE_YOUR_ACCOUNT')