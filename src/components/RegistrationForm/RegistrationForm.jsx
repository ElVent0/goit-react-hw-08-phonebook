import {
  Form,
  Label,
  Input,
  AddButton,
} from './../ContactForm/ContactForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './../../Redux/auth/authOperations';
export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    formReset();
  };
  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'email':
        setEmail(event.currentTarget.value);
        break;
      case 'password':
        setPassword(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name input
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </Label>
      <Label>
        Email input
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password input
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>

      <AddButton type="submit">Sign In</AddButton>
    </Form>
  );
};
