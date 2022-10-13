import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaBahanTukang from "./form-terima-bahan-tukang";
import {
  useDispatch,
  //  useSelector
} from "react-redux";
import {
  // getAllBahanAsalTukang,
  getAllTukangAsalDivisi,
  // getBeratBahan,
} from "../../../../application/actions/terimabahantukang";
// import TerimaBahanTukang from "../../../../application/selectors/terimabahantukang";

const ModalTerimaBahanTukang = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  // const dataDivisi = useSelector(TerimaBahanTukang.getAllDivisiAsalSaldoBahan);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
          // dispatch(getAllTukangAsalDivisi({ divisi: dataDivisi[0].divisi }));
          dispatch(getAllTukangAsalDivisi({ divisi: "ADMIN PUSAT" }));
          // dispatch(getAllBahanAsalTukang({ staff: null }));
          // dispatch(getBeratBahan({ bahan: null }));
        }}
      >
        + Data Terima
      </Button>
      <FormTerimaBahanTukang
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaBahanTukang;
