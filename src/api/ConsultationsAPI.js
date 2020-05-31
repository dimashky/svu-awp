import $http from "./$http";

class ConsultationsAPI {
  static async fetch() {
    return (await $http.get("/api/consultations")).data;
  }

  static async create(request) {
    return (await $http.post("/api/consultations", request)).data;
  }

  static async update(id, request) {
    return (await $http.put("/api/consultations/" + id + "?answer=" + request))
      .data;
  }

  static async delete(id) {
    return (await $http.get("/api/consultations/" + id + "/delete")).data;
  }
}

export default ConsultationsAPI;
