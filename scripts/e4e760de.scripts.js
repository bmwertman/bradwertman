"use strict";angular.module("bradwertmanApp",["ngSanitize","ui.router","ngTouch"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){a.state("home",{url:"/",templateUrl:"views/home.html",controller:"HomeCtrl"}).state("resume",{url:"/resume",templateUrl:"views/resume.html",controller:"ResumeCtrl"}).state("work",{url:"/work",templateUrl:"views/work.html",controller:"WorkCtrl"}).state("contact",{url:"/contact",templateUrl:"views/contact.html",controller:"ContactCtrl"}).state("header",{templateUrl:"views/header.html",controller:"HeaderCtrl"}),b.otherwise("/"),c.html5Mode(!0)}]),angular.module("bradwertmanApp").controller("HomeCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("bradwertmanApp").controller("ResumeCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("bradwertmanApp").controller("WorkCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("bradwertmanApp").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);