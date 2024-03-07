import { reset } from "redux-form";
import { NotifError, NotifReactif } from "./notification";
import React, { forwardRef } from "react";
// import compress from "compress-base64";
// import Resizer from "react-image-file-resizer";
// import firebase from "../../firebase";

// export function postImage(file, name) {
//   return new Promise((resolve, reject) => {
//     const storage = firebase.storage();
//     let stoageRef = storage.ref("NSIPIC/KRESNO/" + name + ".jpg");
//     stoageRef
//       .put(file)
//       .then((res) => {
//         stoageRef.getDownloadURL().then(function (url) {
//           resolve(url);
//         });
//       })
//       .catch((err) => {
//         reject(JSON.parse(err));
//       });
//   });
// }
export function isBase64(str) {
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
}
// export function deleteImage(name) {
//   return new Promise((resolve, reject) => {
//     let storage = firebase.storage();
//     let storageRef = storage.ref();
//     let desertRef = storageRef.child(`NSIPIC/KRESNO/${name}.jpg`);
//     desertRef
//       .delete()
//       .then(function () {})
//       .catch(function (error) {
//         reject(error);
//       });
//   });
// }

// export function getImage(file) {
//   return new Promise((resolve, reject) => {
//     const storage = firebase.storage();
//     let stoageRef = storage.ref("NSIPIC/KRESNO/" + file + ".jpg");
//     stoageRef
//       .getDownloadURL()
//       .then(function (url) {
//         resolve(url);
//       })
//       .catch((err) => {
//         reject(JSON.parse(err.customData.serverResponse).error);
//       });
//   });
// }
export const CustomeInputDate = forwardRef(({ value, onClick }, ref) => (
  <>
    <div className="input-group mb-3">
      <input
        type="text"
        defaultValue={value}
        readOnly
        className="form-control"
        placeholder="Masukan Tanggal"
        aria-label="Masukan Tanggal"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <span className="input-group-text" id="basic-addon2">
          <i
            onClick={onClick}
            ref={ref}
            className="fa fa-calendar-alt"
            style={{ cursor: "pointer" }}
          ></i>
        </span>
      </div>
    </div>
  </>
));

// export const resizeFile = (file) =>
//   new Promise((resolve, reject) => {
//     Resizer.imageFileResizer(
//       file,
//       720,
//       1366,
//       "JPEG",
//       50,
//       0,
//       (uri) => {
//         resolve(uri);
//       },
//       "base64"
//     );
//   });

export const dataURLtoFile = (dataurl, filename) => {
  // export const dataURLtoFile = (dataurl, filename) =>
  let arr = dataurl.split(","),
    // mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename + ".jpg", { type: "image/jpg" });
};
export const hiddenRecod = (text) => {
  let hasil = "";
  if (Number(text) === 0) {
    hasil = `  `;
  } else {
    hasil = text;
  }
  return hasil;
};
export const setItem = (nama, data) => {
  localStorage.setItem(nama, JSON.stringify(data));
};
export const getItem = (nama) => {
  return localStorage.getItem(nama) === null
    ? ""
    : JSON.parse(localStorage.getItem(nama) || "");
};
export const getToday = () => {
  return (
    new Date().getFullYear() +
    "-" +
    ("0" + (new Date().getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + new Date().getDate()).slice(-2)
  );
};
export const getTglSystem = () => {
  return getUserdata().tgl_system;
};

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export const localStorageencryp = (nama, data) => {
  localStorage.setItem(encryptascii(nama), encryptascii(data));
};
export const localStoragedecryp = (nama) => {
  return decryptascii(localStorage.getItem(encryptascii(nama))) || [];
};
export const getUserdata = () => {
  return JSON.parse(localStoragedecryp("userdata"));
};

export function filterAngka(data) {
  return data === undefined ? 0 : data;
}
export function filtertext(data) {
  return data === undefined ? "-" : data;
}
export const ErrorHandling = (
  err = "",
  endpoint,
  data,
  dispatch,
  table,
  hideModal,
  modalReset
) => {
  return new Promise((resolve, reject) => {
    let response =
      err.response === undefined
        ? "Koneksi Bermasalah"
        : err.response.data || "-";
    let check = response.includes("DELETED");
    check
      ? NotifReactif(err, endpoint, data)
          .then(() => {
            dispatch(table);
          })
          .then(() => {
            dispatch(hideModal);
          })
          .then(() => {
            dispatch(reset(modalReset));
          })
          .then(resolve("berhasil"))
          .catch(reject("error"))
      : NotifError(
          err.response === undefined ? "Koneksi Bermasalah" : err.response.data
        )
          .then(resolve("berhasil"))
          .catch(reject("error"));
  });
};

export default function LoadingButton(props) {
  let className = props.className;
  let text = props.text;
  return (
    <button className={className} type="button">
      {" "}
      <i className="fas fa-spinner fa-spin"></i> {text}
    </button>
  );
}
export const encryptascii = (str) => {
  let key = process.env.REACT_APP_ENCKEY;
  let isencryt = process.env.REACT_APP_IS_ENCRYPT;

  let dataKey = {};
  for (let i = 0; i < key.length; i++) {
    dataKey[i] = key.substr(`${i}`, 1);
  }

  let strEnc = "";
  let nkey = 0;
  let jml = str.length;

  for (let i = 0; i < parseInt(jml); i++) {
    strEnc =
      strEnc + hexEncode(str[i].charCodeAt(0) + dataKey[nkey].charCodeAt(0));

    if (nkey === Object.keys(dataKey).length - 1) {
      nkey = 0;
    }
    nkey = nkey + 1;
  }
  return isencryt === "true" ? strEnc.toUpperCase() : str;
};

export const decryptascii = (str) => {
  let isencryt = process.env.REACT_APP_IS_ENCRYPT;
  if (str !== null) {
    let key = process.env.REACT_APP_ENCKEY;
    let dataKey = {};
    for (let i = 0; i < key.length; i++) {
      dataKey[i] = key.substr(`${i}`, 1);
    }

    let strDec = "";
    let nkey = 0;
    let jml = str.length;
    let i = 0;
    while (i < parseInt(jml)) {
      strDec =
        strDec + chr(hexdec(str.substr(i, 2)) - dataKey[nkey].charCodeAt(0));
      if (nkey === Object.keys(dataKey).length - 1) {
        nkey = 0;
      }
      nkey = nkey + 1;
      i = i + 2;
    }
    return isencryt === "true" ? strDec : str;
  }
};
export const hexEncode = (str) => {
  var result = "";
  result = str.toString(16);
  return result;
};

export const hexdec = (hex) => {
  var str = "";
  str = parseInt(hex, 16);
  return str;
};
export const chr = (asci) => {
  var str = "";
  str = String.fromCharCode(asci);
  return str;
};

export const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const formatGram = (gram, lenght) => {
  return (
    parseFloat(gram || 0)
      // .toFixed(3)
      .toFixed(lenght)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
};

export const pembulatan = (harga) => {
  const parameter = { value: 500 };
  const harga_calculated = harga;

  const harga_modded = harga_calculated % Number(parameter.value);

  let harga_jual = harga_calculated;
  if (harga_modded !== 0) {
    harga_jual = harga_jual - harga_modded + Number(parameter.value);
  }
  return harga_jual;
};

// export const Compressor = (file) => {
//     compress(file, {
//       width: 400,
//       type: 'image/png', // default
//       max: 200, // max size
//       min: 20, // min size
//       quality: 0.8
//     }).then((res) => {
//       console.log(res);
//         return res
//     })
// }
