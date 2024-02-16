import React, { useState, ChangeEvent } from 'react';
import objectData from './data.json';
import Container from 'react-bootstrap/Container';
import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import InputField from './InputField';

interface Beast {
  image_url: string;
  title: string;
  description: string;
  keyword: string;
  rooms: number;
}

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [filteredObjs, setFilteredObjs] = useState<Beast[]>(objectData);

  const hideModal = (): void => {
    setShow(false);
  };

  const showModal = (beastIdx: number): void => {
    setShow(true);
    setSelectedIndex(beastIdx);
  };

  const filterBeasts = (event: ChangeEvent<HTMLSelectElement>): void => {
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
      <Header title='Horned Animals' />
      <InputField filterBeasts={filterBeasts}/>
      <Main objData={filteredObjs} showModal={showModal} />
      <Footer title='Author: Sergii Otryshko' />
      <SelectedBeast objData={objectData[selectedIndex]} show={show} hide={hideModal} />
    </Container>
  );
};

export default App;
