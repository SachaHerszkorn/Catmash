import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { api } from 'helpers';

import { setCatSuccess } from 'store/cats/cats.actions';

const {
  requestMethods: { getCatMash: requestMethod },
} = api;

function useGetCatMash() {
  const [hasGetCatMashError, setHasGetCatMashError] = useState();
  const [isGetCatMashLoading, setisGetCatMashLoading] = useState(true);
  const [catMash, setCatMash] = useState();
  const dispatch = useDispatch();

  const getCatMash = useCallback(async () => {
    try {
      setisGetCatMashLoading(true);
      const { data } = await api.get({ requestMethod });
      setCatMash(data);
      data.forEach((catData) => {
        dispatch(setCatSuccess(catData));
      });
      setisGetCatMashLoading(false);
    } catch (err) {
      setHasGetCatMashError(err);
      setisGetCatMashLoading(false);
    }
  }, []);

  return {
    isGetCatMashLoading,
    hasGetCatMashError,
    getCatMash,
    catMash,
  };
}

export default useGetCatMash;
