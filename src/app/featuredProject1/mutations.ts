import { IFeaturedProject1State } from './state';

export interface IFeaturedProject1Mutations {
  SET_INCREMENT_PENDING(state: IFeaturedProject1State, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IFeaturedProject1State, pending: boolean): void;

  SET_COUNT(state: IFeaturedProject1State, count: number): void;
}

export const FeaturedProject1Mutations: IFeaturedProject1Mutations = {
  SET_INCREMENT_PENDING: (state: IFeaturedProject1State, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IFeaturedProject1State, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT: (state: IFeaturedProject1State, count: number) => {
    state.count = count;
  },
};
