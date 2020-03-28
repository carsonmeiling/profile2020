import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Menu>
    <Link to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to='/about'>
      <Menu.Item>
        About Me
      </Menu.Item>
    </Link>
    <Link to='/contact'>
      <Menu.Item>
        Contact
      </Menu.Item>
    </Link>
  </Menu>


)

export default NavBar;