import { useState, useEffect } from 'react';
import { animated } from "react-spring";

import { getAllPosts } from '../../utils/api';
import { IPost } from '../../utils/interfaces';
import { useOpacitySpring } from '../../utils/spring';

import { PostComponent } from './post/post.component';
import { ErrorMsg } from '../../components/error-msg/error-msg.component';

import styles from './blog-page.module.scss';


export const BlogPage = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [fetchError, setFetchError] = useState<boolean>(false);

    const { spring } = useOpacitySpring(1000, 0);

    const getPosts = async () => {
        const fetchedPosts = await getAllPosts();
        if (fetchedPosts) {
            setPosts(fetchedPosts);
        } else {
            setFetchError(true);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);


    return (
        <animated.div style={spring} className={styles.blogPage}>
            <div className={styles.blogsContainer}>
                {fetchError ?
                    <ErrorMsg />
                    :
                    posts.map((post: IPost) => {
                        return (
                            <PostComponent post={post} />
                        )
                    })
                }
            </div>
        </animated.div>
    );
};