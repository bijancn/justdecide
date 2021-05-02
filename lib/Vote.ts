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
  return result;
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
