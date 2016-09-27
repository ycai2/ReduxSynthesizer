import { KEY_PRESSED,  KEY_RELEASED } from '../actions/note_actions';
import { NOTE_NAMES } from '../util/tones';


const initialState = [];

const notesReducer = (state = initialState, action) => {
  const idx = state.indexOf(action.key);
  switch(action.type) {
    case KEY_PRESSED:
      if (NOTE_NAMES.indexOf(action.key) < 0) {
        return state;
      }
      if (idx < 0) {
        return [action.key, ...state];
      } else {
        return state;
      }

      return;

    case KEY_RELEASED:
      if (NOTE_NAMES.indexOf(action.key) < 0) {
        return state;
      }
      return state.slice(0, idx).concat(state.slice(idx+1));
    default:
      return state;
  }
};

export default notesReducer;
