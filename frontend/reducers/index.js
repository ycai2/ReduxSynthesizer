import notesReducer from './notes_reducer';
import {combineReducers} from 'redux';
import recording from './is_recording_reducer';

const rootReducer = combineReducers({notes: notesReducer});
export default rootReducer;
