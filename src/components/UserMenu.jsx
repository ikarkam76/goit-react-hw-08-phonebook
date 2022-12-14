import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/authOperation';

export const UserMenu = ({name, email}) => {
  const [anchorElUser, setAnchorElUser] = React.useState (null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

   const dispatch = useDispatch();
   const handleLogOut = () => {
     dispatch(logOut());
     setAnchorElUser(null);
   };


    return (
      <>
        <Box sx={{ flexGrow: 0 }}>🦊 Hello, {name}!</Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
              <Avatar alt={name} src="" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem>
              <Typography sx={{ color: 'black' }} textAlign="center">
                {email}
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to="contacts"
                >
                  Contacts
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleLogOut}>
              <Typography sx={{ color: 'black' }} textAlign="center">
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </>
    );
}