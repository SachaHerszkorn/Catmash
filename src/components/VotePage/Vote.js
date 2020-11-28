import React, { useEffect } from 'react';

import { useGetCatMash } from 'hooks/cats';
import VoteBlock from './VoteBlock';

function Vote() {
  const {
    isGetCatMashLoading,
    hasGetCatmashError,
    catMash,
    getCatMash,
  } = useGetCatMash();

  useEffect(() => {
    getCatMash();
  }, []);

  return (
    <div>
      {isGetCatMashLoading && !catMash && <div>loading</div>}
      {hasGetCatmashError && !isGetCatMashLoading && <div>error</div>}
      {!isGetCatMashLoading &&
        !hasGetCatmashError &&
        catMash.map((catData) => (
          <VoteBlock
            key={catData._id}
            catData={catData}
            onVote={() => getCatMash()}
          />
        ))}
    </div>
  );
}

export default Vote;
