// @flow

import * as React from "react";
import RecommendedBook from "../RecommendedBook";
import { connect } from "react-redux";
import { toggleStatus } from "../../redux/actions";
import withRecommendation from "../../hocs/withRecommendation";
import type { withRecommendationProps } from "../../hocs/withRecommendation";
import s from "./s.module.css";

type BookProps = {
  id: number,
  title: string,
  status: string,
  toggleStatus: typeof toggleStatus
} & {
  recommendations: number[]
};

type OwnProps = {
  id: number
};

const Book = ({
  id,
  title,
  status,
  toggleStatus,
  recommendations
}: BookProps) => (
  <section className={s.book}>
    <h2 className={s.title}>
      {title}
      <small
        data-status={status}
        onClick={() => toggleStatus(id)}
        className={s.status}
      >
        {status}
      </small>
    </h2>
    {!!recommendations &&
      !!recommendations.length &&
      recommendations.length > 0 && (
        <div>
          <span>You may also like: </span>
          {recommendations.map((id, idx) => (
            <RecommendedBook id={id} key={idx} />
          ))}
        </div>
      )}
  </section>
);

const mapState = (state, { id }) => ({
  title: state.books.byIds[id].title,
  status: state.books.byIds[id].status
});

const mapDispatch = { toggleStatus };

export default connect(
  mapState,
  mapDispatch
)(withRecommendation(Book));
