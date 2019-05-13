import { RouteConfig } from 'vue-router/types/router';

export const FeaturedProject1Routes: RouteConfig[] = [
  {
    path: '/DivorceMended',
    component: () =>
      import(/* webpackChunkName: "featuredProject1" */ './FeaturedProject1/FeaturedProject1.vue').then(
        (m: any) => m.default,
      ),
  },
];
