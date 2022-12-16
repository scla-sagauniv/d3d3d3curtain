import greet from '../../db/store';
import {MutationResolvers} from '../generated/graphql';

export const Mutation: MutationResolvers = {
  async changeName(_parent, args) {
    return greet.updateName(args.name);
  },
};
