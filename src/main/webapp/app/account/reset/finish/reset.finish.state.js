(function() {
    'use strict';

    angular
        .module('samaAutoV1App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('finishReset', {
            parent: 'account',
            url: '/reset/finish?key',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/account/reset/finish/reset.finish.html',
                    controller: 'ResetFinishController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
