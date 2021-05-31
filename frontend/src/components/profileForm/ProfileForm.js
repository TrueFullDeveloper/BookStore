import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  profileUpdate,
  selectProfile,
} from "../../reduxToolkit/api/profileSlice";
import { userLogout } from "../../reduxToolkit/api/authSlice";
import styles from "./ProfileForm.module.css";
import logout from "../../static/images/profile/logout.svg";
import ecllipse from "../../static/images/profile/ellipse.png";
import blackHole from "../../static/images/profile/black_hole.png";

export const ProfileForm = () => {
  const profileData = useSelector(selectProfile);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    userName: profileData.userName,
    email: profileData.email,
    telegram: profileData.telegram,
  });

  const onClick = () => {
    dispatch(profileUpdate({ ...form }));
  };

  const onChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <Fragment>
      <div className={styles.background_ellipse}>
        <img src={ecllipse} alt="nothing" />
      </div>

      <div className={styles.background_black_hole}>
        <img src={blackHole} alt="nothing" />
      </div>

      <div className={styles.profile}>
        <form
          className={styles.profile_form}
          onSubmit={event => event.preventDefault()}
        >
          <div className={styles.profile_item}>
            <span>Имя</span>
            <input
              type="text"
              id="userName"
              name="userName"
              value={form.userName}
              onChange={onChange}
            />
          </div>

          <div className={styles.profile_item}>
            <span>Почта</span>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={onChange}
            />
          </div>

          <div>
            <button type="submit" onClick={() => onClick()}>
              Сменить пароль
            </button>
            <button
              className={styles.logout_button}
              onClick={() => dispatch(userLogout())}
            >
              <img src={logout} />
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
