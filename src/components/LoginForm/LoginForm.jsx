import {
  Form,
  Input,
  Label,
  AddButton,
} from './../ContactForm/ContactForm.styled';
import { useState } from 'react';
import { logIn } from 'Redux/auth/authOperations';
import { useDispatch } from 'react-redux';
export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email,
        password,
      })
    );
    formReset();
  };
  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
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
        Email address
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>

      <AddButton type="submit">Log In</AddButton>
    </Form>
  );
};
