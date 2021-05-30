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
      bookTitle: "Python.Карманный справочник",
      bookCost: 312,
      pageNumber: "900",
      bookISBN: "978-5-6045889-7-0",
      pubData: "2021",
      bookEdition: "8899",
      bookWeight: "700",
      bookStatus: true,
      bookAuthor: "Марк Луц",
      bookGenre: "Ужасы",
      bookRating: 4,
      bookPublisher: "Вильямсий Издательский дом",
      bookDescription:
        "Этот краткий справочник по Python карманного типа обновлен с учетом версий 3.4 и 2.7 и очень удобен для наведения быстрых справок в процессе разработки программ на Python. В лаконичной форме здесь представлены все необходимые сведения о типах данных и операторах Python, специальных методах, встроенных функциях и исключениях, наиболее употребительных стандартных библиотечных модулях и других примечательных языковых средствах Python",
    };

    dispatch(setBook(payload));
  };
  return (
    <div className={styles.response_section}>
      {bookItems.map((bookItem, index) => (
        <div className={styles.card} key={index}>
          <NavLink to="/book" onClick={() => onClick()}>
            <div className={styles.top_section}>
              <img src={fakeBook} alt="" />
            </div>
          </NavLink>

          <div className={styles.info_section}>
            <NavLink to="/book" onClick={() => onClick()}>
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
                312 ₽<div className={styles.border}></div>
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
