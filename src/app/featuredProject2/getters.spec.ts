import { FeaturedProject2Getters } from './getters';
import { FeaturedProject2DefaultState, IFeaturedProject2State } from './state';

describe('FeaturedProject2Getters', () => {
  let testState: IFeaturedProject2State;

  beforeEach(() => {
    testState = FeaturedProject2DefaultState();
  });

  test('it should get the count', () => {
    expect(FeaturedProject2Getters.count(testState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(FeaturedProject2Getters.incrementPending(testState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(FeaturedProject2Getters.decrementPending(testState)).toBe(false);
  });
});
