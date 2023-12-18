import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import JenisBahan from "../../../../application/selectors/masterbahan";
// import TerimaTukangPotong from "../../../../application/selectors/terimatukangpotong";
import {
  addDataTerimaTukangPotong,
  countSusut,
  countSusutPentolan,
  getTerimaTukangPotong,
} from "../../../../application/actions/terimatukangpotong";

const { Option } = Select;

const maptostate = (state) => {
  if (state.terimatukangpotong.feedback.length !== 0) {
    if (state.terimatukangpotong.jenisBahan !== undefined) {
      return {
        initialValues: {
          pohon: state.terimatukangpotong.noPohon,
          kode_jenis_bahan: state.terimatukangpotong.feedback[0]?.nama_bahan,
          nama_jenis_bahan:
            state.terimatukangpotong.jenisBahan[0]?.nama_jenis_bahan,
          berat: state.terimatukangpotong.feedback[0]?.berat_casting,
          berat_terima: state.terimatukangpotong.beratPentolan,
          berat_barang: state.terimatukangpotong.beratTerima,
          berat_susut: state.terimatukangpotong.susut,
          tanggal: state.terimatukangpotong.feedback[0]?.tgl_terima_casting,
          real_kode_jenis_bahan:
            state.terimatukangpotong.jenisBahan[0]?.kode_jenis_bahan,
        },
      };
    }
  } else {
    return {
      initialValues: {
        pohon: "",
        kode_jenis_bahan: state.masterbahan.feedback[0]?.nama_bahan,
        nama_jenis_bahan: "",
        berat: 0,
        berat_terima: 0,
        berat_barang: 0,
        berat_susut: 0,
        tanggal: "",
        real_kode_jenis_bahan: "",
      },
    };
  }
};

let FormTerimaTukangPotong = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataJenisBahan = useSelector(JenisBahan.getAllMasterBahan);
  // const data = useSelector(TerimaTukangPotong.getTerimaTukangPotong);
  // const detailBahan = data[0]?.detail_bahan;

  return (
    <Modal
      visible={visible}
      title="Detail Pohon"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addDataTerimaTukangPotong);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Field
              name="pohon"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nomor Pohon</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nomor Pohon"
              onBlur={(e) => {
                dispatch(
                  getTerimaTukangPotong({ noTransaksi: e.target.value })
                );
              }}
            />
          </Col>
          <Col span={12}>
            <Field
              showSearch
              name="kode_jenis_bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan"
              onBlur={(e) => e.preventDefault()}
              // disabled={data.length !== 0}
            >
              {dataJenisBahan.map((item) => {
                return (
                  <Option value={item.nama_bahan} key={item.kode_bahan}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
              {/* {data.length === 0
                ? dataJenisBahan.map((item) => {
                    return (
                      <Option value={item.nama_bahan} key={item.kode_bahan}>
                        <span style={{ fontSize: "13px" }}>
                          {item.nama_bahan}
                        </span>
                      </Option>
                    );
                  })
                : detailBahan.map((item) => {
                    return (
                      <Option value={item.nama_bahan} key={item.kode_bahan}>
                        <span style={{ fontSize: "13px" }}>
                          {item.nama_bahan}
                        </span>
                      </Option>
                    );
                  })} */}
            </Field>
          </Col>
          <Col span={12} style={{ display: "none" }}>
            <Field
              name="real_kode_jenis_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Jenis Bahan"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="nama_jenis_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Jenis Bahan"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Awal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Awal"
              disabled
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_terima"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Pentolan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Pentolan"
              onChange={(e) =>
                dispatch(countSusutPentolan({ beratPentolan: e.target.value }))
              }
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Barang"
              onBlur={(e) => {
                dispatch(countSusut({ beratTerima: e.target.value }));
              }}
            />
          </Col>
          <Col span={12}>
            <Field
              name="berat_susut"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Susut</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Susut"
              disabled
            />
          </Col>
          <Col span={12} style={{ display: "none" }}>
            <Field
              name="tanggal"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Tanggal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Tanggal"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaTukangPotong = reduxForm({
  form: "FormTerimaTukangPotong",
  enableReinitialize: true,
})(FormTerimaTukangPotong);
export default connect(maptostate, null)(FormTerimaTukangPotong);
