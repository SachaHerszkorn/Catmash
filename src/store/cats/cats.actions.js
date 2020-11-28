const actionTypes = {
  SET_CATS: 'SET_CATS',
  SET_CATS_SUCCESS: 'SET_CATS_SUCCESS',
  SET_CATS_FAIL: 'SET_CATS_FAIL',
  SET_CAT: 'SET_CAT',
  SET_CAT_SUCCESS: 'SET_CAT_SUCCESS',
  SET_CAT_FAIL: 'SET_CAT_FAIL',
  VOTE_CAT: 'VOTE_CAT',
  VOTE_CAT_SUCCESS: 'VOTE_CAT_SUCCESS',
  VOTE_CAT_FAIL: 'VOTE_CAT_FAIL',
};

export function setCatsSuccess(payload) {
  return {
    type: actionTypes.SET_CATS_SUCCESS,
    payload,
  };
}

export function setCatSuccess(payload) {
  return {
    type: actionTypes.SET_CAT_SUCCESS,
    payload,
  };
}

export function voteCatSuccess(payload) {
  return {
    type: actionTypes.SET_CATS,
    payload,
  };
}

export default actionTypes;
