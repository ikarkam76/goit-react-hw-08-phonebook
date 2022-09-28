import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { Loader } from 'components/Loader';

import { useCreateContactMutation } from 'Redux/Slices/ContactsSlice';

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

export const AddContactModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');
    const handleChangeName = (event) => setName(event.target.value);
    const handleChangeNumber = event => setNumber(event.target.value);

    const [addContact, isLoading] = useCreateContactMutation();
    const handleSubmit = () => {
        const newContact = {name, number}
        addContact(newContact);
      handleClose();
    }

  if (!isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <Button sx={{mt:1}} variant="contained" onClick={handleOpen}>
        Add new contact
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-basic"
            label="Contact name"
            variant="outlined"
            onChange={handleChangeName}
          />
          <p></p>
          <TextField
            inputProps={{
              inputMode: 'tel',
              pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
            }}
            id="outlined-basic"
            label="Contact phone"
            variant="outlined"
            onChange={handleChangeNumber}
          />
          <p></p>
          <Button variant="outlined" onClick={handleSubmit}>
            Add contact
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
