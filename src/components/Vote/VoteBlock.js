/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';

import { useVoteCat } from 'hooks/cats';

const propTypes = {
  catData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  onVote: PropTypes.func.isRequired,
  catIndex: PropTypes.number.isRequired,
  hasVoted: PropTypes.number.isRequired,
  isSuperRound: PropTypes.bool.isRequired,
};

function VoteBlock({ catData, catIndex, isSuperRound, hasVoted, onVote }) {
  const { voteCat } = useVoteCat();
  const isWinner = hasVoted === catIndex;
  const processedHasVoted = hasVoted !== -1;
  const voteForThisCat = () => {
    if (!processedHasVoted) {
      voteCat(catData._id);
      onVote();
    }
  };

  const determineAppearForFightClassName = () => {
    if (catIndex === 0) {
      return 'left';
    }
    if (catIndex === 2) {
      return 'right';
    }
    if (catIndex === 1 && isSuperRound) {
      return 'bottom';
    }
    return 'right';
  };

  const determineCatEmoji = () => {
    switch (catIndex) {
      case 0:
        return '😻';
      case 1:
        return '😽';
      case 2:
        return '😼';
      default:
        return '😻';
    }
  };

  return (
    <div
      className={`vote-block vote-block-${catIndex} appearFrom ${determineAppearForFightClassName()}`}
    >
      <div
        className={classNames('cat-block', {
          small: isSuperRound,
        })}
      >
        <img src={catData.url} alt={`cat-number-${catIndex + 1}`} />
        {isWinner && <div className="plus-one appearDisappear">+1</div>}
        <div className="score">
          <span
            className={classNames('score', {
              mysterious: !processedHasVoted,
              appear: processedHasVoted,
            })}
          >
            {processedHasVoted ? catData.score + 1 : '?'}
          </span>
        </div>
      </div>
      <button
        type="button"
        className={classNames('vote-button', {
          appear: !processedHasVoted,
          disappear: processedHasVoted,
        })}
        onClick={voteForThisCat}
      >
        vote {determineCatEmoji()}
      </button>
    </div>
  );
}

VoteBlock.propTypes = propTypes;
export default VoteBlock;
