// @flow
import * as React from "react";
import { connect } from "react-redux";

const withRecommendation = WrappedComponent => {
  const BookWithRecommendationUI = props => <WrappedComponent {...props} />;
  return connect((state, ownProps) => ({
    recommendation: state.recommendations[ownProps.id]
  }))(BookWithRecommendationUI);
};

export default withRecommendation;
