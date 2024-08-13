import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const menuItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51f050afbdc5140cafaaec625bb9a4b23c39de37a01b7a003447558eda7e9f29?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73', label: 'Cameras' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2ded05d0395984146523f86597f2882942fa589a3fc35cf1c40ef31778cdba04?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73', label: 'Multi Screen' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/39a3c30b12c4c6d6bde8a08c24b4d8b3d7f656cec95b14db2331bea84b409c69?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73', label: 'Events' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bd383cf09590bdd18df43cd9bdc90cdb3ac42241daeb03b0cdf8544a581b5120?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73', label: 'Profile' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/317f235fe40badddeff857d5b47dfc860bec441f5fda1a2e9e7134886505905d?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73', label: 'Subscription' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/43e9911d49a2dd5258732b4b394c38db87bf96cb84f46b612e2c4e1521d060fa?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73', label: 'Settings' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1dc393e88a6f68134d651ef5383d189845180d8d85f3077e67a1e77b9e72e49b?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73', label: 'Open Map' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fd6630e63d6109424dedfca9ee07c6cfe8baa4d3c1987157dbc96ec628cb5a68?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73', label: 'Logout' }
  ];

  return (
    <nav className={styles.sidebar}>
      <div className={styles.highlight} />
      <ul className={styles.menuList}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <img src={item.icon} alt="" className={styles.menuIcon} />
            <span className={styles.menuLabel}>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;