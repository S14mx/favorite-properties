import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Property from './Property.tsx';
import {IProperty} from './App.tsx'
 


interface IMainProps {
  objData: IProperty[];
  showModal: (index: number) => void;
}


const Main: FC<IMainProps> = ({ objData, showModal }) => {
  return (
    <Container className='main'>
      <Row className='g-4' sm={2} md={3} lg={4}>
        {objData.map(({ title, description, image_url }, idx) => (
          <Property title={title} key={title} description={description} src={image_url} alt={description} showModal={showModal} propertyIdx={idx}/>
        ))}
      </Row>
    </Container>
  );
}

export default Main;