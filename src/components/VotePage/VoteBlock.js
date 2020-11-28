import React from 'react';
import PropTypes from 'prop-types';

import { useVoteCat } from 'hooks/cats';

const propTypes = {
  catData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  onVote: PropTypes.func.isRequired,
};
function VoteBlock({ catData, onVote }) {
  const { voteCat } = useVoteCat();
  const voteForThisCat = () => {
    voteCat(catData._id);
    onVote();
  };

  return (
    <div>
      {catData._id}
      <button type="button" onClick={voteForThisCat}>
        Vote
      </button>
    </div>
  );
}

VoteBlock.propTypes = propTypes;
export default VoteBlock;
