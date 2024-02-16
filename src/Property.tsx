import React, { useState, FC } from 'react';
import Card from 'react-bootstrap/Card';

interface IPropertyProps {
  title: string;
  src: string;
  alt: string;
  description: string;
  propertyIdx: number;
  showModal: (index: number) => void;
}

const Property: FC<IPropertyProps> = ({ title, src, description, propertyIdx, showModal }) => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
    showModal(propertyIdx);
  };

  return (
    <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={src} alt={description} title={title} onClick={handleClick} />
        <Card.Text>{description}</Card.Text>
      </div>
      <Card.Text><span>{'\u{2764}'}</span> {likes}</Card.Text>
    </Card>
  );
}

export default Property;