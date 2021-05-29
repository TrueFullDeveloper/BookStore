import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "./components/Loader";
import { useRoutes } from "./routes";

function App() {
  const isAuthenticated = true;
  const loading = false;

  const routes = useRoutes(isAuthenticated);
  return (
    <Fragment>
      {loading ? <Loader /> : <BrowserRouter>{routes}</BrowserRouter>}
    </Fragment>
  );
}

export default App;
