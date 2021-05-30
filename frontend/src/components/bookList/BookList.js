import React from "react";
import styles from "./BookList.module.css";
import fakeBook from "../../static/images/search/fake_book.png";
import { NavLink } from "react-router-dom";

export const BookList = ({ bookItems }) => {
  return (
    <div className={styles.response_section}>
      {bookItems.map(youtubeItem => (
        <NavLink to="/profile">
          <div className={styles.card}>
            <div className={styles.top_section}>
              <img src={fakeBook} alt="" />
            </div>

            <div className={styles.info_section}>
              <h2>
                <div className={styles.filledbar_3}></div>
                <div className={styles.filledbar_2}></div>
                Python. Карманный справочник
                <div className={styles.border}></div>
                <div className={styles.filledbar}></div>
                <div className={styles.filledbar_4}></div>
              </h2>
              <p>Марк Луц</p>
              <div className={styles.cost_section}>
                <h2>
                  600 ₽<div className={styles.border}></div>
                  {/* <div className={styles.filledbar}></div> */}
                </h2>
                <button>
                  <a href="#">Купить</a>
                </button>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
