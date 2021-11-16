import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let total = 0;
    let textString = '';
    let textDisplay = 0;

    let awh75Awal = 0;
    let awh75In = 0;
    let awh75Out = 0;
    let awh75Sld = 0;

    let ayl70Awal = 0;
    let ayl70In = 0;
    let ayl70Out = 0;
    let ayl70Sld = 0;

    let ayl75Awal = 0;
    let ayl75In = 0;
    let ayl75Out = 0;
    let ayl75Sld = 0;

    let awh75AwalString = '';
    let awh75InString = '';
    let awh75OutString = '';
    let awh75SldString = '';

    let ayl70AwalString = '';
    let ayl70InString = '';
    let ayl70OutString = '';
    let ayl70SldString = '';

    let ayl75AwalString = '';
    let ayl75InString = '';
    let ayl75OutString = '';
    let ayl75SldString = '';

    const totalAwh75Awal = this.props.dataExel.reduce((a, b) => a + b.awh75_awal, 0);
    const totalAwh75In = this.props.dataExel.reduce((a, b) => a + b.awh75_in, 0);
    const totalAwh75Out = this.props.dataExel.reduce((a, b) => a + b.awh75_out, 0);
    const totalAwh75Saldo = this.props.dataExel.reduce((a, b) => a + b.awh75_sld, 0);

    const totalAyl70Awal = this.props.dataExel.reduce((a, b) => a + b.ayl70_awal, 0);
    const totalAyl70In = this.props.dataExel.reduce((a, b) => a + b.ayl70_in, 0);
    const totalAyl70Out = this.props.dataExel.reduce((a, b) => a + b.ayl70_out, 0);
    const totalAyl70Saldo = this.props.dataExel.reduce((a, b) => a + b.ayl70_sld, 0);

    const totalAyl75Awal = this.props.dataExel.reduce((a, b) => a + b.ayl75_awal, 0);
    const totalAyl75In = this.props.dataExel.reduce((a, b) => a + b.ayl75_in, 0);
    const totalAyl75Out = this.props.dataExel.reduce((a, b) => a + b.ayl75_out, 0);
    const totalAyl75Saldo = this.props.dataExel.reduce((a, b) => a + b.ayl75_sld, 0);

    const tanggal = new Date(localStorage.getItem('tanggal_lap'));
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN STOCK GLOBAL PRODUKSI L"
          sheet="LAPORAN STOCK GLOBAL PRODUKSI L"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: 'none' }}>
          <thead>
            <tr>
              <th colSpan="14" style={{ textAlign: 'center' }}>
                {' '}
                LAPORAN STOCK GLOBAL PRODUKSI{' '}
              </th>
            </tr>
            <tr>
              <th colSpan="14"> Tanggal : {tanggal.toLocaleDateString()}</th>
            </tr>
            <tr>
              <td
                style={{ backgroundColor: '#99CCFF', color: '#000', verticalAlign: 'middle' }}
                rowSpan="2"
              >
                DIVISI
              </td>
              <td
                style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}
                colSpan="4"
              >
                AWH75
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'center',
                }}
                colSpan="4"
              >
                AYL70
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'center',
                }}
                colSpan="4"
              >
                AYL75
              </td>
              <td
                style={{
                  backgroundColor: '#99CCFF',
                  color: '#000',
                  textAlign: 'right',
                  verticalAlign: 'middle',
                }}
                rowSpan="2"
              >
                TOTAL
              </td>
            </tr>
            <tr>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                AWAL
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                MASUK
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                KELUAR
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#FF0000', textAlign: 'center' }}>
                SALDO
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                AWAL
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                MASUK
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                KELUAR
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#FF0000', textAlign: 'center' }}>
                SALDO
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                AWAL
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                MASUK
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#000', textAlign: 'center' }}>
                KELUAR
              </td>
              <td style={{ backgroundColor: '#99CCFF', color: '#FF0000', textAlign: 'center' }}>
                SALDO
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((row) => {
              total =
                row.awh75_awal +
                row.awh75_in +
                row.awh75_out +
                row.awh75_sld +
                row.ayl70_awal +
                row.ayl70_in +
                row.ayl70_out +
                row.ayl70_sld +
                row.ayl75_awal +
                row.ayl75_in +
                row.ayl75_out +
                row.ayl75_sld;
              if (total.toString().includes('e')) {
                textString = total.toString().split('e');
                textDisplay = parseFloat(textString[0]);
              } else {
                textDisplay = total;
              }

              // awh75
              if (row.awh75_awal.toString().includes('e')) {
                awh75AwalString = row.awh75_awal.toString().split('e');
                awh75Awal = parseFloat(awh75AwalString[0]);
                console.log(awh75AwalString);
              } else {
                awh75Awal = row.awh75_awal;
              }

              if (row.awh75_in.toString().includes('e')) {
                awh75InString = row.awh75_inawal.toString().split('e');
                awh75In = parseFloat(awh75InString[0]);
              } else {
                awh75In = row.awh75_in;
              }

              if (row.awh75_out.toString().includes('e')) {
                awh75OutString = row.awh75_out.toString().split('e');
                awh75Out = parseFloat(awh75OutString[0]);
              } else {
                awh75Out = row.awh75_out;
              }

              if (row.awh75_sld.toString().includes('e')) {
                awh75SldString = row.awh75_sld.toString().split('e');
                awh75Sld = parseFloat(awh75SldString[0]);
              } else {
                awh75Sld = row.awh75_sld;
              }

              // ayl70
              if (row.ayl70_awal.toString().includes('e')) {
                ayl70AwalString = row.ayl70_awal.toString().split('e');
                ayl70Awal = parseFloat(ayl70AwalString[0]);
              } else {
                ayl70Awal = row.ayl70_awal;
              }

              if (row.ayl70_in.toString().includes('e')) {
                ayl70InString = row.ayl70_in.toString().split('e');
                ayl70In = parseFloat(ayl70InString[0]);
              } else {
                ayl70In = row.ayl70_in;
              }

              if (row.ayl70_out.toString().includes('e')) {
                ayl70OutString = row.ayl70_out.toString().split('e');
                ayl70Out = parseFloat(ayl70OutString[0]);
              } else {
                ayl70Out = row.ayl70_out;
              }

              if (row.ayl70_sld.toString().includes('e')) {
                ayl70SldString = row.ayl70_sld.toString().split('e');
                ayl70Sld = parseFloat(ayl70SldString[0]);
              } else {
                ayl70Sld = row.ayl70_sld;
              }

              // ayl75
              if (row.ayl75_awal.toString().includes('e')) {
                ayl75AwalString = row.ayl75_awal.toString().split('e');
                ayl75Awal = parseFloat(ayl75AwalString[0]);
              } else {
                ayl75Awal = row.ayl75_awal;
              }

              if (row.ayl75_in.toString().includes('e')) {
                ayl75InString = row.ayl75_in.toString().split('e');
                ayl75In = parseFloat(ayl75InString[0]);
              } else {
                ayl75In = row.ayl75_in;
              }

              if (row.ayl75_out.toString().includes('e')) {
                ayl75OutString = row.ayl75_out.toString().split('e');
                ayl75Out = parseFloat(ayl75OutString[0]);
              } else {
                ayl75Out = row.ayl75_out;
              }

              if (row.ayl75_sld.toString().includes('e')) {
                ayl75SldString = row.ayl75_sld.toString().split('e');
                ayl75Sld = parseFloat(ayl75SldString[0]);
              } else {
                ayl75Sld = row.ayl75_sld;
              }

              return (
                <tr>
                  <td>{row.divisi}</td>

                  <td>{awh75Awal.toFixed(3)}</td>
                  <td>{awh75In.toFixed(3)}</td>
                  <td>{awh75Out.toFixed(3)}</td>
                  <td style={{ color: '#FF0000' }}>{awh75Sld.toFixed(3)}</td>

                  <td>{ayl70Awal.toFixed(3)}</td>
                  <td>{ayl70In.toFixed(3)}</td>
                  <td>{ayl70Out.toFixed(3)}</td>
                  <td style={{ color: '#FF0000' }}>{ayl70Sld.toFixed(3)}</td>

                  <td>{ayl75Awal.toFixed(3)}</td>
                  <td>{ayl75In.toFixed(3)}</td>
                  <td>{ayl75Out.toFixed(3)}</td>
                  <td style={{ color: '#FF0000' }}>{ayl75Sld.toFixed(3)}</td>

                  <td style={{ color: '#FF0000' }}>{textDisplay.toFixed(3)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>&nbsp;</th>
              <th style={{ textAlign: 'right' }}>{totalAwh75Awal.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalAwh75In.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalAwh75Out.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalAwh75Saldo.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalAyl70Awal.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalAyl70In.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalAyl70Out.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalAyl70Saldo.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalAyl75Awal.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalAyl75In.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalAyl75Out.toFixed(3)}</th>
              <th style={{ textAlign: 'right' }}>{totalAyl75Saldo.toFixed(3)}</th>
              <th>&nbsp;</th>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
