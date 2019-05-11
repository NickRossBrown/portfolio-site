import { Module } from 'vuex';
import { IState } from '@/app/state';
import { FeaturedProject1DefaultState, IFeaturedProject1State } from './state';
import { FeaturedProject1Actions } from './actions';
import { FeaturedProject1Getters } from './getters';
import { FeaturedProject1Mutations } from './mutations';

export const FeaturedProject1Module: Module<IFeaturedProject1State, IState> = {
  namespaced: true,
  actions: {
    ...FeaturedProject1Actions,
  },
  getters: {
    ...FeaturedProject1Getters,
  },
  state: {
    ...FeaturedProject1DefaultState(),
  },
  mutations: {
    ...FeaturedProject1Mutations,
  },
};
