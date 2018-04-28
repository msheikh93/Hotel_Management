const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


const verifyUser = require('./user/verifyUser');
const customers = require('./customer/customers');
const rooms = require('./room/rooms');

const app = express();

mongoose.connect('');

app.set('view engine', 'ejs');

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.render('./../client/Login');
});

app.post('/login', verifyUser);

app.get('/lobby', (req, res) => {
    res.render('./../client/Lobby');
});

app.post('/createCustomer', customers.createCustomer, (req, res) => {
    res.render('./../client/Lobby');
});

app.get('/admin', (req, res) => {
    res.render('./../client/Admin');
});

app.get('/getinfo', (req, res) => {
    customers.allCustomers((err, customers) => {
        if (err) throw err;
        res.send(customers);
    });
});

app.get('/getallrooms', (req, res) => {
    rooms.allRooms((err, rooms) => {
        if (err) throw err;
        res.send(rooms);
    });
});

app.post('/createroom', rooms.createRoom);

app.get('/createroom', (req, res) => {
    res.redirect('/addrooms');
});

app.post('/updateroom', rooms.updateRoom);

app.post('/deleteroom', rooms.deleteRoom);

app.post('/updateinfo', customers.updateCustomer);

app.get('/updateinfo', (req, res) => {
    res.redirect('/admin');
});

app.post('/deletecustomer', customers.deleteCustomer);

app.get('/deletecustomer', (req, res) => {
    res.redirect('/admin');
});

app.get('/editcustomer', (req, res) => {
    customers.allCustomers((err, customers) => {
        if (err) throw err;
        res.render('./../client/editInformation/EditCustomer',{customers: customers});
    });
});

app.get('/editemployee', (req, res) => {
    res.render('./../client/editInformation/EditEmployee');
});

app.get('/editrooms', (req, res) => {
    res.render('./../client/editInformation/EditRooms');
});

app.get('/roomservice', (req, res) => {
    res.render('./../client/RoomService', { username: "room", password: "password" });
});

app.listen(3000);

module.exports = app;
