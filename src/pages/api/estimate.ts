// import Axios from "./request/index";

// const axios = Axios.getInstance();

export default function handler(req, res) {
  res.status(200).json({ name: "test" });
}

// export function checkPassword(password: string) {
//   if (password == "123") return true;
//   return false;
// }

// export function sendOtpRequest(email: string) {
//   if (email == "admin@highkeynetwork.com") return true;
//   return false;
// }

// export function verifyOtpRequest(otp: string) {
//   if (otp == "555") return true;
//   return false;
// }

// export function logout(otp: string) {
//   return true;
// }
