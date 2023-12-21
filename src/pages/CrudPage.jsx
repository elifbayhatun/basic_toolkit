import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import FormModal from "../components/Modal";
const CrudPage = () => {
  //eleman ekleme modal state'i
  const [ShowModal, setShowModal] = useState(false);
  //modalı kapatacak fonksiyon
  const handleClose = () => {
    setShowModal(false);
  };
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
          <tr>
            <td>01</td>
            <td>Düzenleme</td>
            <td>Elif</td>
            <td>Nilüfer</td>
            <td>04/04/2023</td>
            <td>
              <Button>Sil</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
