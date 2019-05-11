import { FeaturedProject1Mutations } from './mutations';
import { FeaturedProject1DefaultState, IFeaturedProject1State } from './state';

describe('FeaturedProject1Mutations', () => {
  let testState: IFeaturedProject1State;

  beforeEach(() => {
    testState = FeaturedProject1DefaultState();
  });

  test('it should set the count', () => {
    FeaturedProject1Mutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    FeaturedProject1Mutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    FeaturedProject1Mutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });
});
