import { useTranslation } from "react-i18next";

import { useTextDirection } from '../../utils/useTextDirection';

import styles from './footer.module.scss';


export const Footer = () => {

	const { t } = useTranslation();
    const { textDirection } = useTextDirection();
    
    return (
		<footer className={styles.footer} style={{direction: textDirection}}>
            <div className={styles.border} />
            <div className={styles.textLine}>
                {t("privacyTitle")}
            </div>
            <div className={styles.textLine}>
                {t("accessibilityTitle")}
            </div>
            <div className={`${styles.textLine} ${styles.center}`}>
                {t("trademarkTitle")}
            </div>
        </footer>
    );
};