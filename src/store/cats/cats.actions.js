const actionTypes = {
  SET_CATS: 'SET_CATS',
  SET_CATS_SUCCESS: 'SET_CATS_SUCCESS',
  SET_CATS_FAIL: 'SET_CATS_FAIL',
  VOTE_CAT: 'VOTE_CAT',
  VOTE_CAT_SUCCESS: 'VOTE_CAT_SUCCESS',
  VOTE_CAT_FAIL: 'VOTE_CAT_FAIL',
};

export function setCatsSuccess(payload) {
  return {
    type: actionTypes.SET_CATS,
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
