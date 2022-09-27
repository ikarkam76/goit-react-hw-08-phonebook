import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

import { useEditContactByIdMutation } from 'Redux/Slices/ContactsSlice';

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

export const EditContactModal = ({ contact }) => {
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userName, setUserName] = React.useState(contact.name);
  const [userNumber, setUserNumber] = React.useState(contact.number);
  const handleChangeName = event => setUserName(event.target.value);
  const handleChangeNumber = event => setUserNumber(event.target.value);

    const [changeContact] = useEditContactByIdMutation();
    const handleSubmit = () => {
        const editContact = {
            name: userName,
            number: userNumber,
            contactId: contact.id,
        };
        console.log( editContact);
        changeContact( editContact);
        handleClose();
    };

  return (
    <div>
      <Button variant="outlined" size="small"  onClick={handleOpen}>
        Edit
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
            value= {userName}
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
            value= {userNumber}
            variant="outlined"
            onChange={handleChangeNumber}
          />
          <p></p>
          <Button variant="outlined" onClick={handleSubmit}>
            Edit contact
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
