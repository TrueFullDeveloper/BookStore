import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSignup } from "../../reduxToolkit/api/authSlice";
import styles from "./Signup.module.css";

export const Signup = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordRep: "",
  });

  const onChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onClick = () => {
    //TODO: Add Normal Validation
    if (form.password > 6 && form.password === form.passwordRep) {
      dispatch(fetchSignup(form.name, form.email, form.password));
    } else {
      setForm({ ...form, password: "", passwordRep: "" });
      alert("Пароль не совпадает");
    }
  };

  return (
    <Fragment>
      <form className={styles.signup_form}>
        <h1>РЕГИСТРАЦИЯ</h1>
        <input
          placeholder="Имя"
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <input
          placeholder="Почта"
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <input
          placeholder="Пароль"
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={onChange}
        />
        <input
          placeholder="Повторите пароль"
          type="password"
          id="passwordRep"
          name="passwordRep"
          value={form.passwordRep}
          onChange={onChange}
        />
        <button type="submit" onClick={onClick}>
          Зарегистрироваться
        </button>
        <Link to="/login">Войти</Link>
      </form>
    </Fragment>
  );
};
