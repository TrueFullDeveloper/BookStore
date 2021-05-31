import React from "react";
import styles from "./OrderList.module.css";
import sadKit from "../../static/images/basket/sad_kit.svg";

export const OrderList = ({ basketList, onRemove }) => {
  return (
    <div className={styles.basket_block}>
      <h4>Ваши Заказы:</h4>

      {basketList.length === 0 ? (
        <h5>
          <img src={sadKit} alt="" />У вас нет заказов D:
        </h5>
      ) : (
        <br />
      )}

      {basketList.map(basketItem => (
        <div className={styles.basket_item} key={basketItem.id}>
          <h1>Заказ №123-434</h1>

          <h2>Статус - В процессе</h2>

          <h3 className={styles.book_cost}>{basketItem.bookCost} ₽</h3>

          <button type="submit" onClick={() => onRemove(basketItem.id)}>
            Отменить заказ
          </button>
        </div>
      ))}
    </div>
  );
};
