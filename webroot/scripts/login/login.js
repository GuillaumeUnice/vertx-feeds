(function() {
  'use strict';
  
  vertxFeedsApp
    .component('login', Login());


  function Login() {
    return {
      templateUrl: 'scripts/login/login.html',
      bindings: {
      },
      controller: [
        'UserService',
        LoginCtrl
      ],
      controllerAs: 'login',
    };
  }

  function LoginCtrl(UserService) {

    var vm = this;
    vm.logout = logout;

    vm.$onInit = function () {
      vm.token = UserService.getToken();
    }

    function logout() {
      UserService.logout(function() {
        vm.token = null;
      })
    }

  }
}());
