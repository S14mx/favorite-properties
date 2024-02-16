import React, { useState, ChangeEvent } from 'react';
import objectData from './data.json';
import Container from 'react-bootstrap/Container';
import './App.css';
import Main from './Main.tsx';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import SelectedProperty from './SelectedProperty.tsx';
import InputField from './InputField.tsx';

export interface IProperty {
  imageUrl: string;
  title: string;
  description: string;
  rooms: number;
}

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [filteredObjs, setFilteredObjs] = useState<IProperty[]>(objectData);

  const hideModal = (): void => {
    setShow(false);
  };

  const showModal = (propertyIdx: number): void => {
    setShow(true);
    setSelectedIndex(propertyIdx);
  };

  const filterProperties = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selection = parseInt(event.target.value);
    let filteredObjs;
    if (selection) {
      filteredObjs = objectData.filter(({rooms}) => rooms === selection);
      setFilteredObjs(filteredObjs);
    } else {
      setFilteredObjs(objectData);
    }
  };

  return (
    <Container fluid className="App">
      <Header title='Favorite Properties' />
      <InputField filterProperties={filterProperties}/>
      <div className="input-field-spacing"></div>
      <Main objData={filteredObjs} showModal={showModal} />
      <Footer title='Sergii Otryshko 2024' />
      <SelectedProperty objData={objectData[selectedIndex]} show={show} hide={hideModal} />
    </Container>
  );
};

export default App;
