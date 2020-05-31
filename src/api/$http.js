import axios from "axios";

const $http = axios;
export const url = process.env.VUE_APP_SERVER_IP;

$http.defaults.baseURL = url;

const accessToken = localStorage.getItem("accessToken");
$http.defaults.headers.Authorization = `Bearer TEST`;

if (accessToken) {
  $http.defaults.headers.Authorization = `Bearer ${accessToken}`;
}

$http.defaults.headers["Content-Type"] = "application/json";
$http.defaults.headers["Accept"] = "application/json";

export default $http;
