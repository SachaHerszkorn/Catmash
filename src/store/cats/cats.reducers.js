import actionTypes from './cats.actions';

export default (state = { list: [] }, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CATS_SUCCESS: {
      return {
        ...state,
        list: payload,
      };
    }
    case actionTypes.VOTE_CAT_SUCCESS: {
      const newList = [...state.list];
      const catIndex = state.list.findIndex((cat) => cat._id === payload.id);
      newList[catIndex] = payload;
      return {
        ...state,
        list: newList,
      };
    }
    default:
      return state;
  }
};
