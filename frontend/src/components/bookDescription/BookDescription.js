import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectBook } from "../../reduxToolkit/slice/bookSlice";
import styles from "./BookDescription.module.css";
import fakeBook from "../../static/images/search/fake_book.png";

export const BookDescription = () => {
  const {
    bookTitle,
    bookCost,
    pageNumber,
    bookISBN,
    pubData,
    bookEdition,
    bookWeight,
    bookStatus,
    bookAuthor,
    bookGenre,
    bookRating,
    bookPublisher,
    bookDescription,
  } = useSelector(selectBook);

  return (
    <Fragment>
      <div className={styles.book_block}>
        <div className={styles.first_book_section}>
          <img src={fakeBook} alt="nothing" />
        </div>

        <div className={styles.second_book_section}>
          <div>
            <h1>{bookTitle}</h1>
            <h2>{bookAuthor}</h2>
          </div>

          <div>
            <h3>
              <div className={styles.stars}>
                <a className={`${styles.s1} ion-star`}></a>
                <a className={`${styles.s2} ion-star`}></a>
                <a className={`${styles.s3} ion-star`}></a>
                <a className={`${styles.s4} ion-star`}></a>
                <a className={`${styles.s5} ion-star`}></a> {bookRating}
              </div>
            </h3>
          </div>

          <div className={styles.book_data}>
            <div>
              <ul className={styles.grey_color}>
                <li>Издательство</li>
                <li>Год издания</li>
                <li>Кол-во страниц</li>
                <li>Тираж</li>
                <li>ISBN номер</li>
                <li>Жанр</li>
                <li>Вес, г</li>
              </ul>
            </div>
            <div>
              <ul className={styles.white_color}>
                <li>{bookPublisher}</li>
                <li>{pubData}</li>
                <li>{pageNumber}</li>
                <li>{bookEdition}</li>
                <li>{bookISBN}</li>
                <li>{bookGenre}</li>
                <li>{bookWeight}</li>
              </ul>
            </div>
          </div>
          <div className={styles.cost_section}>
            <h2>
              {bookCost} ₽<div className={styles.border}></div>
            </h2>
            {bookStatus ? (
              <button>
                <a href="#">Купить</a>
              </button>
            ) : (
              <h2>Нет в наличии</h2>
            )}
          </div>
        </div>
      </div>
      <div className={styles.annotation}>
        <h2>Аннотация</h2>
        <p>{bookDescription}</p>
      </div>
    </Fragment>
  );
};
