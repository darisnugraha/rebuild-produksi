import React, { useState } from "react";
import { Button } from "antd";
import FormDetailBatu from "./form-detail-batu";
import FormDetailJO from "./form-detail-jo";
import { useDispatch } from "react-redux";

const ModalKirimBatu = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [visibledetailbatu, setVisibleDetailBatu] = useState(false);
  const [visibledetailjo, setVisibleDetailJO] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisibleDetailJO(true);
        }}
      >
        + Detail JO
      </Button>
      <FormDetailJO
        visible={visibledetailjo}
        onCreate={() => {}}
        onCancel={() => {
          setVisibleDetailJO(false);
        }}
      />
      <Button
        type="primary"
        style={{ marginLeft: "10px" }}
        onClick={() => {
          setVisibleDetailBatu(true);
        }}
      >
        + Detail Batu
      </Button>
      <FormDetailBatu
        visible={visibledetailbatu}
        onCreate={() => {}}
        onCancel={() => {
          setVisibleDetailBatu(false);
        }}
      />
    </div>
  );
};

export default ModalKirimBatu;
