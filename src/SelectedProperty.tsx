import React, { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

interface ISelectedProperty {
  title: string;
  imageUrl: string;
  description: string;
  rooms: number
}

interface ISelectedPropertyProps {
  show: boolean;
  hide: () => void;
  objData: ISelectedProperty;
}

const SelectedProperty: FC<ISelectedPropertyProps> = ({ show, hide, objData }) => {
  return (
    <>
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>{objData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={objData.imageUrl} alt={objData.description} fluid/>
          <p>Rooms: {objData.rooms}</p>
          <p>{objData.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SelectedProperty;