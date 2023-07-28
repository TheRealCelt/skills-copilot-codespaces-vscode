// Neill effed up
//Create Web Server
var express = require('express');
var app = express();
var fs = require('fs');

//Create HTTP Server
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

//Define Port
var port = process.env.PORT || 8080;

//Create Database
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/comments';

//Connect to Database
mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close(