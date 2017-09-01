// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var helpers = {

  getData: function() {
        return axios.get("/api");
    },
  getSavedData: function() {
        return axios.get("/api/saved");
    },

     // This function posts new searches to our database.
  postData: function(query) {
    return axios.post("/api", { query: query });
  },

  saveData: function(id) {
    return axios.post("/save", {id: id})
  }

};





// We export the API helper
module.exports = helpers;