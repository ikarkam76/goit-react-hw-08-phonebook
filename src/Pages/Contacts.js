import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useGetContactsByLoginQuery } from 'Redux/Slices/ContactsSlice';
import { AddContactModal } from '../components/Modals/AddContactModal';
import { ContactCard } from '../components/ContactCard';
import { Loader } from 'components/Loader';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const Contacts = () => {
  const { data: contacts, isLoading } = useGetContactsByLoginQuery();

  const [filter, setFilter] = useState('');
  const handleChange = (event) => {
    setFilter(event.target.value);
  }
  if (isLoading) {
    return (
      <Box sx={style}>
        <Loader />
      </Box>
    );
  }
  if (!contacts) {
    return;
  } else {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
      <Box sx={{ maxWidth: 1200, mr: 'auto', ml: 'auto' }}>
        <AddContactModal />
        <p></p>
        <TextField
          id="filled-basic"
          label="Filter"
          variant="filled"
          onChange={handleChange}
        />
        <p></p>
        {filteredContacts[0] ? (
          filteredContacts.map(contact => (
            <ContactCard contact={contact} key={contact.id} />
          ))
        ) : (
          <h4> Not found </h4>
        )}
      </Box>
    );
  }
}