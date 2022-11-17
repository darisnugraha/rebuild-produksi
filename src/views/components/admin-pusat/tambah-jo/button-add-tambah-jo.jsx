import React, { useState } from "react";
import { Button } from "antd";
import FormDetailJO from "./form-detail-jo";
import FormDataStaff from "./form-data-staff";
import { useDispatch } from "react-redux";
import {
  addDataDetailJO,
  addDataStaff,
  getDataByPohon,
  setDataByPohon,
} from "../../../../application/actions/tambahjoborder";

const ModalTambahJO = () => {
  const dispatch = useDispatch();
  const [visibledetailjo, setVisibleDetailJO] = useState(false);
  const [visibledatastaff, setVisibleDataStaff] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisibleDataStaff(true);
        }}
      >
        + Data Staff
      </Button>
      <FormDataStaff
        visible={visibledatastaff}
        onCreate={() => {
          dispatch(addDataStaff);
        }}
        onCancel={() => {
          dispatch(setDataByPohon({ feedback: undefined }));
          dispatch(getDataByPohon({ pohon: undefined }));
          setVisibleDataStaff(false);
        }}
      />
      <Button
        type="primary"
        style={{ marginLeft: "10px" }}
        onClick={() => {
          setVisibleDetailJO(true);
        }}
      >
        + Detail JO
      </Button>
      <FormDetailJO
        visible={visibledetailjo}
        onCreate={() => {
          dispatch(addDataDetailJO);
        }}
        onCancel={() => {
          setVisibleDetailJO(false);
        }}
      />
    </div>
  );
};

export default ModalTambahJO;
