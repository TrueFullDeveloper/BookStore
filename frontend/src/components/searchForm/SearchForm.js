import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchResponse } from "../../reduxToolkit/api/searchSlice";
import styles from "./SearchForm.module.css";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    dispatch(fetchResponse(value));
  };

  return (
    <form>
      <div className={styles.search_form}>
        <input
          type="search"
          placeholder="Поиск книги"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit" onClick={submitHandler}>
          <Link to="/search">Поиск</Link>
        </button>
      </div>
    </form>
  );
};
