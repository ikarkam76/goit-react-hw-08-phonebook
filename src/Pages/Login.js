import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/Auth/authOperation';
import { RegistrationModal } from 'components/Modals/RegisterModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 14,
  p: 4,
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = event => {
    setUser(prev => ({ ...prev, [event.target.type]: event.target.value}));
  };

  const handleSubmit = event => {
    const { email, password } = user;
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setUser({ email: '', password: '' });
  };

  return (
    <div>
      <Box sx={style}>
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          onChange={handleChange}
        />
        <p></p>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
          onChange={handleChange}
        />
        <p></p>
        <Button variant="outlined" onClick={handleSubmit}>
          Log In
        </Button>
        <RegistrationModal />
      </Box>
    </div>
  );
};
