import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import EmptyTable from "./emptyTable";
import Skeleton from "react-loading-skeleton";
import { localStoragedecryp } from "./function";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

function Tabel(props) {
  let disable_search = props.disable_search;
  let text = props.textEmpty;
  let handleClick = props.handleClick;
  let tambahData = props.tambahData;
  let expandRow = props.expandRow;
  let selectRow = props.selectRow;
  let exportCsv = props.exportCsv;
  let btnText = props.btnText;
  let iconBtn = props.iconBtn;

  let namaCustomer = props.namaCustomer;
  let jenisCustomer = props.jenisCustomer;
  let form = props.form;
  let margin = props.margin;

  let btnOptional = props.btnOptional;
  let btnTextOptional = props.btnTextOptional;
  
  let btnOptional2 = props.btnOptional2;
  let btnTextOptional2 = props.btnTextOptional2;
  let iconBtnOptional2 = props.iconBtnOptional2;
  let handleClickOptional2 = props.handleClickOptional2;

  let btnOptional3 = props.btnOptional3;
  let btnTextOptional3 = props.btnTextOptional3;
  let iconBtnOptional3 = props.iconBtnOptional3;
  let handleClickOptional3 = props.handleClickOptional3;

  let iconBtnOptional = props.iconBtnOptional;
  let handleClickOptional = props.handleClickOptional;
  let pagination = props.pagination;
  return props.data ? (
    <ToolkitProvider
      keyField={props.keyField}
      data={props.data || []}
      columns={props.columns}
      search
    >
      {(props) => (
        <div className="row">
          <div className={!disable_search ? ("col-6") : "col-4"}>
            <div className="text-left">
              {!disable_search?(
                <SearchBar {...props.searchProps} />
                ) : null
              }
              {form === "Penjualan" ?
              <>
                      {namaCustomer && (
                      <span style={{top:"-2px",position: "absolute", left:margin ? "190px" : "10px"}}>
                        <> NAMA CUSTOMER : {localStorage.getItem('data_customer_tmp') === null ? null : JSON.parse(localStoragedecryp("data_customer_tmp")).nama_customer === undefined ? null : JSON.parse(localStoragedecryp("data_customer_tmp")).nama_customer.toUpperCase()} </>
                         </span>
                      )}
                      {jenisCustomer && (
                      <span style={{top:"14px",position: "absolute", left:margin ? "190px" : "10px"}}>
                        <>JENIS CUSTOMER: {localStorage.getItem('data_customer_tmp') === null ? null : JSON.parse(localStoragedecryp("data_customer_tmp")).jenis_pelanggan} </>
                        </span>
                      )}
                </>
              : form === "Service" ? 
                 <>
                    {namaCustomer && (
                    <span style={{top:"-2px",position: "absolute", left:"190px"}}>
                      <> NAMA CUSTOMER : {localStorage.getItem('data_customer_services_tmp') === null ? null :  JSON.parse(localStoragedecryp("data_customer_services_tmp")).nama_customer === undefined ? null : JSON.parse(localStoragedecryp("data_customer_services_tmp")).nama_customer.toUpperCase()} </>
                      </span>
                    )}
                    {jenisCustomer && (
                    <span style={{top:"14px",position: "absolute", left:"190px"}}>
                      <> JENIS CUSTOMER: {localStorage.getItem('data_customer_services_tmp') === null ? null : JSON.parse(localStoragedecryp("data_customer_services_tmp")).jenis_pelanggan} </>
                    </span>
                    )}
                  </>
                  : 
                  <>
                      {namaCustomer && (
                      <span style={{top:"-2px",position: "absolute", left:"190px"}}>
                        <> NAMA CUSTOMER : {localStorage.getItem('data_customer_hutang_tmp') === null ? null :  JSON.parse(localStoragedecryp("data_customer_hutang_tmp")).nama_customer === undefined ? null : JSON.parse(localStoragedecryp("data_customer_hutang_tmp")).nama_customer.toUpperCase()} </>
                        </span>
                      )}
                      {jenisCustomer && (
                      <span style={{top:"14px",position: "absolute", left:"190px"}}>
                        <> JENIS CUSTOMER: {localStorage.getItem('data_customer_hutang_tmp') === null ? null :  JSON.parse(localStoragedecryp("data_customer_hutang_tmp")).jenis_pelanggan} </>
                        </span>
                      )}
                  </>
              }
            </div>
          </div>
          <div className={!disable_search ? ("col-6") : "col-8"}>
            <div className="text-right">
              {tambahData && (
                <button onClick={handleClick} className="btn btn-primary">
                  {btnText || 'Tambah Data'}
                  {/* <i className="fa fa-plus ml-3"></i> */}
                  {iconBtn || <><i className="fa fa-plus ml-3"></i></>}
                </button>
              )}
              &nbsp;
              {btnOptional && (
                <button onClick={handleClickOptional} type="button" className="btn btn-success">
                  {btnTextOptional}
                  {iconBtnOptional || <><i className="fa fa-plus ml-3"></i></>}
                </button>
              )}
              &nbsp;
              {btnOptional2 && (
                <button onClick={handleClickOptional2} type="button" className="btn btn-warning">
                  {btnTextOptional2}
                  {iconBtnOptional2 || <><i className="fa fa-plus ml-3"></i></>}
                </button>
              )}
              &nbsp;
              {btnOptional3 && (
                <button onClick={handleClickOptional3} type="button" className="btn btn-danger">
                  {btnTextOptional3}
                  {iconBtnOptional3 || <><i className="fa fa-plus ml-3"></i></>}
                </button>
              )}
            </div>
          </div>
          <hr />
          <div className="col-12">
            <BootstrapTable
              pagination={pagination ==="off" ? null : paginationFactory()}
              selectRow={selectRow}
              expandRow={expandRow}
              {...props.baseProps}
              // wrapperClasses="table-responsive"
              noDataIndication={<EmptyTable text={text || "Tidak Ada Data"} />}
            />
            <br />
            &nbsp;
             
            {exportCsv && (
              <ExportCSVButton {...props.csvProps}>
                Export CSV!!
              </ExportCSVButton>
            )}
          </div>
        </div>
      )}
    </ToolkitProvider>
  ) : props.empty ? (
    <ToolkitProvider
      keyField={props.keyField}
      data={props.data || []}
      columns={props.columns}
      search
    >
      {(props) => (
        <div className="row">
          <div className="col-6">
            <div className="text-left">
              <SearchBar {...props.searchProps} />
            </div>
          </div>
          <div className="col-6">
            <div className="text-right">
              {tambahData && (
                <button onClick={handleClick} className="btn btn-primary">
                  Tambah Data
                  <i className="fa fa-plus ml-3"></i>
                </button>
                )}
                 &nbsp;
              {btnOptional && (
                <button onClick={handleClickOptional} className="btn btn-success">
                  {btnTextOptional}
                  {iconBtnOptional || <><i className="fa fa-plus ml-3"></i></>}
                </button>
              )}
            </div>
          </div>
          <hr />
          <div className="col-12">
            <BootstrapTable
              pagination={paginationFactory()}
              {...props.baseProps}
              noDataIndication={<EmptyTable text={text || "Tidak Ada Data"} />}
            />
            <br />
            {exportCsv && (
              <ExportCSVButton {...props.csvProps}>
                Export CSV!!
              </ExportCSVButton>
              )}
          </div>
        </div>
      )}
    </ToolkitProvider>
  ) : (
    <Skeleton width={"100%"} height={250} />
  );
}

export default Tabel;
