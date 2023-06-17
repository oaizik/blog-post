import { useTranslation } from "react-i18next";

import styles from './error-msg.module.scss';


export const ErrorMsg = () => {

	const { t } = useTranslation();
    
    return (
		<div className={styles.error}>
            {t("errorTitle")}
        </div>
    );
};