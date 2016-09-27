import * as Actions from '../actions/tracks_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

const tracks = (state = {}, action) => {
  let newState = merge({}, state);
  switch(action.type) {
    case Actions.START_RECORDING:
      currTrackId++;

      newState[currTrackId] = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: Date.now()
      };
      return newState;
    case Actions.STOP_RECORDING:
      let newState = merge({}, state);
      newState[currTrackId].roll.push({notes:[], timeSlice: Date.now()})
      return newState;

    default:
      return state;
  }
};

export default tracks;
