import React from 'react';
import PropTypes from 'prop-types';

import CatBlock from './CatBlock';

const propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  startIndex: PropTypes.number.isRequired,
};

function CatsList({ title, list, startIndex }) {
  return (
    <div className="cats-list">
      <h1 className="cats-list-title appear">{title}</h1>
      <div className="cats-list-content">
        {list.map((catId, catIndex) => (
          <CatBlock
            key={catId}
            catListIndex={catIndex + startIndex}
            catId={catId}
          />
        ))}
      </div>
    </div>
  );
}

CatsList.propTypes = propTypes;
export default CatsList;
