const fs = require('fs');

// Non Blocking, asynchornous way code execution
fs.readFile('input.txt', 'utf-8', (err, data) => {
  // Statement
  console.log(data);
});

console.log('Will read file');

// call back hell

fs.readFile('./start.txt', 'utf-8', (err, data1) => {
  if (err) {
    throw err;
  }
  fs.readFile(`./${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile('./append.txt', 'utf-8', (err, data3) => {
      console.log(data3);
      fs.writeFile(
        './final-call-hell-create.txt',
        `${data2}\n${data3}`,
        'utf-8',
        (err) => {
          console.log('You file has been written');
        }
      );
    });
  });
});
