import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
import { Basket } from "./pages/Basket";
import { OrderHistory } from "./pages/OrderHistory";
import { Search } from "./pages/Search";
import { Profile } from "./pages/Profile";
import { Book } from "./pages/Book";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/orders"} exact component={OrderHistory} />
        <Route path={"/search"} exact component={Search} />
        <Route path={"/profile"} exact component={Profile} />
        <Route path={"/basket"} exact component={Basket} />
        <Route path={"/Book"} exact component={Book} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path={"/login"} exact component={Login} />
      <Route path={"/signin"} exact component={Signup} />
      <Redirect to="/login" />
    </Switch>
  );
};
