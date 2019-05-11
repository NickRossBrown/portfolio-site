import { ActionContext } from 'vuex';
import { IFeaturedProject1State } from './state';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

export interface IFeaturedProject1Response {
  count: number;
}

export interface IFeaturedProject1Actions {
  increment(context: ActionContext<IFeaturedProject1State, IState>): Promise<any>;

  decrement(context: ActionContext<IFeaturedProject1State, IState>): Promise<any>;
}

export const FeaturedProject1Actions: IFeaturedProject1Actions = {
  async increment({ commit, state }: ActionContext<IFeaturedProject1State, IState>) {
    commit('SET_INCREMENT_PENDING', true);

    try {
      const res = await HttpService.put<IFeaturedProject1Response>('/counter/increment', { count: state.count });

      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    } catch (e) {
      commit('SET_INCREMENT_PENDING', false);
      throw new Error(e);
    }
  },
  async decrement({ commit, state }: ActionContext<IFeaturedProject1State, IState>) {
    commit('SET_DECREMENT_PENDING', true);

    try {
      const res = await HttpService.put<IFeaturedProject1Response>('/counter/decrement', { count: state.count });

      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    } catch (e) {
      commit('SET_DECREMENT_PENDING', false);
      throw new Error(e);
    }
  },
};
