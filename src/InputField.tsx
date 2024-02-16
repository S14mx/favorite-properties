import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class InputField extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Label>Filter by number of rooms</Form.Label>
          <Form.Select>
            <option value='All'>All</option>
            <option value='1'>1 Room</option>
            <option value='2'>2 Rooms</option>
            <option value='3'>3 Rooms</option>
            <option value='4'>4 Rooms</option>
          </Form.Select>
        </Form>
      </Container>
    );
  }
}

export default InputField;