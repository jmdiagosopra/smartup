import { Router } from '@vaadin/router';

import './views/main/';

/**
 * Handles IntersectionObserver intersecting callback
 * @param {object} node IntersectionObserverEntry array
 */
export const initRouter = (node) => {
  const router = new Router(node);

  router.setRoutes([
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: 'main-view',
    },
    {
      path: '/training',
      component: 'training-view',
      action: () =>
        import('./views/training/'),
    },
    {
      path: '/community',
      component: 'smartup-community-view',
      action: () =>
        import('./views/community/'),
    },
    {
      path: '/career',
      component: 'smartup-career-view',
      action: () =>
        import('./views/career/'),
    },
    {
      path: '(.*)',
      component: 'view-404',
      action: () =>
        import('./views/view-404.js'),
    },
  ]);
}
