import { useGetContactsByLoginQuery } from 'Redux/Slices/ContactsSlice';
import { AddContactModal } from '../components/Modals/AddContactModal';
import { ContactCard } from '../components/ContactCard';

export const Contacts = () => {
  const { data, isLoading } = useGetContactsByLoginQuery();
  if (isLoading) {
    return (<p>loading...</p>);
  } else {
    return (
      <div>
        <AddContactModal />
          {data.map(contact => (
              <ContactCard contact={contact} key={contact.id} />
          ))}
      </div>
    );
  };
}
