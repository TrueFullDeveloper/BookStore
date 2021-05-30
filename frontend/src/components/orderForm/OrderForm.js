import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./OrderForm.module.css";

export const OrderForm = ({ basketList }) => {
  const [isChose, setIsChose] = useState(false);
  const [cost, setCost] = useState(0);

  let totalCost = 0;
  useEffect(() => {
    basketList.map(basketItem => {
      totalCost = totalCost + basketItem.bookCost;
    });
    setCost(totalCost);
  }, []);

  const onClick = company => {
    if (!isChose) {
      setCost(cost + company.bookCost);
    } else {
      setCost(cost + company.bookCost - isChose.bookCost);
    }
    setIsChose(company);
  };

  return (
    <div className={styles.order_section}>
      <h1>Оформление заказа</h1>
      <div className={styles.border}></div>
      <form className={styles.order_form} action="index.html" method="post">
        <input
          type="text"
          className={styles.order_form_text}
          placeholder="Имя"
        />
        <input
          type="text"
          className={styles.order_form_text}
          placeholder="Фамилия"
        />
        <input
          type="text"
          className={styles.order_form_text}
          placeholder="Отчество"
        />
        <input
          type="email"
          className={styles.order_form_text}
          placeholder="Email"
        />
        <input
          type="text"
          className={styles.order_form_text}
          placeholder="Адрес"
        />

        <div className={styles.order_delivery_btn}>
          <h1>
            {isChose
              ? `${isChose.bookTitle} - ${isChose.bookCost} ₽`
              : "Компания доставки"}
          </h1>

          <div className={styles.company_content}>
            {basketList.map(companyItem => (
              <div
                className={styles.order_delivery_company}
                onClick={() => onClick(companyItem)}
              >
                {companyItem.bookTitle} - {companyItem.bookCost} ₽
              </div>
            ))}
          </div>
        </div>

        <button className={styles.order_form_btn}>
          <NavLink to="/orders">Оформить заказ</NavLink>
        </button>
        <h4>Общая стоимость: {cost} ₽</h4>
      </form>
    </div>
  );
};
