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
          filename="LAPORAN OUTSTAND ADMIN"
          sheet="LAPORAN OUTSTAND ADMIN"
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
                LAPORAN OUTSTAND ADMIN
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
                TUKANG : {this.props.dataHead?.tukang}
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
                NO JOB ORDER
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NAMA KONSUMEN
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
                BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JUMLAH
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT
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
                NAMA TUKANG
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((item) => {
              const karat24 =
                parseFloat(item.berat_susut) * (parseFloat(item.kadar) / 100);
              return (
                <tr>
                  <td>{item.no_job_order}</td>
                  <td>{item.nama_customer}</td>
                  <td>{item.kode_barang}</td>
                  <td>{item.kode_jenis_bahan}</td>
                  <td style={{ textAlign: "right" }}>{item.stock_akhir}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_akhir}</td>
                  <td style={{ textAlign: "right" }}>{item.kadar}</td>
                  <td style={{ textAlign: "right" }}>{karat24}</td>
                  <td>{item.tgl_kirim}</td>
                  <td>{item.kode_staff}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td style={{ textAlign: "right" }} colSpan={4}>
                Total :
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.stock_akhir),
                  0
                )}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_akhir), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.kadar), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
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
