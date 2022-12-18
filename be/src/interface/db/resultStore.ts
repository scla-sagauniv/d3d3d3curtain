import {Result, ResultInput} from '../graphql/generated/graphql';

const results: Result[] = [
  {
    score: 1000,
    target: {
      angle: 0,
    },
    user: {
      name: 'unknown',
    },
  },
];

function addResult(resultinput: ResultInput): Result {
  const result: Result = {
    score: resultinput.score,
    target: resultinput.target,
    user: resultinput.user,
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
