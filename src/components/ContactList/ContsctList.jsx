import { List, Item, Contact, ContactName, Button } from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from './../../Redux/contacts/operations';
import {
  selectIsLoading,
  selectActiveContacts,
} from 'Redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = useSelector(selectActiveContacts);
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Contact>
              <ContactName>{name}:</ContactName>
              <span>{number}</span>
            </Contact>

            <Button onClick={() => deleteContactById(id)} disabled={isLoading}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
