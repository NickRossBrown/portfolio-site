import { createLocalVue, mount } from '@vue/test-utils';
import HomeFeatured from './HomeFeatured.vue';

const localVue = createLocalVue();

describe('HomeFeatured.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(HomeFeatured, {
      localVue,
    });

    expect(wrapper.text()).toBe('HomeFeatured');
  });
});
