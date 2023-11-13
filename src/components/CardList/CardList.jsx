import React from 'react';
import styles from './cardList.module.css';
import Pagination from '@/components/Pagination/Pagination';
import Card from '../Card/Card';

const getData = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to Load");
    }
    return res.json();
}

const CardList = async ({page, cat}) => {
    const {posts, count} = await getData(page, cat);

    const POST_PER_PAGE = 2;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <div className={styles.container}>
            <h1>Recent Posts</h1>
            <div className={styles.title}>
                <div className={styles.posts}>
                {posts?.map((item) => (
                    <Card item={item} key={item._id} />
                ))}
                </div>
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    );
}

export default CardList;