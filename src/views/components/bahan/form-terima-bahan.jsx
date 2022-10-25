import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../infrastructure/shared/styleAntd";
import ui from "../../../application/selectors/ui";
import TerimaBahan from "../../../application/selectors/terimabahan";
import {
  getSaldoKirimBahanOpenChange,
  addTerimaBahan,
  getBahanbyDivisiAndStaff,
  getTukangAsalByDivisi,
} from "../../../application/actions/terimabahan";
import TerimaBahanValidate from "../../../infrastructure/validate/TerimaBahanValidate";
import getLocal from "../../../infrastructure/services/local/get-local";

const { Option } = Select;

const maptostate = (state) => {
  const divisi = getLocal("divisi");
  if (divisi !== null) {
    if (divisi.toUpperCase() === "ADMIN") {
      return {
        initialValues: {
          divisi: "ADMIN PUSAT",
          staff_tujuan:
            state.terimabahan.feedbackTukangByTukang[0]?.nama_tukang,
          staff: state.terimabahan.tukangAsal[0]?.nama_tukang,
          divisi_asal: state.terimabahan.divisiAsal
            ? state.terimabahan.divisiAsal
            : state.terimabahan.dataDivisi[0]?.divisi,
          nama_bahan:
            state.terimabahan.namaBahan !== null
              ? state.terimabahan.namaBahan
              : state.terimabahan.tukangAsal[0]?.nama_bahan,
          berat_bahan: state.terimabahan.berat,
        },
      };
    } else {
      if (state.terimabahan.feedback.length !== 0) {
        if (state.terimabahan.kodeStaff !== null) {
          return {
            initialValues: {
              divisi:
                getLocal("divisi") === "Admin" ? "ADMIN PUSAT" : divisi || "",
              staff_tujuan: state.terimabahan.feedbackTukang[0]?.nama_tukang,
              staff: state.terimabahan.kodeStaff,
              divisi_asal:
                getLocal("divisi").toUpperCase() === "ADMIN"
                  ? "ADMIN BAHAN"
                  : "ADMIN PUSAT",
              nama_bahan:
                state.terimabahan.namaBahan !== null
                  ? state.terimabahan.namaBahan
                  : state.terimabahan.feedbackTukangByTukang[0]?.nama_bahan,
              berat_bahan: state.terimabahan.berat,
            },
          };
        } else {
          return {
            initialValues: {
              divisi:
                getLocal("divisi") === "Admin" ? "ADMIN PUSAT" : divisi || "",
              staff_tujuan: state.terimabahan.feedbackTukang[0]?.nama_tukang,
              divisi_asal:
                getLocal("divisi").toUpperCase() === "ADMIN"
                  ? "ADMIN BAHAN"
                  : "ADMIN PUSAT",
              staff:
                state.kirimbahanadmin.feedbackTukangByTukang[0]?.nama_tukang,
              nama_bahan:
                state.terimabahan.namaBahan !== null
                  ? state.terimabahan.namaBahan
                  : state.terimabahan.feedback[0]?.nama_bahan,
              berat_bahan: state.terimabahan.berat,
            },
          };
        }
      } else {
        if (state.terimabahan.kodeStaff !== null) {
          return {
            initialValues: {
              divisi:
                getLocal("divisi") === "Admin" ? "ADMIN PUSAT" : divisi || "",
              staff_tujuan: state.terimabahan.feedbackTukang[0]?.nama_tukang,
              staff: state.terimabahan.kodeStaff,
              divisi_asal:
                getLocal("divisi").toUpperCase() === "ADMIN"
                  ? "ADMIN BAHAN"
                  : "ADMIN PUSAT",
              nama_bahan: "",
              berat_bahan: state.terimabahan.berat,
            },
          };
        } else {
          return {
            initialValues: {
              divisi:
                getLocal("divisi") === "Admin" ? "ADMIN PUSAT" : divisi || "",
              staff_tujuan: state.terimabahan.feedbackTukang[0]?.nama_tukang,
              staff: state.terimabahan.feedbackTukangByTukang[0]?.nama_tukang,
              divisi_asal:
                getLocal("divisi").toUpperCase() === "ADMIN"
                  ? "ADMIN BAHAN"
                  : "ADMIN PUSAT",
              nama_bahan: "",
              berat_bahan: state.terimabahan.berat,
            },
          };
        }
      }
    }
  }
};

let FormTerimaBahan = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataStaffDivisi = useSelector(TerimaBahan.getTukangByDivisi);
  const dataStaffAsal = useSelector(TerimaBahan.getTukangAsal);
  const dataStaff = useSelector(TerimaBahan.getTukangDivisi);
  const dataStaffTujuan = useSelector(TerimaBahan.getTukangByDivisi);
  const dataBahan = useSelector(TerimaBahan.getBahan);
  const dataDivisi = useSelector(TerimaBahan.getAllDivisi);
  const divisi = getLocal("divisi");

  return (
    <Modal
      visible={visible}
      title="Data Terima"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addTerimaBahan);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          {divisi === "Admin" ? (
            <Col span={8} offset={1}>
              <Field
                name="divisi_asal"
                label={<span style={{ fontSize: "13px" }}>Divisi Asal</span>}
                component={styleAntd.ASelect}
                placeholder="Pilih Divisi Asal"
                onBlur={(e) => e.preventDefault()}
                onChange={(e) => dispatch(getTukangAsalByDivisi(e))}
              >
                {dataDivisi.map((item) => {
                  if (item.divisi === "ADMIN PUSAT") {
                    return false;
                  } else {
                    return (
                      <Option value={item.divisi} key={item._id}>
                        <span style={{ fontSize: "13px" }}>{item.divisi}</span>
                      </Option>
                    );
                  }
                })}
              </Field>
            </Col>
          ) : (
            <Col span={8} offset={1}>
              <Field
                name="divisi_asal"
                type="text"
                label={<span style={{ fontSize: "13px" }}>Divisi Asal</span>}
                component={styleAntd.AInput}
                className="form-item-group"
                placeholder="Masukkan Divisi Asal"
                disabled
              />
            </Col>
          )}
          <Col span={8} offset={1}>
            <Field
              name="divisi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Divisi Tujuan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi Tujuan"
              disabled
            />
          </Col>
          {divisi === "Admin" ? (
            <Col span={8} offset={1}>
              <Field
                name="staff"
                label={<span style={{ fontSize: "13px" }}>Tukang Asal</span>}
                component={styleAntd.ASelect}
                placeholder="Pilih Tukang Asal"
                onBlur={(e) => e.preventDefault()}
                onChange={(val) => {
                  dispatch(getBahanbyDivisiAndStaff({ staff: val }));
                }}
              >
                {dataStaffAsal.map((item) => {
                  return (
                    <Option value={item.nama_tukang} key={item.kode_tukang}>
                      <span style={{ fontSize: "13px" }}>
                        {item.kode_tukang === item.nama_tukang
                          ? item.nama_tukang
                          : item.nama_tukang + " (" + item.kode_tukang + ")"}
                      </span>
                    </Option>
                  );
                })}
              </Field>
            </Col>
          ) : (
            <Col span={8} offset={1}>
              <Field
                name="staff"
                label={<span style={{ fontSize: "13px" }}>Tukang Asal</span>}
                component={styleAntd.ASelect}
                placeholder="Pilih Tukang Asal"
                onBlur={(e) => e.preventDefault()}
                onChange={(val) => {
                  dispatch(getBahanbyDivisiAndStaff({ staff: val }));
                }}
              >
                {dataStaffDivisi.map((item) => {
                  return (
                    <Option value={item.nama_tukang} key={item.kode_tukang}>
                      <span style={{ fontSize: "13px" }}>
                        {item.kode_tukang === item.nama_tukang
                          ? item.nama_tukang
                          : item.nama_tukang + " (" + item.kode_tukang + ")"}
                      </span>
                    </Option>
                  );
                })}
              </Field>
            </Col>
          )}
          {divisi === "Admin" ? (
            <Col span={8} offset={1}>
              <Field
                name="staff_tujuan"
                label={<span style={{ fontSize: "13px" }}>Tukang Tujuan</span>}
                component={styleAntd.ASelect}
                placeholder="Pilih Tukang Tujuan"
                onBlur={(e) => e.preventDefault()}
              >
                {dataStaffTujuan.map((item) => {
                  return (
                    <Option value={item.nama_tukang} key={item.kode_tukang}>
                      <span style={{ fontSize: "13px" }}>
                        {item.kode_tukang === item.nama_tukang
                          ? item.nama_tukang
                          : item.nama_tukang + " (" + item.kode_tukang + ")"}
                      </span>
                    </Option>
                  );
                })}
              </Field>
            </Col>
          ) : (
            <Col span={8} offset={1}>
              <Field
                name="staff_tujuan"
                label={<span style={{ fontSize: "13px" }}>Tukang Tujuan</span>}
                component={styleAntd.ASelect}
                placeholder="Pilih Tukang Tujuan"
                onBlur={(e) => e.preventDefault()}
              >
                {dataStaff.map((item) => {
                  return (
                    <Option value={item.nama_tukang} key={item.kode_tukang}>
                      <span style={{ fontSize: "13px" }}>
                        {item.kode_tukang === item.nama_tukang
                          ? item.nama_tukang
                          : item.nama_tukang + " (" + item.kode_tukang + ")"}
                      </span>
                    </Option>
                  );
                })}
              </Field>
            </Col>
          )}
          <Col span={8} offset={1}>
            <Field
              name="nama_bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) =>
                dispatch(getSaldoKirimBahanOpenChange({ namaBahan: e }))
              }
            >
              {dataBahan.map((item) => {
                return (
                  <Option value={item._id} key={item._id}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>

          <Col span={8} offset={1}>
            <Field
              name="berat_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Bahan"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaBahan = reduxForm({
  form: "FormTerimaBahan",
  enableReinitialize: true,
  validate: TerimaBahanValidate,
})(FormTerimaBahan);
export default connect(maptostate, null)(FormTerimaBahan);
