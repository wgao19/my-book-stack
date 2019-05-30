import { PUSH } from "../actionTypes";
const initState = {};

const recommendations = (state = initState, action) => {
  switch (action.type) {
    case PUSH: {
      const { id } = action.payload;
      const list = [];
      for (let i = 1; i < id; i++) {
        list.push(i);
      }
      return {
        ...state,
        [id]: list
      };
    }
    default: {
      return state;
    }
  }
};

export default recommendations;
