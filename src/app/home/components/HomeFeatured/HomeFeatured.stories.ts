import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import HomeFeatured from './HomeFeatured.vue';

const story = storiesOf('HomeFeatured', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { HomeFeatured },
    template: `<homeFeatured>HomeFeatured</homeFeatured>`,
  })),
);
