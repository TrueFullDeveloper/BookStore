import React from "react";
import styles from "./BasketList.module.css";
import fakeBook from "../../static/images/search/fake_book.png";

export const BasketList = ({ basketList, onRemove }) => {
  return (
    <div className={styles.history_block}>
      {basketList.map(basketItem => (
        <div className={styles.history_item} key={basketItem.id}>
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
    </div>
  );
};
