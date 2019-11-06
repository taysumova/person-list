import ru from './ru.json';
import en from './en.json';

export const defaultLocale = 'en';

export const languages = {
  ru,
  en,
};

export const languagesConfig = {
  languages: [
    {
      language: 'ru',
      title: 'Русский',
    },
    {
      language: 'en',
      title: 'English',
    },
  ],
};
