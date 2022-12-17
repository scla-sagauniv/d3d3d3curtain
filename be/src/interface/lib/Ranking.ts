import {Result} from '../graphql/generated/graphql';
import resultStore from '../db/resultStore';

export function getRanking() {
  const resultCopy: Result[] = [...resultStore.getAllresult()].sort(
    (a, b) => a.score - b.score
  );
  const rank: Result[] = [];
  for (let i = 0; i < 3; i++) {
    rank.push(resultCopy[i]);
    console.log(rank);
  }
  return rank;
}
