import { call, put } from 'redux-saga/effects';
import {
  fetchCharacterSuccess,
  fetchCharacterError
} from '../actions/character';
import api from '../api';

export function* fetchCharacterSaga(action) {
  try {
    const characters = yield call(
      api.characters.fetchAll
    );
    yield put(fetchCharacterSuccess(characters));
  } catch (err) {
    yield put(fetchCharacterError(err.response));
  }
}