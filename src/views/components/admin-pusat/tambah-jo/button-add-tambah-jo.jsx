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
import getLocal from "../../../../infrastructure/services/local/get-local";

const ModalTambahJO = () => {
  const dispatch = useDispatch();
  const [visibledetailjo, setVisibleDetailJO] = useState(false);
  const [visibledatastaff, setVisibleDataStaff] = useState(false);
  const beratAwal = getLocal("berat_awal");

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisibleDataStaff(true);
          const dataLocal = getLocal("data_staff");
          if (dataLocal !== null) {
            dispatch(getDataByPohon({ pohon: dataLocal[0].no_buat }));
          }
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
        disabled={beratAwal === 0}
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
