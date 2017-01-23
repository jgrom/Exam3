angular.module('hobook-app').controller('RegisterController', RegisterController);

function RegisterController($http) {
  var vm = this;

  vm.register = function() {
    var user = {
      email    : vm.email,
      password : vm.password
    };

    if(!vm.email || !vm.password) {
      vm.error = 'Veuillez saisir un email et un mot de passe.';
    } else {
      if(vm.password !== vm.passwordRepeat) {
        vm.error = 'Veuillez vous assurer que les mots de passe soient identiques.';
      } else {
        $http.post('/api/users/register', user).then(function(result) {
          console.log(result);
          vm.message = 'Votre inscription est terminée, vous pouvez maintenant vous connecter.';
          vm.error = '';
        }).catch(function(error) {
          console.log(error);
        });
      }
    }
  };
}
