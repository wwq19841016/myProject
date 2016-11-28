/**
 * Created by Administrator on 2016/11/20.
 */
angular.module('com.cookOrder.mainModule')
    .directive('appFooter', function() {

            return {
                restrict: 'E',
                templateUrl: 'views/foot.html'
            };

    });
