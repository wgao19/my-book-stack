import React from "react";
import BookList from "./components/BookList";
import PushBook from "./components/PushBook";

export default () => (
  <div>
    <h1>My Book Stack</h1>
    <p>My reading is list is never a queue, is a stack.</p>
    <BookList />
    <PushBook />
  </div>
);
