import {QueryResolvers} from '../generated/graphql';
import greet from '../../db/store';

export const Query: QueryResolvers = {
  greet: () => greet.getGreet(),
};
