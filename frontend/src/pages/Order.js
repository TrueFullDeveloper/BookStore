import React, { Fragment, useEffect, useState } from "react";
import { Loader } from "../components/loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  getBasket,
  selectBasketLoading,
  selectBasket,
} from "../reduxToolkit/api/basketSlice";
import { Footer } from "../components/footer/Footer";
import { OrderForm } from "../components/orderForm/OrderForm";

export const Order = () => {
  const loading = useSelector(selectBasketLoading);
  const basketList = useSelector(selectBasket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket("USER_TOKEN"));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <OrderForm basketList={basketList} />
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};
