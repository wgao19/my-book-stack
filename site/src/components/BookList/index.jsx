// @flow
import React from "react";
import Book from "../Book";
import { connect } from "react-redux";

const MyBookList = ({ bookIds }) => (
  <ul>
    {!!bookIds &&
      !!bookIds.length &&
      bookIds.map(bookId => <Book key={bookId} id={bookId} />)}
  </ul>
);

const mapState = state => ({ bookIds: state.allIds });

export default connect(mapState)(MyBookList);
