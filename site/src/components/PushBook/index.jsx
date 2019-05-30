// @flow
import * as React from "react";
import { connect } from "react-redux";
import { push } from "../../redux/actions";
import s from "./s.module.css";

type PushBookProps = {
  push: typeof push
};
type OwnProps = {};
type PushBookState = {
  input: string
};
class PushBook extends React.Component<PushBookProps, PushBookState> {
  constructor(props: PushBookProps) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input: string) => {
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

export default connect<PushBookProps, OwnProps, _, _, _, _>(
  null,
  { push }
)(PushBook);
