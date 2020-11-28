import { useState, useEffect, shallowEqual } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  const [isGetCatsLoading, setisGetCatsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get({ requestMethod });
        dispatch(setCatsSuccess(response.data));
        setisGetCatsLoading(false);
      } catch (err) {
        setHasGetCatsError(err);
        setisGetCatsLoading(false);
      }
    })();
  }, []);

  return {
    isGetCatsLoading,
    hasGetCatsError,
    catsListIds,
  };
}

export default useGetCats;
