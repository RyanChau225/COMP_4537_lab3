// // server.js
// const http = require('http');
// const url = require('url');
// const utils = require('./modules/utils');

// const server = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);
//     const path = parsedUrl.pathname;
//     const trimmedPath = path.replace(/^\/+|\/+$/g, '');

//     if (trimmedPath === 'COMP4537/labs/3/getDate') {
//         const name = parsedUrl.query.name;
//         const date = utils.getDate();
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(`<p style="color:blue;">Hello ${name}, What a beautiful day. Server current date and time is ${date}</p>`);
//     } else {
//         res.writeHead(404);
//         res.end();
//     }
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const http = require('http');
const { getDate } = require('./modules/utils');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/COMP4537/labs/3/getDate') && req.method === 'GET') {
    // Extract the name from the query string
    const url = new URL(req.url, `http://${req.headers.host}`);
    const name = url.searchParams.get('name') || 'User';

    // Get the current date
    const currentDate = getDate();

    // Construct the greeting message
    const message = `<p style="color: blue;">Hello ${name}, What a beautiful day. Server current date and time is ${currentDate}</p>`;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(message);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found, Append to your url /COMP4537/labs/3/getDate/?name=(YOUR NAME)');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});