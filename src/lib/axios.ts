import axios from "axios";
// import Cookies from "js-cookie";

// Get the token from cookies
// const token = Cookies.get("authToken");

// if (token) {
//     axios.defaults.headers["Authorization"] = `Bearer ${token}`;
// }

export default axios.create({
    baseURL: "https://reqres.in/api",
    // headers: {
    //     "X-Requested-With": "XMLHttpRequest",
    //     "Content-Type": "application/json",
    // },
    withCredentials: true,
});