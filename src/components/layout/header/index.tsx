import React from 'react'
import './header.style.scss';
import { PATHNAME } from '../../../configs/pathname';

type HeaderProps = {
  hasSearch?: boolean;
};

const navLinks = [
  {
    name: 'Top Rating',
    path: PATHNAME.MOVIES_RATING,
  },
  {
    name: 'Now playing',
    path: PATHNAME.NOW_PLAYING,
  },
];

const Header: React.FC<HeaderProps> = ({hasSearch}) => {
  return (
    <div>Header</div>
  )
}

export default Header