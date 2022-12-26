import http from "../webservice/http-pilotAPI";

const fetchParamsExt = {
  getAll() {
    return http.get("/all");
  },

  get(id) {
    return http.get(`/${id}`);
  },

  getDesc(id) {
    return http.get(`/${id}/comments`);
  },

  create(data) {
    return http.post("/", data);
  },

  update(id, data) {
    return http.put(`/${id}`, data);
  },

  delete(id) {
    return http.delete(`/${id}`);
  },


  findByTitle(title) {
    return http.get(`/search?q=${title}`);
  }
}

export default fetchParamsExt;