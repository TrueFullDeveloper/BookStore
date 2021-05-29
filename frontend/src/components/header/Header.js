import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../static/images/header/logo.svg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <NavLink to="/">
          <img src={logo} alt="nothing" />
        </NavLink>
      </div>
      <div className={styles.second_section}>
        <div className={`${styles.group_links} ${styles.first}`}>
          <NavLink to="/orders">Заказы</NavLink>
        </div>
        <div className={`${styles.group_links} ${styles.second}`}>
          <NavLink to="/basket">Корзина</NavLink>
        </div>
        <div className={`${styles.group_links} ${styles.third}`}>
          <NavLink to="/profile">Профиль</NavLink>
        </div>
      </div>
    </div>
  );
};
