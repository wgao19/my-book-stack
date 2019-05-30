// @flow
import * as React from "react";
import Book from "../Book";
import { connect } from "react-redux";

type BookListProps = { bookIds: number[] };

const MyBookList = ({ bookIds }: BookListProps) => (
  <main>
    {!!bookIds &&
      !!bookIds.length &&
      bookIds.map(bookId => <Book key={bookId} id={bookId} />)}
  </main>
);

const mapState = state => ({ bookIds: state.books.allIds });

export default connect<BookListProps, {}, _, _, _, _>(mapState)(MyBookList);
