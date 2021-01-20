import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Playground from '../components/Playground.vue';
import NotFound from '../components/NotFound.vue';
import PLAYGROUND_ROUTES from './playground.routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    alias: ['/home', '/xyz'],
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/playground',
    props: true,
    component: Playground,
    children: PLAYGROUND_ROUTES,
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
