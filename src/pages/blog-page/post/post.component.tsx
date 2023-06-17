import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { animated } from "react-spring";
import { useNavigate } from 'react-router-dom';

import { useScaleSpring, useHoverSpring } from '../../../utils/spring';
import { IPost } from '../../../utils/interfaces';

import styles from './post.module.scss';

interface IPostComponentProps {
    post: IPost;
};

export const PostComponent = ({post}: IPostComponentProps) => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const [isHover, setIsHover] = useState<boolean>(false);

    const { spring: postSpring } = useScaleSpring(1.1, isHover);
    const { spring: buttonSpring } = useHoverSpring(isHover);

    const onMouseEnter = () => {
        setIsHover(true);
    };

    const onMouseLeave = () => {
        setIsHover(false);
    };

    const onViewClicked = () => {
        navigate(`/post/${post.id}`);
    };


    return (
        <animated.div style={postSpring} key={post.id} className={styles.postContainer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={styles.postTitle}>
                {post.title}
            </div>
            <div className={styles.postBody}>
                {post.body}
            </div>
            <animated.div style={buttonSpring} className={styles.viewButton} onClick={onViewClicked}>
                {t("view")}
            </animated.div>
        </animated.div>
    );
};