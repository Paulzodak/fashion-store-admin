import Swal from "sweetalert2";
export const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  background: "black",
  color: "white",
  width: "17rem",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
export const BASEURL = "http://localhost:5000/api";
// export const BASEURL = "https://fashion-store-server-wgix.vercel.app/api";
