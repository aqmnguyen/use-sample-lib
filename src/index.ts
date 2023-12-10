import { isOddNumber } from '@mn-test/sample-mime-lib';

export const useIsOdd = (num: number | string) => {
  return `Your value of ${num} has returned back ${isOddNumber(
    num
  )} for being odd`;
};
