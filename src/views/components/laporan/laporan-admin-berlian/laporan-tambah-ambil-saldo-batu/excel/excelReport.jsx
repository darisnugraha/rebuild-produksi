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
          filename="LAPORAN TAMBAH DAN AMBIL SALDO BATU"
          sheet="LAPORAN TAMBAH DAN AMBIL SALDO BATU"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <td colSpan="6">LAPORAN TAMBAH DAN AMBIL SALDO BATU</td>
            </tr>
            <tr>
              <td colSpan="6">
                TANGGAL{" "}
                {this.props.dataHead?.startDate +
                  " s/d " +
                  this.props.dataHead?.endDate}
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
                NO TRANSAKSI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                TGL TRANSAKSI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                KODE BATU
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
                KETERANGAN
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((item) => {
              return (
                <tr>
                  <td>{item.no_mutasi}</td>
                  <td>{item.tanggal_mutasi}</td>
                  <td>{item.kode_batu}</td>
                  <td style={{ textAlign: "right" }}>{item.jumlah}</td>
                  <td style={{ textAlign: "right" }}>{item.berat}</td>
                  <td>{item.keterangan}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total :</td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat), 0)
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
