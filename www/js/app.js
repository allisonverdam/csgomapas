// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {


     var admobid = {};
  if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
      banner: 'ca-app-pub-9263273387626941/3161704917',
      interstitial: 'ca-app-pub-9263273387626941/2785323714',
      video: 'ca-app-pub-9263273387626941/4979433710'
    };
  } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
      banner: 'ca-app-pub-9263273387626941/3161704917',
      interstitial: 'ca-app-pub-9263273387626941/2785323714',
      video: 'ca-app-pub-9263273387626941/4979433710'
    };
  } else {
    admobid = { // for Windows Phone
      banner: 'ca-app-pub-9263273387626941/3161704917',
      interstitial: 'ca-app-pub-9263273387626941/2785323714',
      video: 'ca-app-pub-9263273387626941/4979433710'
    };
  }

  if(window.AdMob) AdMob.createBanner( {
      adId:admobid.banner,
      isTesting:false, 
      position:AdMob.AD_POSITION.BOTTOM_CENTER, 
      autoShow:true} );

  if(window.AdMob) AdMob.prepareInterstitial( {
  adId:admobid.interstitial, autoShow:false
    });

    if(window.AdMob) AdMob.prepareRewardVideoAd( {
  adId:admobid.video, autoShow:false
    });

    //sair do app
    $(document).on('backbutton', function(){
      if(window.confirm('Deseja sair?')) navigator.app.exitApp();
    });


    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

