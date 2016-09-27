import * as Actions from '../actions/tracks_actions';

const recording = (state = false, action) => {
  switch(action.type){
    case Actions.START_RECORDING:
      return true;
    case Actions.STOP_RECORDING:
      return true;
    default:
      return state;
  }
};

export default recording;
