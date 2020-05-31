import $http from "./$http";

class TopicsAPI {
  static async fetch() {
    return (await $http.get("/api/topics")).data;
  }

  static async show(id) {
    return (await $http.get("/api/topics/" + id)).data;
  }

  static async create(request) {
    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };
    return (await $http.post("/api/topics", request, config)).data;
  }

  static async update(id, request) {
    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };
    return (await $http.put("/api/topics/" + id, request, config)).data;
  }

  static async delete(id) {
    return (await $http.get("/api/topics/" + id + "/delete")).data;
  }
}

export default TopicsAPI;
