import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='left'>
          <div className='navlogo'>
            <img src='https://blog.logomyway.com/wp-content/uploads/2017/02/amazon-logo-1.jpg' alt=''></img>
          </div>
          <div className='nav_searchbaar'>
            <input type='text' name='' id=''></input>
            <div className='search_icon'>
              <SearchIcon id='search' />
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='nav_btn'>
            <a href=''>signin</a>
          </div>
          <div className='cart_btn'>
          <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon id='icon'/>
          </Badge>
          <p>Cart</p>
            </div>
            <Avatar className='avtar'/>        
          </div>
      </nav>
    </header>
  )
}

export default Navbar