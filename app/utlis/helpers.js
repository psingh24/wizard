// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var helpers = {

  modifyTerm: function(term) {
    return term.toUpperCase();
  },

    getData: function() {
        return axios.get("/api");
    },

     // This function posts new searches to our database.
  postData: function(query) {
    return axios.post("/api", { query: query });
  }

};





// We export the API helper
module.exports = helpers;