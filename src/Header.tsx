import * as React from 'react';
import styles from "./Header.module.css";

export const Header = () => {
    return <header className={styles.header}>
        <h1>D3 Experiment</h1>
        <p>The average living index of a given urban area by population. All data taken from teleport.org</p>
    </header>
}