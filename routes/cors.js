const express = require('express'); 

const cors = require('cors'); 

const app = express(); 

 

const whitelist = ['http://localhost:3000', 'https://localhost:3443', 'http://localhost:3001']; 

var corsOptionsDelegate = (req, callback) => { 

    var corsOptions; 

    console.log("================="+req.header('Origin')); 

    if(whitelist.indexOf(req.header('Origin')) !== -1) { 

        callback(null, true ); 

    } 

    else { 

        callback(new Error("Not allowed by CORS")); 

    } 

     

}; 

 

exports.cors = cors(); 

exports.corsWithOptions = cors(corsOptionsDelegate);