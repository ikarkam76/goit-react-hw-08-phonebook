import { Link } from 'react-router-dom';
import { useGetContactsByLoginQuery } from 'Redux/Slices/ContactsSlice';
import Button from '@mui/material/Button';
import { AddContactModal } from './AddContactModal';
import { ContactCard } from './ContactCard';

export const Contacts = () => {
  const { data, isLoading } = useGetContactsByLoginQuery();
  if (isLoading) {
    return (<p>loading...</p>);
  } else {
    return (
      <div>
        <Button variant="outlined">
          <Link to="/">Go back</Link>
        </Button>
        <AddContactModal />
          {data.map(contact => (
              <ContactCard contact={contact} key={contact.id} />
          ))}
      </div>
    );
  };
}
