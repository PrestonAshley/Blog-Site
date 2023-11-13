import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Ashley Here!!!</b> Discover my stories and life lessons that you can relate to...
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Who Am I..?</h1>
                    <p className={styles.postDesc}>I am Preston Mendonca (Ashley) from a small village in Udupi. I started this blog page to write about my life stories so none of this is imaginary. I will be writing about parts of my life and the lessons I gained from it. You guys can either learn from it or relate to it. Thank You in advance from the support and blessings....</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;