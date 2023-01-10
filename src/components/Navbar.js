import React from 'react';
import AppBar from '@mui/material/AppBar';
import {styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
background: #111111
`

const  Tabs= styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color:inherit;
  text-decoration:none;
`
export default function Navbar() {
  return (
    <Header position='static'>
        <Toolbar>
          <Tabs><img className='crudIcon' alt='Load' src='https://assets.materialup.com/uploads/008bcf7d-3295-4365-822e-50946fb6b7ec/preview.png'/></Tabs>
          <Tabs  to="/" >Home</Tabs>
                <Tabs to="/all" >All Users</Tabs>
                <Tabs to="/add" >Add User</Tabs>
        </Toolbar>
    </Header>
  )
}
