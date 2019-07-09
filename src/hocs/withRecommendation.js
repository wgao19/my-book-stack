// @flow
import * as React from "react";
import { connect } from "react-redux";

export type withRecommendationProps = {
  recommendation: number[]
};

function withRecommendation<T: withRecommendationProps>(
  WrappedComponent: React.AbstractComponent<T>
): React.AbstractComponent<$Diff<T, withRecommendationProps>> {
  const BookWithRecommendationUI = (props: T) => (
    <WrappedComponent {...props} />
  );
  return connect((state, ownProps) => ({
    recommendation: state.recommendations[ownProps.id]
  }))(BookWithRecommendationUI);
}

export default withRecommendation;
