import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./BasketList.module.css";
import fakeBook from "../../static/images/search/fake_book.png";
import sadKit from "../../static/images/basket/sad_kit.svg";

export const BasketList = ({ basketList, onRemove }) => {
  let totalCost = 0;
  let bookNumber = 0;

  basketList.map(basketItem => {
    totalCost = totalCost + basketItem.bookCost;
    bookNumber++;
  });

  return (
    <div className={styles.basket_block}>
      <h4>Корзина: {bookNumber}</h4>

      {bookNumber === 0 ? (
        <h5>
          <img src={sadKit} alt="" />
          Ваша Корзина Пустая D:
        </h5>
      ) : (
        <br />
      )}

      {basketList.map(basketItem => (
        <div className={styles.basket_item} key={basketItem.id}>
          <img src={fakeBook} alt="" />
          <h1>{basketItem.bookTitle}</h1>

          <h2 className={styles.history_title} href="#">
            {basketItem.bookAuthor}
          </h2>

          <h3 className={styles.book_cost} href="#">
            {basketItem.bookCost} ₽
          </h3>

          <button type="submit" onClick={() => onRemove(basketItem.id)} />
        </div>
      ))}

      {bookNumber === 0 ? (
        <br />
      ) : (
        <Fragment>
          <h4>Общая стоимость: {totalCost} ₽</h4>
          <button>
            <Link to="/">Офомить заказ</Link>
          </button>
        </Fragment>
      )}
    </div>
  );
};
