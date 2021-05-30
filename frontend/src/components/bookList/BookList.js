import React from "react";
import styles from "./BookList.module.css";
import fakeBook from "../../static/images/search/fake_book.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBook } from "../../reduxToolkit/slice/bookSlice";

export const BookList = ({ bookItems }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    const payload = {
      bookTitle: "Python. Карманный справочник",
      bookCost: 312,
      pageNumber: "900",
      bookISBN: "978-5-6045889-7-0",
      pubData: "2021",
      bookEdition: "8899",
      bookWeight: "700",
      bookStatus: true,
      bookAuthor: "Марк Луц",
      bookGenre: "Ужасы",
      bookRating: 5,
    };
    dispatch(setBook(payload));
  };
  return (
    <div className={styles.response_section}>
      {bookItems.map((bookItem, index) => (
        <div className={styles.card} key={index}>
          <NavLink to="/Book" onClick={() => onClick()}>
            <div className={styles.top_section}>
              <img src={fakeBook} alt="" />
            </div>
          </NavLink>

          <div className={styles.info_section}>
            <NavLink to="/Book" onClick={() => onClick()}>
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
