import {MutationResolvers} from '../generated/graphql';
import resultStore from '../../db/resultStore';

export const Mutation: MutationResolvers = {
  async addResult(_parent, args) {
    return resultStore.addResult(args.score);
  },
};
