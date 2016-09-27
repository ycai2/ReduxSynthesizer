import React from 'react';
import ReactDOM from 'react-dom';

import Note from './util/note';

document.addEventListener("DOMContentLoaded", () => {
  window.Note = Note;
  ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));
});
