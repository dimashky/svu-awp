import $http from "./$http";

export default class AuthAPI {
  static async register(username, password) {
    const body = { username, password };
    return (await $http.post("/api/users/register", body)).data;
  }

  static async login(Username, Password) {
    const body = { Username, Password };
    return (await $http.post("/api/users/login", body)).data;
  }

  static async user(token) {
    this.setAuthorizationHeader(token);
    return (await $http.get("/api/users/user")).data;
  }

  static async logout() {
    localStorage.removeItem("accessToken");
    return true;
  }

  static setAuthorizationHeader(accessToken) {
    $http.defaults.headers.Authorization = `Bearer ${accessToken}`;
  }
}
