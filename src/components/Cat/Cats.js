import React from 'react';

import { useGetCats } from 'hooks/cats';

import './Cats.scss';
import CatsList from './CatsList';

function Cats() {
  const { hasGetCatsError, catsListIds } = useGetCats();
  const firstCatsListIds = catsListIds.slice(0, 4);
  const secondCatsListIds = catsListIds.slice(4, 8);
  const thirdCatsListIds = catsListIds.slice(8);

  return (
    <div className="cats-page">
      {hasGetCatsError && <div className="error-no-cats">error</div>}
      <CatsList
        title="hottest cats 🥇"
        list={firstCatsListIds}
        startIndex={0}
      />
      <CatsList
        title="Non cat-astrophics 👊"
        list={secondCatsListIds}
        startIndex={4}
      />
      <CatsList
        title="leftover kitties 🐱"
        list={thirdCatsListIds}
        startIndex={8}
      />
    </div>
  );
}

export default Cats;
