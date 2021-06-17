import { Vote, sumVotes } from "../../lib/Vote";

describe("Vote Counting", function () {
  function sum(array) {
    const votes = array.map((likeVetoAuthorOption, index) => {
      const vote = {
        like_value: likeVetoAuthorOption[0],
        is_vetoed: likeVetoAuthorOption[1],
        author: likeVetoAuthorOption[2],
        option_id: likeVetoAuthorOption[3],
      };
      return vote;
    });
    const result = sumVotes(votes);
    return result.map((x) => [x.like_value, x.is_vetoed, x.option_id]);
  }
  context("sum", function () {
    it("averages likes", function () {
      expect(
        sum([
          [10, false, "a", 0],
          [20, false, "b", 0],
          [30, false, "c", 0],
        ])
      ).to.deep.equal([[20, false, 0]]);
      expect(
        sum([
          [100, false, "a", 1],
          [100, false, "b", 1],
          [100, false, "c", 1],
        ])
      ).to.deep.equal([[100, false, 1]]);
      expect(
        sum([
          [0, false, "a", 2],
          [100, false, "b", 2],
        ])
      ).to.deep.equal([[50, false, 2]]);
      expect(sum([[30, false, "a", 3]])).to.deep.equal([[30, false, 3]]);
    });
    it("one veto makes the result a veto", function () {
      expect(
        sum([
          [10, false, "a", 0],
          [20, true, "b", 0],
          [30, false, "c", 0],
        ])
      ).to.deep.equal([[20, true, 0]]);
    });
    it("two vetos make the result a veto", function () {
      expect(
        sum([
          [10, true, "a", 0],
          [20, true, "b", 0],
          [30, false, "c", 0],
        ])
      ).to.deep.equal([[20, true, 0]]);
    });
    it("votes for different options are grouped", function () {
      expect(
        sum([
          [10, false, "a", 0],
          [100, false, "a", 1],
          [100, false, "b", 1],
          [100, false, "c", 1],
          [20, false, "b", 0],
          [30, false, "c", 0],
          [0, false, "a", 2],
          [100, false, "b", 2],
        ])
      ).to.deep.equal([
        [100, false, 1],
        [50, false, 2],
        [20, false, 0],
      ]);
      expect(
        sum([
          [10, false, "a", 0],
          [100, false, "a", 1],
          [100, true, "b", 1],
          [100, false, "c", 1],
          [20, false, "b", 0],
          [30, false, "c", 0],
          [0, false, "a", 2],
          [100, false, "b", 2],
        ])
      ).to.deep.equal([
        [50, false, 2],
        [20, false, 0],
        [100, true, 1],
      ]);
    });
  });
});
