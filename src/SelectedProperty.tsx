import React, { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

interface ISelectedProperty {
  title: string;
  image_url: string;
  description: string;
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
          <Image src={objData.image_url} alt={objData.description} fluid/>
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