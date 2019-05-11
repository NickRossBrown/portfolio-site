import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { ActionTree, GetterTree, Store } from 'vuex';
import FeaturedProject1 from './FeaturedProject1.vue';
import { FeaturedProject1Getters, IFeaturedProject1Getters } from '../getters';
import { FeaturedProject1DefaultState, IFeaturedProject1State } from '../state';
import { FeaturedProject1Actions, IFeaturedProject1Actions } from '../actions';
import { i18n } from '@/app/shared/plugins/i18n/i18n';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('FeaturedProject1.vue', () => {
  let store: Store<IFeaturedProject1State>;
  let getters: GetterTree<IFeaturedProject1State, IFeaturedProject1Getters>;
  let actions: ActionTree<IFeaturedProject1State, IFeaturedProject1Actions>;
  let state: IFeaturedProject1State;

  beforeEach(() => {
    getters = {
      ...FeaturedProject1Getters,
    };
    actions = {
      ...FeaturedProject1Actions,
      increment: jest.fn(),
      decrement: jest.fn(),
    };
    state = {
      ...FeaturedProject1DefaultState(),
    };

    store = new Vuex.Store({
      modules: {
        featuredProject1: {
          namespaced: true,
          getters,
          actions,
          state,
        },
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(FeaturedProject1, {
      store,
      localVue,
      i18n,
    });

    expect(wrapper.find('h1').text()).toBe('FeaturedProject1');
  });

  test('should increment and decrement', () => {
    const wrapper: any = mount<any>(FeaturedProject1, {
      store,
      localVue,
      i18n,
    });

    wrapper.vm.increment();
    expect(actions.increment).toHaveBeenCalled();

    wrapper.vm.decrement();
    expect(actions.decrement).toHaveBeenCalled();
  });

  test('dispatches action on the server', () => {
    store.dispatch = jest.fn();

    FeaturedProject1.prefetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`featuredProject1/increment`);
  });
});
