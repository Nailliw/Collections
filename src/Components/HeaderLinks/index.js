import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderLinks = () => {
  const [current, setcurrent] = useState('mail');
  const handleClick = (e) => {
    console.log('click ', e);
    setcurrent(e.key);
  };
  return (
    <Menu onClick={() => handleClick} selectedKeys={current} mode="horizontal">
      <Menu.Item key="rickandmorty">
        <Link to="/">Rick and Morty</Link>
      </Menu.Item>
      <Menu.Item key="pokemon">
        <Link to="/pokemon">Pokemon</Link>
      </Menu.Item>
      <Menu.Item key="starwars">
        <Link to="/starwars">Star Wars</Link>
      </Menu.Item>
      <Menu.Item key="favorites">
        <Link to="/favorite">Favorites</Link>
      </Menu.Item>
    </Menu>
  );
};

export default HeaderLinks;
