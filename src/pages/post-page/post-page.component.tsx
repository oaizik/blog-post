import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from 'react-router-dom';
import { animated } from "react-spring";

import { getPostById, getUserById, getPostComments } from '../../utils/api';
import { IPost, IUser, IComment } from '../../utils/interfaces';
import { useOpacitySpring } from '../../utils/spring';
import { useTextDirection } from '../../utils/useTextDirection';

import { ErrorMsg } from '../../components/error-msg/error-msg.component';

import styles from './post-page.module.scss';


export const PostPage = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const { postId } = useParams();
    const { textDirection } = useTextDirection();

    const [post, setPost] = useState<IPost>();
    const [user, setUser] = useState<IUser>();
    const [comments, setComments] = useState<IComment[]>([]);
    const [fetchError, setFetchError] = useState<boolean>(false);

    const { spring } = useOpacitySpring(1000, 0);

    const getData = async () => {
        if (typeof(postId) === 'string') {
            const fetchedPost = await getPostById(postId);
            const fetchedComments = await getPostComments(postId);
            if (fetchedPost) {
                const fetchedUser = await getUserById(fetchedPost.userId);
                if (fetchedPost && fetchedUser && fetchedComments) {
                    setPost(fetchedPost);
                    setUser(fetchedUser);
                    setComments(fetchedComments);
                } else {
                    setFetchError(true);
                }
            } else {
                setFetchError(true);
            }
        }
    };

    const onBackClicked = () => {
        navigate('/blog');
    };

    useEffect(() => {
        getData();
    }, [postId]);


    return (
        <animated.div style={spring} className={styles.postPage}>
            {fetchError ?
                <ErrorMsg />
                :
                <React.Fragment>
                    <div className={styles.postContent}>
                        <div className={styles.backButton} onClick={onBackClicked}>
                            {'<'} {t("back")}
                        </div>
                        <div className={styles.postTitle}>
                            {post?.title}
                        </div>
                        <div className={styles.postBody}>
                            {post?.body}
                        </div>
                        <div className={styles.userName}>
                            <span>{user?.name}, {user?.email}</span>
                        </div>
                        <div className={styles.userContact}>
                            {user?.phone}
                        </div>
                        <div className={styles.userContact}>
                            {user?.address.street}, {user?.address.suite}, {user?.address.city}
                        </div>
                    </div>
                    <div className={styles.commentsContainer}>
                        <div className={styles.commentsTitle} style={{direction: textDirection}}>
                            {comments.length ? t("comments") : ''}
                        </div>
                        <div className={styles.comments}>
                            {comments.length ?
                                comments.map((comment: any) => {
                                    return (
                                        <div className={styles.commentContainer}>
                                            <div className={styles.commentBody}>
                                                {comment.body}
                                            </div>
                                            <div className={styles.commentatorContact}>
                                                {comment.username}
                                            </div>
                                            <div className={styles.commentatorContact}>
                                                {comment.email}
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <></>
                            }
                        </div>
                    </div>
                </React.Fragment>
            }
            {/* <div className={styles.postContent}>
                <div className={styles.backButton} onClick={onBackClicked}>
                    {'<'} {t("back")}
                </div>
                <div className={styles.postTitle}>
                    {post?.title}
                </div>
                <div className={styles.postBody}>
                    {post?.body}
                </div>
                <div className={styles.userName}>
                    <span>{user?.name}, {user?.email}</span>
                </div>
                <div className={styles.userContact}>
                    {user?.phone}
                </div>
                <div className={styles.userContact}>
                    {user?.address.street}, {user?.address.suite}, {user?.address.city}
                </div>
            </div>
            <div className={styles.commentsContainer}>
                <div className={styles.commentsTitle} style={{direction: textDirection}}>
                    {comments.length ? t("comments") : ''}
                </div>
                <div className={styles.comments}>
                    {comments.length ?
                        comments.map((comment: any) => {
                            return (
                                <div className={styles.commentContainer}>
                                    <div className={styles.commentBody}>
                                        {comment.body}
                                    </div>
                                    <div className={styles.commentatorContact}>
                                        {comment.username}
                                    </div>
                                    <div className={styles.commentatorContact}>
                                        {comment.email}
                                    </div>
                                </div>
                            )
                        })
                        :
                        <></>
                    }
                </div>
            </div> */}
        </animated.div>
    );
};