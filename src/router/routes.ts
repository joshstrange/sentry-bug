import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        name: 'Test',
        path: '',
        component: () => import('pages/Test.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
