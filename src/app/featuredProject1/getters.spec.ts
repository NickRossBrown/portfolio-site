import { FeaturedProject1Getters } from './getters';
import { FeaturedProject1DefaultState, IFeaturedProject1State } from './state';

describe('FeaturedProject1Getters', () => {
  let testState: IFeaturedProject1State;

  beforeEach(() => {
    testState = FeaturedProject1DefaultState();
  });

  test('it should get the count', () => {
    expect(FeaturedProject1Getters.count(testState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(FeaturedProject1Getters.incrementPending(testState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(FeaturedProject1Getters.decrementPending(testState)).toBe(false);
  });
});
