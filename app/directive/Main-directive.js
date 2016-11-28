/**
 * Created by Administrator on 2016/11/24.
 */
angular.module('com.cookOrder.mainModule').directive('appMain',
    function() {
        return {
            restrict: 'E',
            templateUrl: 'views/main.html'
        };
    }).directive('appHead',function(){
        return {
         restrict: 'E',
             templateUrl: 'views/bookMenu.html'

    };
})