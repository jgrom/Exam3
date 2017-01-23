angular.module('hobook-app').controller('HotelsController', HotelsController);

function HotelsController(hotelDataFactory) {
  var vm = this;
  vm.title = 'Ho Book App';
  hotelDataFactory.hotelList().then(function(response) {
    // console.log(response);
    vm.hotels = response.data;
  });
}
