const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////////////////////////////
// SERVER
////////////////////////////////////////
// this code run only sing time when ever first time code execution
const apiData = fs.readFileSync(`${__dirname}/data/data1.json`, 'utf-8');
const apiDataObj = JSON.parse(apiData);

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the Overview');
  } else if (pathName === '/product') {
    res.end('This is the Product');
  } else if (pathName === '/api') {
    // All time call when ever api end poin call
    // fs.readFile(`${__dirname}/data/data1.json`, 'utf-8', (err, data) => {
    //   const userData = JSON.parse(data);
    //   console.log(userData);
    //   res.writeHead(200, {
    //     'Content-type': 'application/json',
    //   });
    //   res.end(data);
    // });
    // Single time call
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    res.end(apiData);
  } else {
    res.writeHead(404);
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'Hello Header',
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(4000, '127.0.0.1', () => {
  console.log('Server is running');
});
