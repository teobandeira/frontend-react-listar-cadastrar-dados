import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// const express = require("express");
// const app = express();
// const cors = require("cors"); // auxilia na conexão do front com o backend 

ReactDOM.render(
      <App />,
    document.getElementById('root')
);

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Servidor OK");
// });

// app.listen(3000, () => {
//     console.log("Server rodando 3001");
// });