export default [
  {
    path: "/",
    name: "home",
    component: () => import("../containers/home/index.vue"),
    props: { page: "home" }
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("../containers/resume/index.vue"),
    props: { page: "resume" }
  }
];
