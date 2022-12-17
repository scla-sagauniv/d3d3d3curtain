import {Greet} from '../graphql/generated/graphql';

const greet: Greet = {
  msg: 'hello',
  name: 'world',
};

function getGreet() {
  return greet;
}

function updateName(name: string) {
  greet.name = name;
  return greet;
}

export default {
  getGreet,
  updateName,
};
