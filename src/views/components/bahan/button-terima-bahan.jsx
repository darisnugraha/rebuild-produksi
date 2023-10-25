import React, { useEffect, useState } from "react";
import { Button } from "antd";
import FormTerimaBahan from "./form-terima-bahan";
import {
  setDivisi,
  getTukangByDivisi,
  // getBahanbyDivisiAndStaff,
  getBahanByTukangTujuan,
  getBahanByTukangAsal,
} from "../../../application/actions/terimabahan";
import { useDispatch, useSelector } from "react-redux";
import getLocal from "../../../infrastructure/services/local/get-local";
import TerimaBahan from "../../../application/selectors/terimabahan";
import { change } from "redux-form";

const ModalTerimaBahan = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const divisi = getLocal("divisi");
  const dataStaffDivisi = useSelector(TerimaBahan.getTukangByDivisi);
  const dataTukangAsal = useSelector(TerimaBahan.getTukangAsal);
  const dataDivisi = useSelector(TerimaBahan.getAllDivisi);
  const dataStaff = useSelector(TerimaBahan.getTukangDivisi);
  const staffAsal = useSelector(TerimaBahan.getTukangByDivisi);

  useEffect(() => {
    dispatch(
      getTukangByDivisi(
        divisi === "Admin" ? "ADMIN PUSAT" : divisi?.toUpperCase()
      )
    );
  }, [dispatch, divisi]);

  return (
    <div>
      {divisi === "Admin" ? (
        <Button
          type="primary"
          onClick={() => {
            if (dataTukangAsal.length !== 0 || dataStaff.length !== 0) {
              dispatch(change("FormTerimaBahan", "divisi", "ADMIN PUSAT"));
              dispatch(
                change("FormTerimaBahan", "divisi_asal", dataDivisi[0]?.divisi)
              );
              dispatch(
                change(
                  "FormTerimaBahan",
                  "staff",
                  dataTukangAsal[0]?.nama_tukang
                )
              );
              dispatch(
                change(
                  "FormTerimaBahan",
                  "staff_tujuan",
                  dataStaff[0].nama_tukang
                )
              );
              dispatch(
                getBahanByTukangTujuan({
                  staff: dataStaffDivisi[0].nama_tukang,
                })
              );
            }
            setVisible(true);
          }}
        >
          + Data Terima
        </Button>
      ) : (
        <Button
          type="primary"
          onClick={() => {
            dispatch(change("FormTerimaBahan", "divisi", divisi));
            dispatch(change("FormTerimaBahan", "divisi_asal", "ADMIN PUSAT"));
            dispatch(
              change("FormTerimaBahan", "staff", staffAsal[0]?.nama_tukang)
            );
            dispatch(
              getBahanByTukangAsal({
                staff: staffAsal[0]?.nama_tukang,
              })
            );
            dispatch(setDivisi(divisi));
            setVisible(true);
            // dispatch(
            //   getBahanbyDivisiAndStaff({
            //     staff:
            //       divisi === "Admin"
            //         ? "ADMIN BAHAN"
            //         : dataStaffDivisi[0]?.nama_tukang,
            //   })
            // );
          }}
        >
          + Data Terima
        </Button>
      )}

      <FormTerimaBahan
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaBahan;
