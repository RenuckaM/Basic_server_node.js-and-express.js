## Description
This project demonstrates how to create a basic server using Node.js and Express.js. It provides a simple API that can be extended for more functionality.

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RenuckaM/Basic_server_node.js-and-express.js.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Basic_server_node.js-and-express.js
   ```

3. **Initialize npm:**
   ```bash
   npm init --y
   ```

4. **Install Express:**
   ```bash
   npm install express
   ```

## File Structure
```
.
├── app.js         # Express server file
└── index.js       # Basic Node.js server file
```

## Code Snippets

### `index.js` (Node.js Server)
```javascript
import { createServer } from 'node:http';

const hostname = "127.0.0.1"
const port = 3000

const server = createServer (function(req, res){
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain")
    res.end("Hello World!");
})

server.listen(port, hostname, function(){
    console.log('Server is listening');
})
```
*Screenshot of index.js code*

### `app.js` (Express.js Server)
```javascript
import express from "express"

const app = express()
const port = 3000

app.get("/",(req,res)=> {
    res.send("Hello World!")
})

app.get("/login", (req, res) => {
    res.send("Login to your account")
})

app.listen(port, () => {
    console.log("Server is running!!!")
})
```
*Screenshot of app.js code*

## Usage
1. **Start the Express server:**
   ```bash
   node app.js
   ```
   Open your browser and go to `http://localhost:3000` to see the message from the Express server.

2. **Start the Node.js server:**
   ```bash
   node index.js
   ```
   Open your browser and go to `http://localhost:3000` to see the message from the Node.js server.

## License
This project is licensed under the MIT License.
