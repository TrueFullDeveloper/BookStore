import React from "react";
import styles from "./FeedbackForm.module.css";

export const FeedbackForm = () => {
  return (
    <div className={styles.feedback_section}>
      <div className={styles.border}></div>
      <h1>Оставьте отзыв</h1>

      <form className={styles.feedback_form} method="post">
        <textarea
          className={styles.feedback_form_text}
          placeholder="Оставьте ваш отзыв"
        ></textarea>
        <button className={styles.feedback_form_btn}>Оставить отзыв</button>
      </form>
    </div>
  );
};
