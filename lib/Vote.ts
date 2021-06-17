import _ from "lodash";

export interface Vote {
  // Meta
  id: number;
  created_at: string;
  author: string;

  // Input
  option_id: number;
  like_value: number;
  is_vetoed: boolean;
}

export interface VoteResult {
  option_id: number;
  like_value: number;
  is_vetoed: boolean;
}

export function sumVotes(votes: Array<Vote>): Array<VoteResult> {
  const grouped = _.groupBy(votes, (x) => x.option_id);
  const result = Object.values(grouped).map((x) => sumVotesOfOneOption(x));
  const resultSorted = result.sort((a, b) => {
    if (a.is_vetoed != b.is_vetoed) {
      if (a.is_vetoed) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return b.like_value - a.like_value;
    }
  });
  return resultSorted;
}

function sumVotesOfOneOption(votes: Array<Vote>): VoteResult {
  return {
    option_id: votes[0].option_id,
    like_value: votes
      .map((x) => x.like_value / votes.length)
      .reduce((a, b) => a + b, 0),
    is_vetoed: votes.some((vote) => vote.is_vetoed),
  };
}
