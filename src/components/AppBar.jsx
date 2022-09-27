import * as React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { UserMenu } from './UserMenu';
import { LoginModal } from './LogInModal';
import { useSelector } from 'react-redux';
import { authSelectors } from 'Redux/auth/authSelectors';

export const ContactsAppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const userName = useSelector(authSelectors.getUserName);
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/goit-react-hw-08-phonebook/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ContactBook
            </Typography>
            {isLoggedIn ? <UserMenu name={userName} /> : <LoginModal />}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
