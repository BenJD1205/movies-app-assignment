import { PATHNAME } from '../configs/pathname';
import { FC, lazy } from 'react';
import { Error404 } from '../components';

export interface IRouteConfig {
  path: string;
  component: FC;
  title: string;
  role?: string[];
  disableHeader?: boolean;
  isBack?: boolean;
}

const Login = lazy(() => import('../pages/login'));
const Home = lazy(() => import('../pages/home'));
// const MovieDetail = lazy(() => import('pages/MovieDetail'));
// const MoviesRating = lazy(() => import('pages/MoviesRating'));
// const NowPlaying = lazy(() => import('pages/NowPlaying'));

export const pageRoutes: IRouteConfig[] = [
  {
    title: 'LOGIN',
    path: PATHNAME.LOGIN,
    component: Login,
  },
  {
    title: 'Home',
    path: PATHNAME.HOME,
    component: Home,
  },
  {
    title: 'Error404',
    path: PATHNAME.ERROR404,
    component: Error404,
  },
  //   {
  //     title: 'Movie Detail',
  //     path: PATHNAME.MOVIES_DETAIL(),
  //     component: MovieDetail,
  //     isBack: true,
  //   },
  //   {
  //     title: 'Movies Rating',
  //     path: PATHNAME.MOVIES_RATING,
  //     component: MoviesRating,
  //   },
  //   {
  //     title: 'Now playing',
  //     path: PATHNAME.NOW_PLAYING,
  //     component: NowPlaying,
  //   },
];
