import React, { Component, useState, useEffect,lazy } from "react";

import { Link } from "react-router-dom";
import { Panel, PanelHeader,PanelBody } from "../panel/panel.jsx";
import {
  hideModal,
  isLoading,
  showModal,
  isEdit,
} from "../../actions/datamaster_action";
import { Field, reduxForm,formValueSelector } from "redux-form";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { ToastNotification } from "./notification.jsx";
import { reset } from "redux-form";
import { deleteData, postData, putData,getData2,postData2,putDataNoTImeOut2, getData,getDataNoTimeOut2,getDataNoTimeOut,postDataNoTImeOut,postDataNoTImeOut2 } from "../../config/axios.jsx";
import Tabel from "./tabel.jsx";
import ModalGlobal from "./ModalGlobal.jsx";
import { ReanderField, HiidenFiled,ReanderSelect,SkeletonLoading,InputDate,ReanderCheckBox } from "./field";
import { v4 as uuidv4 } from "uuid";
import { ErrorHandling,convertBase64,getItem, setItem,localStoragedecryp,localStorageencryp,formatDate,getTglSystem,getToday,formatGram } from "./function.jsx";
import { Gramasi,NumberOnly, } from "../../Validasi/normalize";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import imgfound from "../../assets/img/temp.jpg";
import BootstrapTable from "react-bootstrap-table-next";
import Camera from "react-html5-camera-photo";
import * as moment from "moment-timezone";
import { createNumberMask } from "redux-form-input-masks";
import DualListBox from "react-dual-listbox";
import Loading from 'react-fullscreen-loading';



export {
  React,
  getToday,
  lazy,
  Gramasi,
  Loading,
  PanelBody,
  getDataNoTimeOut,
  putDataNoTImeOut2,
  postDataNoTImeOut2,
  getDataNoTimeOut2,
  postDataNoTImeOut,
  getData2,
  formatGram,
  postData2,
  DualListBox,
  formValueSelector,
  ReanderCheckBox,
  NumberOnly,
  localStorageencryp,
  InputDate,
  getTglSystem,
  localStoragedecryp,
  imgfound,
  formatDate,
  moment,
  createNumberMask,
  Camera,
  convertBase64,
  ToolkitProvider,
  SkeletonLoading,
  BootstrapTable,
  useState,
  useEffect,
  ErrorHandling,
  uuidv4,
  setItem,
  getItem,
  isLoading,
  showModal,
  isEdit,
  ToastNotification,
  Swal,
  reset,
  Link,
  PanelHeader,
  Component,
  Panel,
  ModalGlobal,
  Tabel,
  connect,
  Field,
  hideModal,
  reduxForm,
  getData,
  HiidenFiled,
  ReanderField,
  ReanderSelect,
  deleteData,
  postData,
  putData,
};
