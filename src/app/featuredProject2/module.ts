import { Module } from 'vuex';
import { IState } from '@/app/state';
import { FeaturedProject2DefaultState, IFeaturedProject2State } from './state';
import { FeaturedProject2Actions } from './actions';
import { FeaturedProject2Getters } from './getters';
import { FeaturedProject2Mutations } from './mutations';

export const FeaturedProject2Module: Module<IFeaturedProject2State, IState> = {
  namespaced: true,
  actions: {
    ...FeaturedProject2Actions,
  },
  getters: {
    ...FeaturedProject2Getters,
  },
  state: {
    ...FeaturedProject2DefaultState(),
  },
  mutations: {
    ...FeaturedProject2Mutations,
  },
};
