import React from 'react';
import PropTypes from 'prop-types';

import { useGetCat } from 'hooks/cats';

const propTypes = {
  catListIndex: PropTypes.number.isRequired,
  catId: PropTypes.string.isRequired,
};

function CatBlock({ catListIndex, catId }) {
  const { isGetCatLoading, hasGetCatError, cat } = useGetCat({
    catListIndex,
    catId,
  });

  return (
    <div>
      {isGetCatLoading && !cat && <div>loading</div>}
      {hasGetCatError && !isGetCatLoading && <div>error</div>}
      {cat._id}
    </div>
  );
}

CatBlock.propTypes = propTypes;
export default CatBlock;
