'use strict';


angular.module('bradwertmanApp', [
  'ngSanitize',
  'ui.router',
  'ngTouch'
])

.config(function ($stateProvider, $urlRouterProvider) {
  //delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .state('resume', {
    url: '/resume',
    templateUrl: 'views/resume.html',
    controller: 'ResumeCtrl'
  })
  .state('work', {
    url: '/work',
    templateUrl: 'views/work.html',
    controller: 'WorkCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .state('header', {
    templateUrl: 'views/header.html',
    controller: 'HeaderCtrl'
  })
  $urlRouterProvider.otherwise('/');
})

// Nav button animations
//var mobile_travel =(parseInt($('.nav-bar').offset().left) * 2) + $('.nav-bar').width();
//var centered = ($(window).width() - $('.nav-bar').width()) / 2
//var rotation = (Math.round(((mobile_travel/circumference) * Math.PI * 57.2957795)/360)) * 360; // in degrees

// var desktop_travel = $(window).width() - $('#header-text').offset().left - $('#header-text').width();
//var rightCentered = ($(window).width() - $('#header-text').width() - parseInt($('#header-text').css('marginLeft')))
// var circumference = $('.ball').width() * Math.PI;
// var rotation = (Math.round(((desktop_travel/circumference) * Math.PI * 57.2957795)/360)) * 360; // in degrees

//set the start postion
// $('.nav-bar').css('margin-left', ($(window).width()).toString() + "px").queue(

// function(){
//   break;
//   $('.nav-bar').animate({ marginLeft: desktop_travel }, 1800);
//   $({deg: 0}).animate({deg: rotation}, {
//     duration: 1800,
//     step: function(now){
//       $(".ball-text").css({
//         transform: "rotate(-" + now + "deg)"
//       });
//     }
//   });
//   $(this).dequeue();
// });

// $('.nav-bar').css('margin-left', (mobile_travel).toString() + "px").queue(
// function(){
//   $('.nav-bar').animate({ marginLeft: centered }, 3000);
//   $({deg: 0}).animate({deg: rotation}, {
//     duration: 3000,
//     step: function(now){
//       $(".ball-text").css({
//         transform: "rotate(-" + now + "deg)"
//       });
//     }
//   });
//   $(this).dequeue();
// });






