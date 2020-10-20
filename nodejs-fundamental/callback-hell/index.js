const fs = require("fs");
const axios = require("axios");

/**
 * Callback Hell
 */

fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
  console.log(`Breed: ${data}`);
  axios
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((result) => {
      fs.writeFile("dog-img.txt", "utf-8", result, (err) => {
        if (err) {
          console.error(err);
        }
        console.log("Random dog image saved");
      });
    })
    .catch((err) => {
      console.error(err);
    });
});
