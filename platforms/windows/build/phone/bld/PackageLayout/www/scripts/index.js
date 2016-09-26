// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        document.getElementById("btnCapture").addEventListener('click', onCaptureImage.bind(this), false);
        function onCaptureImage() {
            navigator.device.capture.captureImage(onCaptureSuccess, onCaptureError);
        };

        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function onCaptureSuccess(imageFile) {
        document.getElementById('imgs').style.visibility = "visible";
        var image = document.getElementById('imgs');
        image.src = imageFile[0].localURL;
    }

    function onCaptureError(msg) {
      alert('ERROR: ' + msg);
    }

})();


