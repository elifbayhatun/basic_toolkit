import React, { useState } from "react";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import FormModal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../App/crudSlice";
const CrudPage = () => {
  const state = useSelector((store) => store.crudReducer);
  //eleman ekleme modal state'i
  const [ShowModal, setShowModal] = useState(false);
  //düzenlenecek elemanı tuttuğumuz state.
  const [editTask, setEditTask] = useState(null);

  //modalı kapatacak fonksiyon
  const handleClose = () => {
    setEditTask(null);
    setShowModal(false);
  };
  const dispatch = useDispatch();
  return (
    <div className="px-3">
      <FormModal show={ShowModal} handleClose={handleClose} />
      <Button
        onClick={() => setShowModal(true)}
        variant="success"
        className="my-3"
      >
        yeni görev ekle
      </Button>
      <Table variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Görev</th>
            <th>Yazar</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeTask(task.id))}
                  >
                    Sil
                  </Button>
                  <Button
                    onClick={() => {
                      //düzenlenecek task' state'a aktar.
                      //modal'ı aç.
                      setEditTask(task);
                      setShowModal(true);
                    }}
                  >
                    Düzenle
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
