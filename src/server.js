/*const express = require("express");
const { createServer } = require('node:http');
const { join } = require('node:path');

const app = express();
const server = createServer(app);

const dotenv = require('dotenv');
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.urlencoded({extended: 'false'}));
app.use(express.json());

const html_path = join(__dirname, "../public_html/");

app.use(express.static(html_path)); // serve all the files
*/

let http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080); 
