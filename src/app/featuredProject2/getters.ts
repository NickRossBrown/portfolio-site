import { IFeaturedProject2State } from './state';

export interface IFeaturedProject2Getters {
  incrementPending(state: IFeaturedProject2State): boolean;
  decrementPending(state: IFeaturedProject2State): boolean;
  count(state: IFeaturedProject2State): number;
}

export const FeaturedProject2Getters: IFeaturedProject2Getters = {
  incrementPending(state: IFeaturedProject2State): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IFeaturedProject2State): boolean {
    return state.decrementPending;
  },
  count(state: IFeaturedProject2State): number {
    return state.count;
  },
};
