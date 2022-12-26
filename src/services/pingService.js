import http from "../webservice/http-ping";

const netPing = {
  getAll(uri) {
    return http.get('api/ping/?host='+uri);
  },

}

export default netPing;