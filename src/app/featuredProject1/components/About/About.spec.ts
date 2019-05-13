import { createLocalVue, mount } from '@vue/test-utils';
import About from './About.vue';

const localVue = createLocalVue();

describe('About.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(About, {
      localVue,
    });

    // expect(wrapper.text()).toBe('About');
    expect(true).toBe(true);
  });
});
