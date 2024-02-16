import React, { FC } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

interface IInputFieldProps {
  filterProperties: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputField: FC<IInputFieldProps> = ({ filterProperties }) => {
  return (
    <Container>
      <Form>
        <Form.Label>Filter by number of rooms</Form.Label>
        <Form.Select onChange={filterProperties}>
          <option value='All'>All</option>
          <option value='1'>1 room</option>
          <option value='2'>2 rooms</option>
          <option value='3'>3 rooms</option>
          <option value='4'>4 rooms</option>
        </Form.Select>
      </Form>
    </Container>
  );
}

export default InputField;