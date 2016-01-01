(function() {
  'use strict';

  angular.module('Piecemeal')
    .controller('AllDishesCtrl', AllDishesCtrl);

  AllDishesCtrl.$inject = ['socketFactory', 'appFactory', '$scope', 'allDishesFactory'];

  function AllDishesCtrl(socketFactory, appFactory, $scope, allDishesFactory) {
    var self = this;
    appFactory.copySessData(self);
    appFactory.checkCode()
    // load data on page refresh
    $scope.$on('joined', function() {
      self.data = appFactory.data;
      console.log("Joined the All Dishes room.");
      self.calcUserCurrentTotal(self.data);

    });

    // load data when *not* on page refresh
    self.data = appFactory.data;

    if (!appFactory.data) {
      socketFactory.init();
      appFactory.initListeners();
    }

    self.getUsersByDish = appFactory.getUsersByDish;

    self.isOnDish = function(dishUsers, user_id) {
      var result = false;
      return dishUsers.reduce(function(isOnDish, id) {
        if (id.toString() === user_id.toString()) {
          return true;
        }
        return isOnDish;
      }, false);
    };

    self.shareDish = function(dish_id, user_id, users) {
      if (!self.isOnDish(users, user_id)) {
        socketFactory.emit('shareDish', {
          dish_id: dish_id,
          user_id: user_id
        });
        appFactory.shareDish(dish_id, user_id);
      }
    };

    self.unshareDish = function(dish_id, user_id, users) {
      if (self.isOnDish(users, user_id)) {
        socketFactory.emit('unshareDish', {
          dish_id: dish_id,
          user_id: user_id
        });
        appFactory.unshareDish(dish_id, user_id);
      }
    };

    ////// AddDish functionality
    $('.modal-trigger').leanModal({
      opacity: 0.7,
      in_duration: 230,
      out_duration: 230,
      calcUserCurrentTotal: self.calcUserCurrentTotal
    });

    self.calcUserCurrentTotal = function(data) {
      return (!data) ? 0 : allDishesFactory.calculateRunningTotal(data);
    };

    self.addDish = function(name, cost) {
      var dish = {
        cost: Number(cost),
        name: name,
        user_id: self.user_id,
        event_id: self.event_id,
        users: [self.user_id]
      };
      socketFactory.emit('addDish', dish);
      self.amount = '';
      self.dishName = '';
      self.addedDish = true;
      self.previousDish = name;
    };

  }
})();
