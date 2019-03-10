import Immutable from 'seamless-immutable';
import { SET_LIKES, 
         RESET_STATE,
         CHARACTERS_ERROR,
         CHARACTERS_SUCCESS,
         CHARACTERS_REQUEST } from '../types/character';

const defaultState = Immutable({
  likes: 0,
  characters: [],
  error: '',
  fetching: false
});

export default function character(state = defaultState, action = {}){
  switch(action.type) {
    case SET_LIKES: 
      return state.merge({
        likes: action.payload
      })
    case RESET_STATE:
      return defaultState;
    case CHARACTERS_ERROR: 
      return state.merge({
        error: action.payload.error,
        fetching: true
      });
    case CHARACTERS_SUCCESS: 
      return state.merge({
        characters: action.payload.characters,
        error: '',
        fetching: false
      });
    case CHARACTERS_REQUEST: 
      return state.merge({
        error: '',
        fetching: true
      });
    default :
    return state
  }
}