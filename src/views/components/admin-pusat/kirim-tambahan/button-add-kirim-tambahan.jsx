import React, { useState } from "react";
import { Button } from "antd";
import FormDetailTambahan from "./form-detail-tambahan";
import FormDetailJO from "./form-detail-jo";
import { useDispatch } from "react-redux";
import { getStockBahanAdminByStaff } from "../../../../application/actions/kirimtambahan";

const ModalKirimTambahan = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [visibledetailtamabahan, setVisibleDetailTambahan] = useState(false);
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
          setVisibleDetailTambahan(true);
          dispatch(getStockBahanAdminByStaff({ namaStaff: null }));
        }}
      >
        + Detail Tambahan
      </Button>
      <FormDetailTambahan
        visible={visibledetailtamabahan}
        onCreate={() => {}}
        onCancel={() => {
          setVisibleDetailTambahan(false);
        }}
      />
    </div>
  );
};

export default ModalKirimTambahan;
