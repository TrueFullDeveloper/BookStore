import React, { Fragment, useEffect, useState } from "react";
import { BasketList } from "../components/basketList/BasketList";
import { Loader } from "../components/loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  getBasket,
  deleteBasketItem,
  selectBasketLoading,
  selectBasket,
} from "../reduxToolkit/api/basketSlice";
import { Footer } from "../components/footer/Footer";

export const Basket = () => {
  const [basketListState, setBasketList] = useState(false); // Издалека похоже на костыль(

  const loading = useSelector(selectBasketLoading);
  const basketList = useSelector(selectBasket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket("USER_TOKEN"));
    // eslint-disable-next-line
  }, [dispatch]);

  const onRemove = basketItemId => {
    setBasketList(
      basketList.filter(basketItem => basketItem.id !== basketItemId)
    );

    dispatch(deleteBasketItem(basketItemId));
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <BasketList
            basketList={basketListState || basketList}
            onRemove={onRemove}
          />
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};
