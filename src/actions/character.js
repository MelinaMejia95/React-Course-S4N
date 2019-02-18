import { SET_LIKES } from '../types/character';

export const setLikes = payload => ({
  type: SET_LIKES,
  payload
});

export const increaseLikes = () => (dispatch, getState) => {
  const { likes } = getState().character;
  const totalLikes = likes + 1;

  dispatch(setLikes(totalLikes))
  console.log('likes', totalLikes)
}