import React from "react";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loading_wraper}>
      <div className={styles.loading}>
        <span>Loading...</span>
      </div>
    </div>
  );
};
