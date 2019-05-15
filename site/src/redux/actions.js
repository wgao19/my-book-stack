import { PUSH, SET_STATUS, TOGGLE_STATUS } from "./actionTypes";

let nextBookId = 0;

export const push = title => ({
  type: PUSH,
  payload: {
    id: ++nextBookId,
    title
  }
});

export const setStatus = (id, status) => ({
  type: SET_STATUS,
  payload: { id, status }
});

export const toggleStatus = id => ({
  type: TOGGLE_STATUS,
  payload: { id }
});
