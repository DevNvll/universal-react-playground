import {LOCATION_RECEIVED} from '../constants/ActionTypes';

export default function location(state = null, action) {
  switch(action.type) {
    case 'LOCATION_RECEIVED':
      return state = action.location
    default:
      return state
  }
}
