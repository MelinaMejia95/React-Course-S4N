import { SET_LIKES,
         RESET_STATE,
         CHARACTERS_REQUEST,
         CHARACTERS_SUCCESS,
         CHARACTERS_ERROR } from '../types/character';

export const fetchCharacterSaga = () => ({
  type: CHARACTERS_REQUEST
});

export const fetchCharacterSuccess = payload => ({
  type: CHARACTERS_SUCCESS,
  payload
});

export const fetchCharacterError = payload => ({
  type: CHARACTERS_ERROR,
  payload
});

export const setLikes = payload => ({
  type: SET_LIKES,
  payload
});

export const setDefaultState = () => ({
  type: RESET_STATE
});

export const resetState = () => (dispatch) => {
  dispatch(setDefaultState())
};

export const increaseLikes = () => (dispatch, getState) => {
  const { likes } = getState().character;
  const totalLikes = likes + 1;
  dispatch(setLikes(totalLikes))
};

export const decreaseLikes = () => (dispatch, getState) => {
  const {likes} = getState().character;
  const totalLikes = likes > 0 ? likes - 1 : 0;
  dispatch(setLikes(totalLikes))
};