import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { api } from 'helpers';

import { setCatSuccess } from 'store/cats/cats.actions';

const {
  requestMethods: { postCatVote: requestMethod },
} = api;

function useVoteCat() {
  const [hasVoteCatError, setHasGetCatsError] = useState();
  const [isVoteCatLoading, setisGetCatsLoading] = useState(true);
  const dispatch = useDispatch();

  const voteCat = useCallback(async (_id) => {
    try {
      const response = await api.post({
        requestMethod,
        extraParameters: { _id },
      });
      dispatch(setCatSuccess(response.data));
    } catch (err) {
      setHasGetCatsError(err);
      setisGetCatsLoading(false);
    }
  }, []);

  return {
    isVoteCatLoading,
    hasVoteCatError,
    voteCat,
  };
}

export default useVoteCat;
