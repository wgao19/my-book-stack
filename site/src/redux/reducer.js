import { PUSH, SET_STATUS, TOGGLE_STATUS } from "./actionTypes";

const initState = {
  allIds: [],
  byIds: {}
};
const STATA = ["WAITING", "READING", "FINISHED"];
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
            status: STATA[0]
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
    case TOGGLE_STATUS: {
      // rotates through all stata
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            status:
              STATA[(STATA.indexOf(state.byIds[id].status) + 1) % STATA.length]
          }
        }
      };
    }
    default:
      return state;
  }
};

export default books;
