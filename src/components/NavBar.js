import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => (
  <Menu>
    <Link to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <HashLink to='/about'>
      <Menu.Item>
        About Me
      </Menu.Item>
    </HashLink>
    <Link to='/projects'>
      <Menu.Item>
        Projects
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