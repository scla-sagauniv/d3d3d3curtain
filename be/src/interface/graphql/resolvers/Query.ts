import {QueryResolvers} from '../generated/graphql';
import greet from '../../db/store';
import {CreateTarget} from '../../lib/Target';

export const Query: QueryResolvers = {
  greet: () => greet.getGreet(),
  target: () => CreateTarget(),
};
