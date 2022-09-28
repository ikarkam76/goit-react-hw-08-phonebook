import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/authOperation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const RegistrationModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.target.type) {
      case 'text':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    setOpen(false);
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={handleOpen}>Registration</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <TextField
              id="outlined-basic"
              label="Login"
              type="text"
              variant="outlined"
              onChange={handleChange}
            />
            <p></p>
            <TextField
              id="outlined-email-input"
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
            <Button onClick={handleSubmit}>Register</Button>
          </Box>
        </Modal>
      </React.Fragment>
    </div>
  );
};
