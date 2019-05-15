// @flow
import React from "react";
import { connect } from "react-redux";
import { push } from "../../redux/actions";
import s from "./s.module.css";

class PushBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.push(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className={s.wrapper}>
        <label>Title</label>
        <div className={s.pushBook}>
          <input
            type="text"
            placeholder="The Dharma Bums"
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
            className={s.inputBook}
          />
          <span />
        </div>
        <button className={s.btnPushBook} onClick={this.handleAddTodo}>
          Push Book
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { push }
)(PushBook);
