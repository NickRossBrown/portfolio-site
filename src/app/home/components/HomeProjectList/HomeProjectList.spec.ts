import { createLocalVue, mount } from '@vue/test-utils';
import HomeProjectList from './HomeProjectList.vue';

const localVue = createLocalVue();

describe('HomeProjectList.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(HomeProjectList, {
      localVue,
    });

    expect(true).toBe(true);
  });
});
