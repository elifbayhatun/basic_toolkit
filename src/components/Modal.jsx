import React from "react";
import { Form, Modal, Button, FormText } from "react-bootstrap";
const FormModal = ({ show, handleClose }) => {
  return (
    <Modal
      className="text-dark"
      backdrop="static"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Görev Ekle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Başlık</Form.Label>
            <Form.Control
              type="text"
              placeholder="Başlık giriniz"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Yazar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Yazar giriniz"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kime Atanacak</Form.Label>
            <Form.Control
              type="text"
              placeholder="Atanacak kişiyi giriniz"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Teslim Tarihi</Form.Label>
            <Form.Control
              type="date"
              placeholder="Son Teslim Tarihi"
            ></Form.Control>
            <FormText>Son Teslim Tarihini Belirleyin</FormText>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Kapat
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Kaydet
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
