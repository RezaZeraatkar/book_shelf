import { combineReducers } from "redux";
import books from "./booksReducer";
import user from "./userReducer";

const rootReducer = combineReducers({ books, user });

export default rootReducer;
