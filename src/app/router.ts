import Vue from 'vue';
import VueRouter, { Route, RouteRecord } from 'vue-router';
import Meta from 'vue-meta';
import { AppRoutes } from './app/routes';
import { HomeRoutes } from './home/routes';
import { CounterRoutes } from './counter/routes';
import { FormRoutes } from './form/routes';
import { DashboardRoutes } from './dashboard/routes';
import { store } from '@/app/store';
import { FeaturedProject1Routes } from './featuredProject1/routes';
import { FeaturedProject2Routes } from './featuredProject2/routes';

Vue.use(VueRouter);
Vue.use(Meta);

export const router: VueRouter = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    ...AppRoutes,
    ...HomeRoutes,
    ...CounterRoutes,
    ...FormRoutes,
    ...DashboardRoutes,
    ...FeaturedProject1Routes,
    ...FeaturedProject2Routes,
  ],
  scrollBehavior(to: Route, from: Route, savedPosition: { x: number; y: number }) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return savedPosition || { x: 0, y: 0 };
  },
});

// example guard
// TODO remove or adjust in production code
router.beforeEach((to: Route, from: Route, next: any) => {
  if (to.matched.some((record: RouteRecord) => record.meta.requiresAuth)) {
    const isAuthenticated = store.getters['auth/isAuthenticated'];

    if (!isAuthenticated) {
      next({ path: '/', query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});
