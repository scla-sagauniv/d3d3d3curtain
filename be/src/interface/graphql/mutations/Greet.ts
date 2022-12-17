import greet from '../../db/greetStore';
import {MutationResolvers} from '../generated/graphql';

export const Mutation: MutationResolvers = {
  async changeName(_parent, args) {
    return greet.updateName(args.name);
  },
};
