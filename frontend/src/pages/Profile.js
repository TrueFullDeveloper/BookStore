import React, { Fragment, useEffect } from "react";
import { ProfileForm } from "../components/profileForm/ProfileForm";
import { Loader } from "../components/loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProfile,
  selectProfileLoading,
} from "../reduxToolkit/api/profileSlice";
import { Footer } from "../components/footer/Footer";

export const Profile = () => {
  const loading = useSelector(selectProfileLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile("USER_TOKEN"));
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <ProfileForm />
        </Fragment>
      )}
    </Fragment>
  );
};
