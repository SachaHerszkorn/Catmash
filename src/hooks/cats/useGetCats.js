import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { setCatsSuccess } from 'store/cats/cats.actions';
import { selectCatsListIds } from 'store/cats/cats.selectors';

import { api } from 'helpers';

const {
  requestMethods: { getCats: requestMethod },
} = api;

function useGetCats() {
  const dispatch = useDispatch();
  const catsListIds = useSelector(selectCatsListIds, shallowEqual);
  const [hasGetCatsError, setHasGetCatsError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get({ requestMethod });
        dispatch(setCatsSuccess(response.data));
      } catch (err) {
        setHasGetCatsError(err);
      }
    })();
  }, []);

  return {
    hasGetCatsError,
    catsListIds,
  };
}

export default useGetCats;
