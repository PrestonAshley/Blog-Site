import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Ashley Here!!!</b> Discover my stories and creative ideas....
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>lorem ipsum ajsncsnojsnosdodvvo</h1>
                    <p className={styles.postDesc}>lorem icondso osdijzhzid sdfhdsiwejeuiv udhfiudhaiargih iheaf0oewjf9paeo uihfiafuaih  auihfiuahfafaeof uheaf0aijfihuaef8iwjeifnkv9rh injfnoejfoenoperjgoan  iahiahr iafoiafuh farii i giaj ijae09 gjujwioef ieiu0feiufhai irghg8efwehuf weifhrhgwefi weifuhefiuhf.</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;