import { Link } from 'react-router-dom';
import { useGetContactsByLoginQuery } from 'Redux/Slices/ContactsSlice';
import Button from '@mui/material/Button';
import { AddContactModal } from './AddContactModal';


export const Contacts = () => {
  const { data, isLoading } = useGetContactsByLoginQuery();
  console.log(data);
  if (isLoading) {
    return (<p>loading...</p>);
  } else {
    return (
      <div>
        <Button variant="outlined">
          <Link to="/">Go back</Link>
        </Button>
        <AddContactModal />
        <ul>
          {data.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}
                {contact.number}
              </p>
              
            </li>
          ))}
        </ul>
      </div>
    );
  };
}
