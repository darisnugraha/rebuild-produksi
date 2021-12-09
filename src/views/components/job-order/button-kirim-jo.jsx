import React, { useState } from "react";
import { Button } from "antd";
import FormKirimJO from "./form-kirim-jo";
import FormDetailTambahan from "./form-detail-tambahan";

const ModalKirimJO = () => {
  const [visible, setVisible] = useState(false);
  const [visibleTambahan, setVisibleTambahan] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Data JO
      </Button>
      <FormKirimJO
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <Button
        type="primary"
        style={{ marginLeft: "10px" }}
        onClick={() => {
          setVisibleTambahan(true);
        }}
      >
        + Detail Tambahan
      </Button>
      <FormDetailTambahan
        visible={visibleTambahan}
        onCreate={onCreate}
        onCancel={() => {
          setVisibleTambahan(false);
        }}
      />
    </div>
  );
};

export default ModalKirimJO;
