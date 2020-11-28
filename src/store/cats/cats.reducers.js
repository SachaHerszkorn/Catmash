import actionTypes from './cats.actions';

export default (state = { list: [], listIds: [] }, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CATS_SUCCESS: {
      const newListIds = payload.map(({ _id }) => _id);
      return {
        ...state,
        list: payload,
        listIds: newListIds,
      };
    }
    case actionTypes.SET_CAT_SUCCESS: {
      const newList = [...state.list];
      const newListIds = [...state.listIds];
      const catIndex = state.listIds.findIndex(
        (catId) => catId === payload._id,
      );
      if (catIndex === -1) {
        newList.push(payload);
      } else {
        console.log(payload);
        newList[catIndex] = payload;
      }
      return {
        ...state,
        list: newList,
        listIds: newListIds,
      };
    }
    default:
      return state;
  }
};
