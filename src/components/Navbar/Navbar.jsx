import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import AuthLinks from '../AuthLinks/AuthLinks';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.social}>
                <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
                <Image src="/tiktok.png" alt="TikTok" width={24} height={24} />
                <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
            </div> */}
            <Link href="/" className={styles.logo}><div >{"Ashley's Blog"}</div></Link>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}>HomePage</Link>
                <Link href="/" className={styles.link}>Contact</Link>
                <Link href="/" className={styles.link}>About</Link>
                <AuthLinks />
            </div>
        </div>
    );
}

export default Navbar;