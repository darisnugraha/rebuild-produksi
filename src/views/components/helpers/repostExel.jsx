import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
// export default function RepostExel(nama) {
class RepostExel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className={this.props.className}
          table="table-to-xls"
          filename={this.props.nama}
          sheet={this.props.nama}
          buttonText={this.props.buttonText}
        />
            <table id="table-to-xls" style={{ display: "none" }}>
          <tr>
          {this.props.columns.map((item) => (
              <td>{item.text}</td>
          ))}
          </tr>
          {this.props.data.map((item) => (
            <tr>
              <td>{item.kode_barang}</td>
              <td>{item.kode_barcode}</td>
              <td>{item.kode_intern}</td>
              <td>{item.kode_gudang}</td>
              <td>{item.kode_toko}</td>
              <td style={{whiteSpace: 'nowrap'}}>{item.nama_barang}</td>
              <td>{item.berat}</td>
              <td style={{whiteSpace: 'nowrap'}}>{item.nama_atribut}</td>
              <td>{item.berat_atribut}</td>
              <td>{item.stock_on_hand}</td>
            </tr>
          ))}
          {/* {this.props.data.forEach((item, index) => {
            <>
              <tr>
                <td></td>
              </tr>
            </>;
          })} */}
        </table>
      </>
    );
  }
}
export default RepostExel;
