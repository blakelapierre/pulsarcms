'use strict';

describe('Controller: ServiceErrorAlertCtrl', function () {

  // load the controller's module
  beforeEach(module('pulsarClientApp'));

  var ServiceErrorAlertCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceErrorAlertCtrl = $controller('ServiceErrorAlertCtrl', {
      $scope: scope
    });
  }));

//   it('should attach a list of awesomeThings to the scope', function () {
//     expect(scope.awesomeThings.length).toBe(3);
//   });
});
