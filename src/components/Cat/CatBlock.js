import React from 'react';
import PropTypes from 'prop-types';

import { useGetCat } from 'hooks/cats';

const propTypes = {
  catListIndex: PropTypes.number.isRequired,
  catId: PropTypes.string.isRequired,
};

function CatBlock({ catListIndex, catId }) {
  const { cat, hasGetCatError } = useGetCat({ catListIndex, catId });

  return (
    <div
      className="cat-block appear"
      style={{ animationDelay: `${0.07 * catListIndex}s` }}
    >
      {hasGetCatError && <div>error</div>}
      <img src={cat.url} alt={`cat-number-${catListIndex + 1}`} />
      <div className="score">{cat.score}</div>
    </div>
  );
}

CatBlock.propTypes = propTypes;
export default CatBlock;
