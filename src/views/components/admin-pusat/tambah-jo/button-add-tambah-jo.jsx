import React, { useState } from "react";
import { Button } from "antd";
import FormDetailJO from "./form-detail-jo";
import FormDataStaff from "./form-data-staff";

const ModalTambahJO = () => {
  const [visibledetailjo, setVisibleDetailJO] = useState(false);
  const [visibledatastaff, setVisibleDataStaff] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisibleDetailJO(false);
    setVisibleDataStaff(false);
  };

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
        onCreate={onCreate}
        onCancel={() => {
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
        onCreate={onCreate}
        onCancel={() => {
          setVisibleDetailJO(false);
        }}
      />
    </div>
  );
};

export default ModalTambahJO;
