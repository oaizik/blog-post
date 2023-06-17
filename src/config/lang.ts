export interface ILanguage {
    label: string;
    code: string;
    direction: 'ltr' | 'rtl';
  }

export const LANGUAGES: ILanguage[] = [
    { label: "English", code: "en", direction: 'ltr' },
    { label: "עברית", code: "he", direction: 'rtl' },
];

