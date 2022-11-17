import Swal from "sweetalert2";

function Success(message) {
  Swal.fire({
    title: "Berhasil !",
    text: message,
    icon: "success",
  }).then(() => {
    window.location.reload();
  });
}

function SuccessNoReload(message) {
  Swal.fire({
    title: "Berhasil !",
    text: message,
    icon: "success",
  });
}

function Failed(message) {
  Swal.fire({
    title: "Gagal !",
    text: message,
    icon: "error",
  });
}

function Info(message) {
  Swal.fire({
    title: "Gagal !",
    text: message,
    icon: "info",
  });
}
const data = { Failed, Success, SuccessNoReload, Info };

export default data;
