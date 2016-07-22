import {LOCATION_RECEIVED} from '../constants/ActionTypes';

export function setLocation(location) {
  return {
    type: LOCATION_RECEIVED,
    location: location
  }
}
