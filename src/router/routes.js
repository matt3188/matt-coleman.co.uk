function importView(view) {
  // route level code-splitting
  // this generates a separate chunk (resume.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${view}.vue`);
}

export default [
  {
    path: '/',
    name: 'Home',
    component: importView('Home'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: importView('Resume'),
  },
  {
    path: '/about',
    name: 'About',
    component: importView('About'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: importView('Contact'),
  },
  {
    path: '*',
    component: importView('404'),
  },
];
