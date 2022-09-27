import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { useDeleteContactByIdMutation } from 'Redux/Slices/ContactsSlice';

export const ContactCard = ({ contact }) => {
    const [deleteContact] = useDeleteContactByIdMutation();
    return ( 
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          📖: {contact.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          📞: {contact.number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" color="primary">
          Edit
        </Button>
        <Button
          variant="outlined"
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
