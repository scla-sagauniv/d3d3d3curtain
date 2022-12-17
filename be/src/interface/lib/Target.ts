import {Target} from '../graphql/generated/graphql';
const rand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const CreateTarget = (): Target => {
  const target: Target = {
    angle: rand(5, 60),
  };
  // 生成した乱数をそれぞれ変換してTrigFuncとcalcResに渡す処理
  return target; // 返す
};
