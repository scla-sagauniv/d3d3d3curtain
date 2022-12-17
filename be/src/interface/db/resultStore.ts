import {Result} from '../graphql/generated/graphql';

const results: Result[] = [
  {
    score: 0,
  },
];

function addResult(score: number): Result {
  const result: Result = {
    score: score,
  };
  results.push(result);
  return results[results.length - 1];
}
function getAllresult(): Result[] {
  return results;
}

export default {
  addResult,
  getAllresult,
};
