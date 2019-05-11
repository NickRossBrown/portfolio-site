import { IFeaturedProject2State } from './state';

export interface IFeaturedProject2Mutations {
  SET_INCREMENT_PENDING(state: IFeaturedProject2State, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IFeaturedProject2State, pending: boolean): void;

  SET_COUNT(state: IFeaturedProject2State, count: number): void;
}

export const FeaturedProject2Mutations: IFeaturedProject2Mutations = {
  SET_INCREMENT_PENDING: (state: IFeaturedProject2State, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IFeaturedProject2State, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT: (state: IFeaturedProject2State, count: number) => {
    state.count = count;
  },
};
