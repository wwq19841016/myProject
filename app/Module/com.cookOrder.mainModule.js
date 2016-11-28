/**
 * Created by Administrator on 2016/11/28.
 */

angular.module('com.cookOrder.mainModule',['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/order");
    $stateProvider.state("main", {
        url: "/main",

        templateUrl: "views/main.html"
    }).state("Login", {
        url: "/Login",
        templateUrl: "views/Login.html"
    }).state("order", {
        url: "/order",
        templateUrl: "views/order.html"
    }).state("bookOrder", {
        url: "/bookOrder",
        templateUrl: "views/bookOrder.html"
    }).state("bookMenu", {
        url: "/bookMenu",
        templateUrl: "views/bookMenu.html"
    })
});