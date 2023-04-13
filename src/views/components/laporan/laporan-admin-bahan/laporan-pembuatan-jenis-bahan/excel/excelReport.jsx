import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let totalKarat24 = 0;
    this.props.dataExel.map((item) => {
      return (totalKarat24 =
        totalKarat24 + parseFloat(item.berat) * (parseFloat(item.kadar) / 100));
    });

    const groupBy = (array, key) => {
      return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        return result;
      }, {});
    };

    const dataGroup = groupBy(this.props.dataExel, "no_mutasi");
    const dataGroupArr = Object.values(dataGroup);

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN PEMBUATAN JENIS BAHAN"
          sheet="LAPORAN PEMBUATAN JENIS BAHAN"
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
                colSpan="7"
              >
                LAPORAN PEMBUATAN JENIS BAHAN
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="7"
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
                TGL TRANSAKSI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BAHAN PAKAI
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
            </tr>
          </thead>
          <tbody>
            {dataGroupArr.map((element) => {
              let karat24Total = 0;
              return (
                <>
                  <tr>
                    <td
                      colSpan="5"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      No Transaksi : {element[0].no_mutasi}
                    </td>
                  </tr>
                  {element.map((item) => {
                    const karat24 = parseFloat(item.berat) * (item.kadar / 100);
                    karat24Total =
                      karat24Total +
                      parseFloat(item.berat) * (item.kadar / 100);
                    return (
                      <tr>
                        <td>{item.tanggal_mutasi}</td>
                        <td>{item.nama_bahan}</td>
                        <td style={{ textAlign: "right" }}>{item.berat}</td>
                        <td style={{ textAlign: "right" }}>{item.kadar}</td>
                        <td style={{ textAlign: "right" }}>
                          {karat24.toFixed(3)}
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={2} style={{ textAlign: "right" }}>
                      Sub Total :
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {element
                        .reduce((a, b) => a + parseFloat(b.berat), 0)
                        .toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}></td>
                    <td style={{ textAlign: "right" }}>
                      {karat24Total.toFixed(3)}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} style={{ textAlign: "right" }}>
                Grand Total :
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}></td>
              <td style={{ textAlign: "right" }}>{totalKarat24.toFixed(3)}</td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
