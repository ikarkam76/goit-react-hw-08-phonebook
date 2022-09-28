import * as React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { LoginPage } from 'Pages/Login';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const LoginModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{ ...style, width: 300 }}
        variant="contained"
        onClick={handleOpen}
      >
        Log In / Register
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <LoginPage />
      </Modal>
    </div>
  );
}
