import React from "react";
import { connect } from "react-redux";
import { push } from "../redux/actions";

type PushBookProps = {
  push: typeof push
};
type PushBookState = {
  input: string
};
class PushBook extends React.Component<PushBookProps, PushBookState> {
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
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button onClick={this.handleAddTodo}>Push Book</button>
      </div>
    );
  }
}

export default connect(
  null,
  { push }
)(PushBook);
