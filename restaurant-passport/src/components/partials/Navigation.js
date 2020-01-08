import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navigation = () => {
  return (
    <Menu>
      <Menu.Item as={Link} to='/' name='home' />
      <Menu.Item as={Link} to='/restaurants' name='restarants' />
      <Menu.Menu position='right'>
        <Menu.Item as={Link} to='/logout' name='logout' />
        <Menu.Item as={Link} to='/login' name='login' />
        <Menu.Item as={Link} to='/register' name='register' />
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;
