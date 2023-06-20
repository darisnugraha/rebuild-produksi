import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { Card, Divider, Button, Select } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import FormKirimLebur from "../../components/lebur/kirim-lebur/button-add-kirim-lebur";
import TableKirimLebur from "../../components/lebur/kirim-lebur/table-kirim-lebur";
import TableHistoryKirimLebur from "../../components/lebur/kirim-lebur/table-history-kirim-lebur";
import {
  addKirimLebur,
  count24,
  getAllHistoryKirimLebur,
} from "../../../application/actions/kirimlebur.jsx";
import styleAntd from "../../../infrastructure/shared/styleAntd";
import { getAllMasterBahan } from "../../../application/actions/masterbahan.jsx";
import MasterBahan from "../../../application/selectors/masterbahan";
import getLocal from "../../../infrastructure/services/local/get-local.jsx";

const { Option } = Select;

const maptostate = (state) => {
  const dataLebur = getLocal("data_kirim_lebur");
  const berat =
    dataLebur?.reduce((a, b) => a + parseFloat(b?.berat || 0), 0) || 0;
  return {
    initialValues: {
      kadar: state.kirimlebur.kadarTotal,
      bahan_kembali: state.masterbahan.feedback[0]?.nama_bahan,
      berat_kirim: berat,
      karat_24: state.kirimlebur.karat24Total,
    },
  };
};
let KirimLebur = () => {
  const dispatch = useDispatch();
  const dataJenisBahan = useSelector(MasterBahan.getAllMasterBahan);
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllHistoryKirimLebur);
    dispatch(getAllMasterBahan);
    document.title = "Kirim Lebur";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/lebur/kirim-lebur">Lebur</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Lebur</li>
      </ol>
      <h1 className="page-header">
        Lebur <small>Kirim Lebur</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Lebur</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimLebur />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Kirim Lebur
                </Divider>
              </div>
              <div className="col-12">
                <TableKirimLebur />
              </div>
              <div className="col-12" style={{ marginTop: "10px" }}>
                <div className="row">
                  <div className="col-3">
                    <Field
                      name="berat_kirim"
                      type="text"
                      addonBefore={
                        <span style={{ fontSize: "13px" }}>Berat Kirim</span>
                      }
                      component={styleAntd.AInput}
                      className="form-item-group"
                      placeholder="Masukkan Berat Kirim"
                      disabled
                    />
                  </div>
                  <div className="col-3">
                    <Field
                      name="kadar"
                      type="text"
                      addonBefore={
                        <span style={{ fontSize: "13px" }}>Kadar</span>
                      }
                      component={styleAntd.AInput}
                      className="form-item-group"
                      placeholder="Masukkan Kadar"
                      onChange={(e) => dispatch(count24(e.target.value))}
                    />
                  </div>
                  <div className="col-3">
                    <Field
                      name="karat_24"
                      type="text"
                      addonBefore={
                        <span style={{ fontSize: "13px" }}>24K</span>
                      }
                      component={styleAntd.AInput}
                      className="form-item-group"
                      placeholder="Masukkan 24k"
                      disabled
                    />
                  </div>
                  <div className="col-3">
                    <Field
                      showSearch
                      name="bahan_kembali"
                      label={
                        <span style={{ fontSize: "13px" }}>Jenis Bahan</span>
                      }
                      component={styleAntd.ASelect}
                      placeholder="Pilih Jenis Bahan"
                      onBlur={(e) => e.preventDefault()}
                      // onChange={(e) => dispatch(setBahanKembali(e))}
                    >
                      {dataJenisBahan.map((item) => {
                        return (
                          <Option value={item.nama_bahan} key={item.nama_bahan}>
                            <span style={{ fontSize: "13px" }}>
                              {item.nama_bahan}
                            </span>
                          </Option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <Button
                      type="primary"
                      onClick={() => {
                        dispatch(addKirimLebur);
                      }}
                    >
                      Simpan
                    </Button>
                  </div>
                  <div className="col-1">
                    <Button
                      type="danger"
                      onClick={() => {
                        localStorage.removeItem("data_kirim_lebur");
                        window.location.reload();
                      }}
                    >
                      Batal
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel History Kirim Lebur
                </Divider>
              </div>
              <div className="col-12">
                <TableHistoryKirimLebur />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

KirimLebur = reduxForm({
  form: "KirimLebur",
  enableReinitialize: true,
})(KirimLebur);
export default connect(maptostate, null)(KirimLebur);
