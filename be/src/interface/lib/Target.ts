import {Target, TrigFunc} from '../graphql/generated/graphql';

const rand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const CreateTarget = (): Target => {
  const Angle: number = rand(5, 60);
  const trigFunc: TrigFunc = {
    sin: 'sin',
    cos: 'cos',
    tan: 'tan',
    calcsin: Math.sin(Angle),
    calcCos: Math.cos(Angle),
    calcTan: Math.tan(Angle),
  };
  const target: Target = {
    angle: Angle,
    trigFunc: trigFunc,
  };
  return target; // 返す
};
