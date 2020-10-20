const fs = require("fs");
const axios = require("axios");

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I could not find that file 😀");
      resolve(data);
    });
  });
};

readFilePromise(`${__dirname}/dog.txt`)
  .then((result) => {
    axios
      .get(`https://dog.ceo/api/breed/${result}`)
      .then((result) => {
        fs.writeFile("dog-img.txt", result, (err) => {
          if (err) {
            console.error(err);
          }
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  })
  .catch((err) => {});
