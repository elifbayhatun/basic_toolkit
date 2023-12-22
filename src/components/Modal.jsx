import { useState, React, useEffect } from "react";
import { Form, Modal, Button, FormText } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../App/crudSlice";

const FormModal = ({ show, handleClose, editTask }) => {
  const [formState, setFormState] = useState({});
  //formun state'ni belirleme,düzenlenecek task var ise FormState bu taskın bilgilerini
  //aktaracak.yok ise o zaman form state'in tuttuğu değeri boş string olacak.
  useEffect(() => {
    const stateValue = editTask
      ? editTask
      : {
          title: "",
          author: "",
          assigned_to: "",
          end_date: "",
        };
    setFormState(stateValue);
  }, [show]);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTask(formState));
  };

  return (
    <Modal
      className="text-dark"
      backdrop="static"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {!editTask ? "yeni görev ekle" : "görevi düzenle"}{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Başlık</Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormState({
                  ...formState,
                  title: e.target.value,
                })
              }
              type="text"
              placeholder="Başlık giriniz"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Yazar</Form.Label>
            <Form.Control
              value={formState.author}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  author: e.target.value,
                })
              }
              type="text"
              placeholder="Yazar giriniz"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kime Atanacak</Form.Label>
            <Form.Control
              value={formState.assigned_to}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  assigned_to: e.target.value,
                })
              }
              type="text"
              placeholder="Atanacak kişiyi giriniz"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Teslim Tarihi</Form.Label>
            <Form.Control
              value={formState.end_date}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  end_date: e.target.value,
                })
              }
              type="date"
              placeholder="Son Teslim Tarihi"
            ></Form.Control>
            <FormText>Son Teslim Tarihini Belirleyin</FormText>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Kaydet
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
