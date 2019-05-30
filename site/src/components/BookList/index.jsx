// @flow
import * as React from "react";
import Book from "../Book";
import { connect } from "react-redux";

type BookListProps = { bookIds: number[] };
type OwnProps = {};

const MyBookList = ({ bookIds }: BookListProps) => (
  <ul>
    {!!bookIds &&
      !!bookIds.length &&
      bookIds.map(bookId => <Book key={bookId} id={bookId} />)}
  </ul>
);

const mapState = state => ({ bookIds: state.allIds });

export default connect<BookListProps, {}, _, _, _, _>(mapState)(MyBookList);
