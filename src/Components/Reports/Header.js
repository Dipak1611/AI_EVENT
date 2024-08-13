import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd8b85581cc0b3f37de43c5f5e99558bf418b8c52f805dc5a2bcb111cce9bf5?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73" alt="Company logo" className={styles.logo} />
      <div className={styles.headerActions}>
        <button className={styles.iconButton} aria-label="Notifications">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70e5bf17d782b8e6692d344b3fa9e7b70599685b3f72659b170d4e932e3026c?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73" alt="" className={styles.icon} />
        </button>
        <button className={styles.iconButton} aria-label="Settings">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/05750df98e26bbad8f071f3d9f754f4947f5f695ed7d7a6cdff81b8d25c0e426?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73" alt="" className={styles.icon} />
        </button>
        <button className={styles.iconButton} aria-label="User profile">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c67124c316db5ffb2d81c5c7649279a0a4cc90bea5fb108354f2ffae59e0a484?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73" alt="" className={styles.icon} />
        </button>
        <button className={styles.addDeviceButton}>+ device</button>
      </div>
    </header>
  );
};

export default Header;