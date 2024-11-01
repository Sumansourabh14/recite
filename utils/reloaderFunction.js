const axios = require("axios");
const url = `https://recite.onrender.com/api/v1/random`;
const interval = 40000; // Interval in milliseconds (40 seconds)

//Reloader Function
function reloadService() {
  axios
    .get(url)
    .then((response) => {
      console.log(
        `Reloaded at ${new Date().toISOString()}: Status Code ${
          response.status
        }`
      );
    })
    .catch((error) => {
      console.error(
        `Error reloading at ${new Date().toISOString()}:`,
        error.message
      );
    });
}

module.exports = { reloadService, interval };
