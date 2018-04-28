const Room = require('./roomModel');

var rooms = {};

rooms.createRoom = (req, res, next) => {
  let room = {
    roomnumber: req.body.roomnumber,
  }

  Room.create(room, (err, data) => {
    if (err) {
      console.log("Error :", err);
    }
  });
  res.redirect('/editrooms');
};

rooms.updateRoom = (req, res, next) => {
  Room.findOne({_id: req.body._id}, function (err, found) {
    found.roomnumber = req.body.roomnumber;

    found.save(function (err) {
      req.method = 'GET';
      });
    });
    
}

rooms.deleteRoom = (req, res, next) => {
  Room.find({_id: req.body._id}).remove((err) => {
    req.method = 'GET';
    res.redirect('/');
  });
}

rooms.allRooms = (next) => {
  Room.find({}, next);
}

module.exports = rooms;