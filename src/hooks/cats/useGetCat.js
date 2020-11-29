import { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { setCatSuccess } from 'store/cats/cats.actions';
import { selectCatByIndex } from 'store/cats/cats.selectors';

import { api } from 'helpers';

const {
  requestMethods: { getCat: requestMethod },
} = api;

function useGetCat({ catListIndex, catId }) {
  const dispatch = useDispatch();
  const cat = useSelector(
    (state) => selectCatByIndex(state, catListIndex),
    shallowEqual,
  );
  const [hasGetCatError, setHasGetCatError] = useState();
  const [isGetCatLoading, setisGetCatLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get({
          requestMethod,
          extraParameters: { _id: catId },
        });
        dispatch(setCatSuccess(response.data));
      } catch (err) {
        setHasGetCatError(err);
        setisGetCatLoading(false);
      }
    })();
  }, []);

  return {
    isGetCatLoading,
    hasGetCatError,
    cat,
  };
}

export default useGetCat;
