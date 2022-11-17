import React, { useContext } from 'react';
import { AppBar, Badge, Box, Typography, IconButton } from '@mui/material';
import { AddShoppingCart as AddShoppingCartIcon } from '@mui/icons-material';

import { ProductContext } from '../Root/Root';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../resources/logo.png'
import Breadcrumbs from './components/Breadcrumbs';

const Header = () => {
  const { count } = useContext(ProductContext);

  return (
    <>
      <header className="header">
        <div className="title">
          <Link to={'/list'}>
            <img className='logo-shop' src={logo} height="50" />
            <div className='title-shop'>mart Shop</div>
          </Link>
        </div>
        <div className="shopping-cart">
          <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={count} color="error">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </header>
      <Breadcrumbs/>
    </>

  );
};

export default Header;
