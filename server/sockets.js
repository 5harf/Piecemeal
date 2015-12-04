// # Socket Connection Handler

var connect = function(eventUrl, eventInfo, io) {
  // Set the Socket.io namespace to the eventUrl.
  var mealEvent = io.of(eventUrl);

  mealEvent.once('connection', function(socket) {

    socket.emit('join', eventInfo);

    socket.on('addDish', function(data) {
      //TODO add dish to DB
      socket.broadcast.emit('dishAdded', {cost: data.cost, name: data.name});
    });

  });
};

// Required by [server.js]
module.exports = connect;
