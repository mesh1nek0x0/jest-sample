const axios = require("axios");

module.exports = class Helper {
  getData() {
    return axios
      .get("http://dummy.restapiexample.com/api/v1/employee/42932")
      .then(function(response) {
        // handle success
        return { code: 0, body: response.data };
      })
      .catch(function(error) {
        // handle error
        console.log(error);
        return { code: 1, bode: error.message };
      });
  }
};
