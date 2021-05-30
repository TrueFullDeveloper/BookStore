import React, { Fragment, useEffect } from "react";
import { Footer } from "../components/footer/Footer";
import { BookDescription } from "../components/bookDescription/BookDescription";
import { FeedbackForm } from "../components/feedbackForm/FeedbackForm";

export const Book = () => {
  return (
    <Fragment>
      <BookDescription />
      <FeedbackForm />
      <Footer />
    </Fragment>
  );
};
