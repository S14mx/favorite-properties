import React, { ChangeEvent, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Footer from './Footer.tsx';
import Header from './Header.tsx';
import InputField from './InputField.tsx';
import Main from './Main.tsx';
import SelectedProperty from './SelectedProperty.tsx';
import objectData from './data.json';
import { getDescriptionFromOpenAI } from './getDescriptionFromOpenAI.ts';
import Spinner from 'react-bootstrap/Spinner';

export interface IProperty {
  imageUrl: string;
  title: string;
  description: string;
  rooms: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<IProperty[]>([]);
  const [filteredObjs, setFilteredObjs] = useState<IProperty[]>([]);
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const enrichData = async () => {
      try {
        // Original data didn't have property descriptions so we are using OpenAI API to generate them
        const enrichedDataPromises: Promise<IProperty>[] = objectData.map(async (obj) => ({...obj, description: await getDescriptionFromOpenAI(obj)}))
        const enrichedData: IProperty[] = await Promise.all(enrichedDataPromises)
        setData(enrichedData)
        setFilteredObjs(enrichedData)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    enrichData();
  }, []);
  
  
  const showModal = (propertyIdx: number): void => {
    setIsModalShown(true);
    setSelectedIndex(propertyIdx);
  };

  const hideModal = (): void => {
    setIsModalShown(false);
  };

  // Filter by number of rooms functionality
  const filterProperties = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selection = parseInt(event.target.value);
    let filteredObjs: IProperty[];
    if (selection) {
      filteredObjs = data.filter(({rooms}) => rooms === selection);
      setFilteredObjs(filteredObjs);
    } else {
      setFilteredObjs(data);
    }
  };

  return (
    <Container fluid className="App">
      <Header title='Favorite Properties' />
      {loading? <Spinner animation="border"/> : (
        <>
          <InputField filterProperties={filterProperties}/>
          <div className="input-field-spacing"></div>
          <Main objData={filteredObjs} showModal={showModal} />
          <SelectedProperty objData={filteredObjs[selectedIndex]} show={isModalShown} hide={hideModal} />
        </>
      )}
      <Footer title='Sergii Otryshko 2024' />
    </Container>
  );
};

export default App;
