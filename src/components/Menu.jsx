import { Link, Navigate, NavLink, Router, Route, Routes, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useState } from 'react';

const getClassNameNavLink = ({ isActive, isPending }) => `menu__item ${isPending ? "menu__item-pending" : isActive ? "menu__item-active" : ""}`;

export default function Menu() {

  const [menu, setMenu] = useState([
    {
      link: "/",
      title: "Главная",
    },
    {
      link: "/drift",
      title: "Дрифт-такси",
    },
    {
      link: "/timeattack",
      title: "Time Attack",
    },
    {
      link: "/forza",
      title: "Forza Karting",
    }
  ]);

  return (
    <nav className="menu">
      {menu.map(menuItem => <NavLink className={getClassNameNavLink} key={menuItem.link} to={menuItem.link}>{menuItem.title}</NavLink>)}
    </nav>
  );
}