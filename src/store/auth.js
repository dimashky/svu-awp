import AuthAPI from "../api/AuthAPI";

const Auth = {
  state: {
    user: {}
  },
  mutations: {
    user(state, userObject) {
      state.user = userObject;
    }
  },
  actions: {
    checkToken({ commit }) {
      return new Promise((resolve, reject) => {
        const token = localStorage.getItem("accessToken") ?? "";
        if (!token) {
          reject();
        }
        AuthAPI.user(token)
          .then(user => {
            commit("user", user);
            resolve(user);
          })
          .catch(err => reject(err));
      });
    }
  },
  getters: {
    userName(state) {
      return !!state.user.username;
    },
    isAuthenticated(state) {
      return !!(state.user.id ?? "");
    },
    isAdmin(state) {
      return !!(state.user.isAdmin ?? false);
    }
  }
};

export default Auth;
