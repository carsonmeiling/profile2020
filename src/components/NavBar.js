import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <Menu>
    <NavLink to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to='/about'>
      <Menu.Item>
        About Me
      </Menu.Item>
    </NavLink>
    <NavLink to='/projects'>
      <Menu.Item>
        Projects
      </Menu.Item>
    </NavLink>
    <NavLink to='/contact'>
      <Menu.Item>
        Contact
      </Menu.Item>
    </NavLink>
  </Menu>


)

export default NavBar;