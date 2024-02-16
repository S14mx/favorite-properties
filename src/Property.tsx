import React, { useState, FC } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Button.css'

interface IPropertyProps {
  title: string;
  src: string;
  alt: string;
  rooms: number
  description: string;
  propertyIdx: number;
  showModal: (index: number) => void;
}

const Property: FC<IPropertyProps> = ({ title, src, description, propertyIdx, showModal }) => {
  const [likes, setLikes] = useState(0);

  const handleImageClick = () => {
    showModal(propertyIdx);
  };

  const handleButtonClick = () => {
    setLikes(likes + 1);
  }


  return (
    <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={src} alt={description} title={title} onClick={handleImageClick} />
        {/* <Card.Text>{description}</Card.Text> */}
      </div>
      <div className="center-container">
        <Button className="like-button" onClick={handleButtonClick}><span>{'\u{2764}'}{likes}</span> </Button>
      </div>  
    </Card>
  );
}

export default Property;