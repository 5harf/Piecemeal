// # Home Controller

// ##### [Back to Table of Contents](./tableofcontents.html)

// **Summary**: Check if bill already exists or not and creates new bill.


(function() {
  'use strict';

  angular.module('Piecemeal')
    .factory('homeFactory', homeFactory);

  homeFactory.$inject = ['$http'];

  // **Parameters:** TODO


  function homeFactory($http) {
    var services = {
      checkCode: checkCode,
      createEvent: createEvent,
      addVenmoUser: addVenmoUser
    };

    function checkCode(code) {
      return $http({
        method: 'GET',
        url: '/checkCode/' + code
      });
    };

    function createEvent(data) {
      return $http({
        method: 'POST',
        url: '/auth/createEvent',
        data: data
      });
    };


    function addVenmoUser(data) {
      return $http({
        method: 'PUT',
        url: '/addVenmoUser',
        data: data
      })
    };

    return services;
  }

})();
