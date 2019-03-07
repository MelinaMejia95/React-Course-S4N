import Immutable from 'seamless-immutable';
import { SET_LIKES, RESET_STATE } from '../types/character';

const defaultState = Immutable({
  likes: 0
});

export default function character(state = defaultState, action = {}){
  switch(action.type) {
    case SET_LIKES: 
      return state.merge({
        likes: action.payload
      })
    case RESET_STATE:
      return defaultState;
    default :
    return state
  }
}