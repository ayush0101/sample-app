import Playground from '../components/Playground.vue';

const PLAYGROUND_ROUTES = [
  {
    path: ':id(\\d+)',
    component: Playground,
    props: true,
  },
  {
    path: ':id(\\d+)/:city',
    component: Playground,
    props: true,
  },
];

export default PLAYGROUND_ROUTES;
