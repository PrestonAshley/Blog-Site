"use client";

import React, { useContext } from 'react';
import styles from './themeToggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';

const ThemeToggle = () => {

  const {toggle,theme} = useContext(ThemeContext)

  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? {background: "white"} : {background: "black"}}>
      <Image src="/moon.png" alt="Dark" width={14} height={14} />
      <div className={styles.ball} style={theme === "dark" ? {left: 1, background: "black"} : {right: 1, background: "white"}}></div>
      <Image src="/sun.png" alt="Light" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle;