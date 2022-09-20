import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../1-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

export interface IRoutes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayaout = lazy(() => import(/* webpackChunkName: "LazyLayaout" */ '../1-lazyload/layaout/LazyLayout'))
// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../1-lazyload/pages/LazyPage1'))
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../1-lazyload/pages/LazyPage2'))
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../1-lazyload/pages/LazyPage3'))

export const routes: IRoutes[] = [
  {
    to: '/lazyload/',
    path: '/Lazyload/*',
    Component: LazyLayaout,
    name: 'Lazy Load - Layaout'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No lazy'
  },
  // {
  //   to: '/lazy2',
  //   path: 'lazy2',
  //   Component: Lazy2,
  //   name: 'Lazy-2'
  // },
  // {
  //   to: '/lazy3',
  //   path: 'lazy3',
  //   Component: Lazy3,
  //   name: 'Lazy-3'
  // }
]