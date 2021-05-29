import React, { Fragment, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "./components/loader/Loader";
import { useRoutes } from "./routes";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAuthenticated,
  selectAuthLoading,
  userLogin,
} from "./reduxToolkit/api/authSlice";
import { Header } from "./components/header/Header";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectAuthenticated);
  const loading = useSelector(selectAuthLoading);

  useEffect(() => {
    dispatch(userLogin());
  }, [dispatch]);

  const routes = useRoutes(isAuthenticated);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          {isAuthenticated && <Header />} {routes}
        </BrowserRouter>
      )}
    </Fragment>
  );
}

export default App;
