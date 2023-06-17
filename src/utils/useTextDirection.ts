import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

import { LANGUAGES, ILanguage } from '../config/lang';

export const useTextDirection = () => {

    const { i18n } = useTranslation();

    const [textDirection, setTextDirection] = useState<'ltr' | 'rtl'>('ltr');

    const getTextDirectionFromKeyCode = () => {
        const currentLang: ILanguage | undefined = LANGUAGES.find((lang: ILanguage) => lang.code === i18n.language);
        if (currentLang?.direction) {
            setTextDirection(currentLang.direction);
        }
    };

    useEffect(() => {
        getTextDirectionFromKeyCode();
    }, [i18n.language]);

    return { textDirection };
};
