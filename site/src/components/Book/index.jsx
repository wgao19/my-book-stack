// @flow

import * as React from "react";
import { connect } from "react-redux";
import { toggleStatus } from "../../redux/actions";
import s from "./s.module.css";

type BookProps = {
  id: number,
  title: string,
  status: string,
  toggleStatus: typeof toggleStatus
};

type OwnProps = {
  id: number
};

const Book = ({ id, title, status, toggleStatus }: BookProps) => (
  <li className={s.book}>
    {`${title}: `}
    <small onClick={() => toggleStatus(id)} className={s.status}>
      {status}
    </small>
  </li>
);

const mapState = (state, { id }) => ({
  title: state.books.byIds[id].title,
  status: state.books.byIds[id].status
});

const mapDispatch = { toggleStatus };

export default connect<BookProps, OwnProps, _, _, _, _>(
  mapState,
  mapDispatch
)(Book);
