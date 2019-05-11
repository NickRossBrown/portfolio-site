import { RouteConfig } from 'vue-router/types/router';

export const FeaturedProject2Routes: RouteConfig[] = [
  {
    path: '/featuredProject2',
    component: () =>
      import(/* webpackChunkName: "featuredProject2" */ './FeaturedProject2/FeaturedProject2.vue').then(
        (m: any) => m.default,
      ),
  },
];
