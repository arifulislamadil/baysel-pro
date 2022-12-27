import http from "../webservice/http-common";

const fetchParams = {
  getAll() {
    return http.get("");
  },

  
  getAllPrice() {
    return http.get("/prices");
  },

  // getAllUsers() {
  //   return http.get("/all/users");
  // },

  // getAllOrderSpec(mth,page) {
  //   return http.get(`/all/spec?mth=${mth}&page=${page}`);
  // },

  getAllOrderSpecData(mth) {
    return http.get(`/vol/${mth}`);
  },

  getAllPnl(mth) {
    return http.get(`/pnl/${mth}`);
  },


}

export default fetchParams;