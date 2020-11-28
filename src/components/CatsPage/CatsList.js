import React from 'react';

import { useGetCats } from 'hooks/cats';

import CatBlock from './CatBlock';

function CatsList() {
  const { isGetCatsLoading, hasGetCatsError, catsListIds } = useGetCats();

  return (
    <div>
      {isGetCatsLoading && !catsListIds && <div>loading</div>}
      {hasGetCatsError && !isGetCatsLoading && <div>error</div>}
      {catsListIds.map((catId, index) => (
        <CatBlock key={catId} catListIndex={index} catId={catId} />
      ))}
    </div>
  );
}

export default CatsList;
