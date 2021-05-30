import React, { Fragment, useEffect } from "react";
import { SearchForm } from "../components/searchForm/SearchForm";
import { BookList } from "../components/bookList/BookList";
import { Loader } from "../components/loader/Loader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchResponse,
  selectResponseList,
  selectSearchLoading,
} from "../reduxToolkit/api/searchSlice";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResponse(""));
  }, []);

  const responseList = useSelector(selectResponseList);
  const loading = useSelector(selectSearchLoading);

  return (
    <Fragment>
      <Header />
      <SearchForm />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <BookList bookItems={responseList} />
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};
