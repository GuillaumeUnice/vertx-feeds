(function () {
    'use strict';

vertxFeedsApp
.factory ( 'UserService', UserService );

UserService.$inject = [
'$resource',
];


function UserService ( $resource ) {
    return {
        login: login,
        logout: logout,
        register: register,
        getToken: getToken
    };


    ///////////////////////////////////////////////////////

    function login ( username, password ) {
        var data = {
            username: username,
            password: password
        }

        var login = $resource ( 'http://localhost:9000/api/login',
        data,
        { 'post': { 
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformResponse: function ( data, headers ) {
                localStorage.setItem('user', data);
                var response = {};
                response.data = JSON.parse(data);
                response.headers = headers ();
                return response;
            } }
        });
        return login.post ().$promise;
    }

    function logout ( ) {

        return $resource('http://localhost:9000/api/logout?accessToken='+getToken()).save(
            {}
        ).$promise
        .then(function() {
            localStorage.removeItem('user');
        });
    }

    function register ( username, password ) {
        var data = {
            username: username,
            password: password
        }

        var register = $resource ( 'http://localhost:9000/api/register',
        data,
        { 'post': { 
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformResponse: function ( data, headers ) {
                var response = {};
                response.data = JSON.parse(data);
                response.headers = headers ();
                return response;
            } }
        });
        return register.post().$promise;
    }

    function getToken() {
        var token = JSON.parse(localStorage.getItem('user'));
        if(token) {
            return token.accessToken
        }
        return null;
    }

}
}) ();