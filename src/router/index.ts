import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Cookies from 'js-cookie'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach(async (to, from, next) => {
  let token: string | undefined;
  NProgress.start();
  if (to.matched.some(r => r.meta.auth)) {
    token = Cookies.get('wisdom_of_class_token');
    if (token) {
      next();
    } else {
      next({
        name:'login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next();
  }
});

router.afterEach(to => {
  NProgress.done();
});

export default router
