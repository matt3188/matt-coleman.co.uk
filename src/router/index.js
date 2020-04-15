import Vue from 'vue';
import VueRouter from 'vue-router';
// @ is an alias to /src
import Home from '@/views/Home.vue';
import Resume from '@/views/Resume.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
    // route level code-splitting
    // this generates a separate chunk (resume.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: 'resume' */ '../views/Resume.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
