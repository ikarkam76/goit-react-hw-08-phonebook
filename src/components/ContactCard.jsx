import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDeleteContactByIdMutation } from 'Redux/Contacts/ContactsApi';
import { EditContactModal } from './Modals/EditContactModal';

export const ContactCard = ({ contact }) => {
    const [deleteContact] = useDeleteContactByIdMutation();
    return (
      <Card sx={{ maxWidth: 1200, mr: 'auto', ml: 'auto', mb: 1 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              📖: {contact.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              📞: {contact.number}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <EditContactModal contact={contact} />
          <Button
            sx={{ ml: 1 }}
            variant="contained"
            size="small"
            color="primary"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    );
}
