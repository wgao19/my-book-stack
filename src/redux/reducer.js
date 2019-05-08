import { PUSH, SET_STATUS } from "./actionTypes";

const initState = {
  allIds: [],
  byIds: {}
};
const books = (state = initState, action) => {
  switch (action.type) {
    case PUSH: {
      const { id, title } = action.payload;
      return {
        ...state,
        allIds: [id, ...state.allIds],
        byIds: {
          ...state.byIds,
          [id]: {
            title,
            status: "WAITING"
          }
        }
      };
    }
    case SET_STATUS: {
      const { id, status } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            status
          }
        }
      };
    }
    default:
      return state;
  }
};

export default books;
