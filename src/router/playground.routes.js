import Playground from '../components/Playground.vue';

const PLAYGROUND_ROUTES = [
  {
    path: ':id',
    component: Playground,
    props: true,
  },
  {
    path: ':id/:city',
    component: Playground,
    props: true,
  },
];

export default PLAYGROUND_ROUTES;
