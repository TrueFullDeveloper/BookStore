import React, { Fragment, useEffect } from "react";
import { Footer } from "../components/footer/Footer";
import { BookDescription } from "../components/bookDescription/BookDescription";

export const Book = () => {
  return (
    <Fragment>
      <BookDescription />
      <Footer />
    </Fragment>
  );
};
