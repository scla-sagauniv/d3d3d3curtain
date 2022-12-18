import {TargetResolvers} from '../generated/graphql';

export const Target: TargetResolvers = {
  angle: target => target.angle,
  trigFunc: target => target.trigFunc || null,
};
