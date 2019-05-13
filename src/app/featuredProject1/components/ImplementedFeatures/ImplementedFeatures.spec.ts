import { createLocalVue, mount } from '@vue/test-utils';
import ImplementedFeatures from './ImplementedFeatures.vue';

const localVue = createLocalVue();

describe('ImplementedFeatures.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(ImplementedFeatures, {
      localVue,
    });

    expect(wrapper.text()).toBe('');
  });
});
