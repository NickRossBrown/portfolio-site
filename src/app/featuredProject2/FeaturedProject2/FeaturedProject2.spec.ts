import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { ActionTree, GetterTree, Store } from 'vuex';
import FeaturedProject2 from './FeaturedProject2.vue';
import { FeaturedProject2Getters, IFeaturedProject2Getters } from '../getters';
import { FeaturedProject2DefaultState, IFeaturedProject2State } from '../state';
import { FeaturedProject2Actions, IFeaturedProject2Actions } from '../actions';
import { i18n } from '@/app/shared/plugins/i18n/i18n';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('FeaturedProject2.vue', () => {
  let store: Store<IFeaturedProject2State>;
  let getters: GetterTree<IFeaturedProject2State, IFeaturedProject2Getters>;
  let actions: ActionTree<IFeaturedProject2State, IFeaturedProject2Actions>;
  let state: IFeaturedProject2State;

  beforeEach(() => {
    getters = {
      ...FeaturedProject2Getters,
    };
    actions = {
      ...FeaturedProject2Actions,
      increment: jest.fn(),
      decrement: jest.fn(),
    };
    state = {
      ...FeaturedProject2DefaultState(),
    };

    store = new Vuex.Store({
      modules: {
        featuredProject2: {
          namespaced: true,
          getters,
          actions,
          state,
        },
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(FeaturedProject2, {
      store,
      localVue,
      i18n,
    });

    expect(wrapper.find('h1').text()).toBe('FeaturedProject2');
  });

  test('should increment and decrement', () => {
    const wrapper: any = mount<any>(FeaturedProject2, {
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

    FeaturedProject2.prefetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`featuredProject2/increment`);
  });
});
