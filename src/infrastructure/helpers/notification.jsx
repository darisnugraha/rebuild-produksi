import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export function ToastNotification(status, text) {
  return new Promise((resolve, reject) => {
    Toast.fire({
      icon: status,
      title: text,
    })
      .then(resolve("berhasil"))
      .catch(reject("error"));
  });
}
