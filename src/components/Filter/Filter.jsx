import { Field, Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'Redux/contacts/phonebookSlice';
import { useState } from 'react';
export const Filter = () => {
  const [filterValue, setFilterValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    setFilterValue(event.target.value);
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Field>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleChange}
        />
      </Label>
    </Field>
  );
};
