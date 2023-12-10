import { useIsOdd } from '../src';

describe('useIsOdd', () => {
  it('should return the odd number', () => {
    expect(useIsOdd(3)).toBe(
      'Your value of 3 has returned back true for being odd'
    );
  });
  it('should return the even number', () => {
    expect(useIsOdd(4)).toBe(
      'Your value of 4 has returned back false for being odd'
    );
  });
});
