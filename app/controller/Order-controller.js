/**
 * Created by Administrator on 2016/11/26.
 */
angular.module('com.cookOrder.mainModule').controller("com.cookOrder.mainModule.orderController",function($scope){
           $scope.orders=[
               {'name':"小炒肉","price":'10','desc':'微辣','value':0},
               {

                   'name':"蜜罐香蕉","price":'15','desc':'甜','value':0
               },
               {

                   'name':"家常豆腐","price":'12','desc':'好吃','value':0
               }

           ];
    $scope.addValue = function(obj) {
        obj.value=obj.value+1;
    }
    $scope.delValue=function(obj)
    {
        if (obj.value>0)
        {
            obj.value=obj.value-1;
        }
    }
    $scope.sumMoney=function () {
        var sums=0;
         for(var i in $scope.orders)
         {
              var a=$scope.orders[i].value*$scope.orders[i].price;
             if (a==="NAN")
                 return sums;
             else
                 sums+=a;

         }
        return sums;

    }
});