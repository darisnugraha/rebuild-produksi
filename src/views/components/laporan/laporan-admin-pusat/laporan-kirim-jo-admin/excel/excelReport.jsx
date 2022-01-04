import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN KIRIM JOB ORDER ADMIN"
          sheet="LAPORAN KIRIM JOB ORDER ADMIN"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <td
                style={{
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="11"
              >
                LAPORAN KIRIM JOB ORDER ADMIN
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="11"
              >
                TANGGAL{" "}
                {this.props.dataHead?.tgl_awal +
                  " s/d " +
                  this.props.dataHead?.tgl_akhir}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                TGL KIRIM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NO SPK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                KODE BARANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                DIVISI TUJUAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JENIS BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JUMLAH KIRIM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT KIRIM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT SUSUT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                KADAR
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                24K
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((item) => {
              const karat24 =
                parseFloat(item.berat_susut) * (parseFloat(item.kadar) / 100);
              return (
                <tr>
                  <td>{item.tgl_kirim}</td>
                  <td>{item.no_job_order}</td>
                  <td>{item.kode_barang}</td>
                  <td>{item.tujuan_divisi}</td>
                  <td>{item.kode_jenis_bahan}</td>
                  <td style={{ textAlign: "right" }}>{item.stock_out}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_out}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_susut}</td>
                  <td style={{ textAlign: "right" }}>{item.kadar}</td>
                  <td style={{ textAlign: "right" }}>{karat24}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>Total :</td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.stock_out), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_out), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_susut), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.kadar), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce(
                    (a, b) =>
                      a +
                      parseFloat(b.berat_susut) * (parseFloat(b.kadar) / 100),
                    0
                  )
                  .toFixed(3)}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
