import React, { useEffect, useState } from 'react';
import classNames from 'class-names';

import { useGetCatMash } from 'hooks/cats';

import './Vote.scss';
import VoteBlock from './VoteBlock';

function Vote() {
  const {
    isGetCatMashLoading,
    hasGetCatmashError,
    catMash,
    getCatMash,
  } = useGetCatMash();
  const [hasVoted, setHasVoted] = useState(-1);
  const [epicBattleCount, setEpicBattleCount] = useState(1);
  const isSuperRound = catMash.length > 2;
  const processedHasVoted = hasVoted !== -1;

  const processVote = (catIndex) => {
    setHasVoted(catIndex);
    setTimeout(() => {
      setEpicBattleCount(epicBattleCount + 1);
      getCatMash();
      setHasVoted(-1);
    }, 1000);
  };

  useEffect(() => {
    getCatMash();
  }, []);

  const renderCatMash = () => {
    if (!isGetCatMashLoading) {
      return (
        <>
          <VoteBlock
            key={catMash[0]._id}
            catData={catMash[0]}
            catIndex={0}
            isSuperRound={isSuperRound}
            hasVoted={hasVoted}
            onVote={() => processVote(0)}
          />
          <div className="versus appearRotate">vs</div>
          <VoteBlock
            key={catMash[1]._id}
            catData={catMash[1]}
            catIndex={1}
            isSuperRound={isSuperRound}
            hasVoted={hasVoted}
            onVote={() => processVote(1)}
          />
          {isSuperRound && (
            <>
              <div className="versus appearRotate">vs</div>
              <VoteBlock
                key={catMash[2]._id}
                catData={catMash[2]}
                catIndex={2}
                isSuperRound={isSuperRound}
                hasVoted={hasVoted}
                onVote={() => processVote(2)}
              />
            </>
          )}
        </>
      );
    }
    return false;
  };

  return (
    <div className="vote-page">
      {hasGetCatmashError && <div>error</div>}
      <div className="epic-battle-wrapper">
        <h1
          className={classNames('epic-battle-title', {
            'appearFrom top': !processedHasVoted,
            disappear: processedHasVoted,
          })}
        >
          Epic Battle #{epicBattleCount}
        </h1>
      </div>
      {renderCatMash()}
    </div>
  );
}

export default Vote;
