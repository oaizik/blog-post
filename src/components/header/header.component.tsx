import { useState } from 'react';
import { NavLink, useLocation  } from "react-router-dom";
import { ClickAwayListener } from '@mui/base';
import { useTranslation } from "react-i18next";

import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import { ReactComponent as LanguageIcon } from '../../assets/language.svg';
import { LANGUAGES, ILanguage } from '../../config/lang';

import '../../config/intl';
import styles from './header.module.scss';


export const Header = () => {

	const location = useLocation();
	const { i18n, t } = useTranslation();

	const [languagePopUp, setLanguagePopUp] = useState<boolean>(false);

	const onLandSelection = (landCode: string) => {
		i18n.changeLanguage(landCode);
        setLanguagePopUp(false);
	};


    return (
		<header className={styles.header}>
            <div className={styles.nav}>
                <NavLink to="/" className={`${styles.navItem} ${location.pathname === "/" && styles.selecteed}`}>
                    <LogoIcon />
                </NavLink>
                <NavLink to="/" className={`${styles.navItem} ${location.pathname === "/" && styles.selecteed}`}>
                    {t("home")}
                </NavLink >
                <NavLink to="/blog" className={`${styles.navItem} ${location.pathname === "/blog" && styles.selecteed}`}>
                    {t("blog")}
                </NavLink >
            </div>
            <ClickAwayListener onClickAway={() => setLanguagePopUp(false)}>
                <div className={styles.languageSelection}>
                    <div className={styles.languageIcon} onClick={() => setLanguagePopUp(!languagePopUp)}>
                        <LanguageIcon />
                    </div>
                    {languagePopUp && <div className={styles.languagePopup}>
                        {LANGUAGES.map((lang: ILanguage) => {
                            return (
                                <div
                                    key={lang.code}
                                    className={`${styles.languageOption} ${lang.code === i18n.language && styles.selected}`}
                                    onClick={() => onLandSelection(lang.code)}
                                >
                                    {lang.label}
                                </div>
                            )
                        })}
                    </div>}
                </div>
            </ClickAwayListener>
        </header>
    );
};