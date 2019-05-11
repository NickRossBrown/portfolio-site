import { FeaturedProject2Mutations } from './mutations';
import { FeaturedProject2DefaultState, IFeaturedProject2State } from './state';

describe('FeaturedProject2Mutations', () => {
  let testState: IFeaturedProject2State;

  beforeEach(() => {
    testState = FeaturedProject2DefaultState();
  });

  test('it should set the count', () => {
    FeaturedProject2Mutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    FeaturedProject2Mutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    FeaturedProject2Mutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });
});
