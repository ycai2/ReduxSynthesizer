import React from 'react';
import ReactDOM from 'react-dom';

import Note from './util/note';
import configureStore from './store/store';
import * as Actions from './actions/note_actions';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  window.Note = Note;
  window.store = configureStore();
  window.keyPressed = Actions.keyPressed;
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
});
