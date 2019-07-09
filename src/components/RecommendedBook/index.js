// @flow

import * as React from "react";
import { connect } from "react-redux";
import s from "./s.module.css";

type RecommendedBookProps = {
  id: number,
  title: string
};

type OwnProps = {
  id: number
};

const RecommendedBook = ({ id, title }: RecommendedBookProps) => (
  <span className={s.recommendedBook}>{title}</span>
);

const mapState = (state, { id }) => ({
  title: state.books.byIds[id].title
});

export default connect<RecommendedBookProps, OwnProps, _, _, _, _>(mapState)(
  RecommendedBook
);
