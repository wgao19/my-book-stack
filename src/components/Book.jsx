import React from "react";
import { connect } from "react-redux";

const Book = ({
  id,
  title,
  status
}: {
  id: number,
  title: string,
  status: string
}) => (
  <li>
    {`${title}: `}
    <small>{status}</small>
  </li>
);

const mapState = (state, { id }) => ({
  title: state.byIds[id].title,
  status: state.byIds[id].status
});

export default connect(mapState)(Book);
