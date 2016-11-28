/**
 * Created by Administrator on 2016/11/22.
 */
angular.module('com.cookOrder.mainModule').directive('appBody',
        function() {
            return {
                restrict: 'E',
                templateUrl: 'views/order.html'
            };
        });