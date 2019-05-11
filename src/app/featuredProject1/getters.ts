import { IFeaturedProject1State } from './state';

export interface IFeaturedProject1Getters {
  incrementPending(state: IFeaturedProject1State): boolean;
  decrementPending(state: IFeaturedProject1State): boolean;
  count(state: IFeaturedProject1State): number;
}

export const FeaturedProject1Getters: IFeaturedProject1Getters = {
  incrementPending(state: IFeaturedProject1State): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IFeaturedProject1State): boolean {
    return state.decrementPending;
  },
  count(state: IFeaturedProject1State): number {
    return state.count;
  },
};
