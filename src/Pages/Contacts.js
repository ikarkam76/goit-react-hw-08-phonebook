import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useGetContactsByLoginQuery } from 'Redux/Slices/ContactsSlice';
import { AddContactModal } from '../components/Modals/AddContactModal';
import { ContactCard } from '../components/ContactCard';
import { Loader } from 'components/Loader';


export const Contacts = () => {
  const { data: contacts, isLoading } = useGetContactsByLoginQuery();

  const [filter, setFilter] = useState('');
  const handleChange = (event) => {
    setFilter(event.target.value);
  }
  // const contactsList = data.filter(contact =>contact.name.toLowerCase().includes(filter.toLowerCase()));

  if (isLoading) {
    return <Loader />;
  }
  if (!contacts) {
    return;
  } else {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
      <div>
        <AddContactModal />
        <p></p>
        <TextField
          id="outlined-basic"
          label="Filter"
          variant="outlined"
          onChange={handleChange}
        />
        <p></p>
        {filteredContacts[0]
          ? (filteredContacts.map(contact => (<ContactCard contact={contact} key={contact.id} />)))
          : <h4> Not found </h4> }
      </div>
    )
  }
}