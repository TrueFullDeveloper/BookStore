import React from "react";
import styles from "./BookList.module.css";
import fakeBook from "../../static/images/search/fake_book.png";
import { NavLink } from "react-router-dom";

export const BookList = ({ bookItems }) => {
  return (
    <div className={styles.response_section}>
      {bookItems.map(bookItem => (
        <div className={styles.card}>
          <NavLink
            to="/Book"
            onClick={() => {
              console.log("Book Click");
            }}
          >
            <div className={styles.top_section}>
              <img src={fakeBook} alt="" />
            </div>
          </NavLink>

          <div className={styles.info_section}>
            <NavLink
              to="/Book"
              onClick={() => {
                console.log("Book Click");
              }}
            >
              <h2>
                <div className={styles.filledbar_3}></div>
                <div className={styles.filledbar_2}></div>
                Python. Карманный справочник
                <div className={styles.border}></div>
                <div className={styles.filledbar}></div>
                <div className={styles.filledbar_4}></div>
              </h2>
            </NavLink>
            <p>Марк Луц</p>
            <div className={styles.cost_section}>
              <h2>
                600 ₽<div className={styles.border}></div>
              </h2>
              <button>
                <a href="#">Купить</a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
