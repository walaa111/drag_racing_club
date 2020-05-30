/*

 * Licensed to the Apache Software Foundation (ASF) under one

 * or more contributor license agreements.  See the NOTICE file

 * distributed with this work for additional information

 * regarding copyright ownership.  The ASF licenses this file

 * to you under the Apache License, Version 2.0 (the

 * "License"); you may not use this file except in compliance

 * with the License.  You may obtain a copy of the License at

 *

 * http://www.apache.org/licenses/LICENSE-2.0

 *

 * Unless required by applicable law or agreed to in writing,

 * software distributed under the License is distributed on an

 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY

 * KIND, either express or implied.  See the License for the

 * specific language governing permissions and limitations

 * under the License.

 */

var app = {

    // Application Constructor

    initialize: function () {

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);





    },



    // deviceready Event Handler

    //

    // Bind any cordova events here. Common events are:

    // 'pause', 'resume', etc.

    onDeviceReady: function () {

        this.receivedEvent('deviceready');

 var inAppBrowserbRef = cordova.InAppBrowser.open('https://games.cdn.famobi.com/html5games/d/drag-racing-club/v060/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=7903c763-4f6b-48fb-8396-3a18daae70c7&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=838&original_ref=https%3A%2F%2Fhtml5games.com%2FGame%2FDrag-Racing-Club%2F7903c763-4f6b-48fb-8396-3a18daae70c7', '_self', 'location=no,toolbar=no,zoom=no,clearcache=yes,hidespinner=no,beforeload=yes');

/*
inAppBrowserbRef.addEventListener('loadstart', function() {
  alert("yes");
});s
*/

        //admob
     // Set AdMobAds options:
      admob.setOptions({
        publisherId:           "ca-app-pub-7251676025279948/2158395607",  // Required
        interstitialAdId:      "ca-app-pub-7251676025279948/6876655224",  // Optional
        autoShowBanner:        true,                                      // Optional
        autoShowRInterstitial: false,                                     // Optional
        autoShowRewarded:      false,                                     // Optional
        tappxIdiOS:            "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        tappxIdAndroid:        "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        tappxShare:            0.5                                        // Optional
      });
      
      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();
      
      // Request interstitial ad (will present automatically when autoShowInterstitial is set to true)
      admob.requestInterstitialAd();
 
      // Request rewarded ad (will present automatically when autoShowRewarded is set to true)
      admob.requestRewardedAd();
       //admob



    },



    // Update DOM on a Received Event

    receivedEvent: function (id) {

        var parentElement = document.getElementById(id);

        var listeningElement = parentElement.querySelector('.listening');

        var receivedElement = parentElement.querySelector('.received');



        listeningElement.setAttribute('style', 'display:none;');

        receivedElement.setAttribute('style', 'display:block;');



        console.log('Received Event: ' + id);


    }

};


                //admob


           //admob

app.initialize();