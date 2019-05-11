import { ActionContext } from 'vuex';
import { IFeaturedProject2State } from './state';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

export interface IFeaturedProject2Response {
  count: number;
}

export interface IFeaturedProject2Actions {
  increment(context: ActionContext<IFeaturedProject2State, IState>): Promise<any>;

  decrement(context: ActionContext<IFeaturedProject2State, IState>): Promise<any>;
}

export const FeaturedProject2Actions: IFeaturedProject2Actions = {
  async increment({ commit, state }: ActionContext<IFeaturedProject2State, IState>) {
    commit('SET_INCREMENT_PENDING', true);

    try {
      const res = await HttpService.put<IFeaturedProject2Response>('/counter/increment', { count: state.count });

      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    } catch (e) {
      commit('SET_INCREMENT_PENDING', false);
      throw new Error(e);
    }
  },
  async decrement({ commit, state }: ActionContext<IFeaturedProject2State, IState>) {
    commit('SET_DECREMENT_PENDING', true);

    try {
      const res = await HttpService.put<IFeaturedProject2Response>('/counter/decrement', { count: state.count });

      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    } catch (e) {
      commit('SET_DECREMENT_PENDING', false);
      throw new Error(e);
    }
  },
};
