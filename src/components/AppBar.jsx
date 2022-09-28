import * as React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { UserMenu } from './UserMenu';
import { LoginModal } from './Modals/LogInModal';
import { useSelector } from 'react-redux';
import { authSelectors } from 'Redux/Auth/authSelectors';

export const ContactsAppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  const userMail = useSelector(authSelectors.getUserEmail);
  return (
    <>
      <AppBar sx={{ maxWidth: 1200, mr: 'auto', ml: 'auto' }} position="static">
        <Container maxWidth="x2">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              component="a"
              href="/goit-react-hw-08-phonebook/"
              sx={{
                mr: 5,
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              📒ContactBook
            </Typography>
            {isLoggedIn && <UserMenu name={userName} email={userMail} />}
          </Toolbar>
        </Container>
      </AppBar>
      {isLoggedIn ? (
        <Outlet />
      ) : (
        <Box sx={{ maxWidth: 1200, mr: 'auto', ml: 'auto' }}>
          <h4>
            Welcome to Contacts App! Please log in <LoginModal />
          </h4>
        </Box>
      )}
    </>
  );
};
