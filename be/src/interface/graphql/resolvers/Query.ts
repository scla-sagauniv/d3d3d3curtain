import {QueryResolvers} from '../generated/graphql';
import greet from '../../db/greetStore';
import result from '../../db/resultStore';

export const Query: QueryResolvers = {
  greet: () => greet.getGreet(),
  results: () => result.getAllresult(),
};
