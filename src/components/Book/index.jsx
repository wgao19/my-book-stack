// @flow

import React from "react";
import { connect } from "react-redux";
import { toggleStatus } from "../../redux/actions";
import s from "./s.module.css";

const Book = ({ id, title, status, toggleStatus }) => (
  <li className={s.book}>
    {`${title}: `}
    <small onClick={() => toggleStatus(id)} className={s.status}>
      {status}
    </small>
  </li>
);

const mapState = (state, { id }) => ({
  title: state.byIds[id].title,
  status: state.byIds[id].status
});

const mapDispatch = { toggleStatus };

export default connect(
  mapState,
  mapDispatch
)(Book);
