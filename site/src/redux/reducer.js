import { combineReducers } from "redux";
import books from "./reducers/books";
import recommendations from "./reducers/recommendations";

export default combineReducers({ books, recommendations });
