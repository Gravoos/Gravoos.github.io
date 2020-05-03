import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import skladowe from '@/components/skladowe';
import opis from '@/components/opis';
import Film from '@/components/Film';
import baza from '@/components/baza';
import viewfilm from '@/components/viewfilm';
import login from '@/components/login';
import register from '@/components/register';
import bazaFimow from '@/components/bazaFimow';
import nowyFilm from '@/components/nowyFilm';
import firebase from 'firebase';



Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/skladowe',
      name: 'skladowe',
      component: skladowe,
    },
    {
      path: '/opis',
      name: 'opis',
      component: opis,
    },

    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/film',
      name: 'Film',
      component: Film,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/gps',
      name: 'viewfilm',
      component: viewfilm,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/baza_uzytkownikow',
      name: 'baza',
      component: baza,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/nowyFilm',
      name: 'nowyFilm',
      component: nowyFilm,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:film_id',
      name: 'bazaFimow',
      component: bazaFimow,
      meta: {
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!firebase.auth().currentUser) {

      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {

      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {

    if (firebase.auth().currentUser) {

      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {

      next();
    }
  } else {

    next();
  }
});

export default router;

