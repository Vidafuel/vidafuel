
  /*
   * get geographical location data by ip address
   * uses the free ipify.org service
   * and the paid ipinfo.io service
   * and intelligent caching to minimize requests
   */

  // mark the start of the script loading
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "event": "geoip.js",
    "geoip.start": (new Date()).getTime()
  });

  (function () {

    "use strict";

    var isGeoIPLoaded, isWindowLoaded;

    function onWindowLoadAndGeoIPLoad () {

      if (isGeoIPLoaded && isWindowLoaded) {

        // push location data into GTM data layer
        // use this event to trigger third-party scripts after first-party scripts and know the geo data is available
        window.dataLayer.push({
          "event": "geoip.window.load"
        });

      }

    }

    window.addEventListener("load", function onWindowLoad () {

      isWindowLoaded = true;
      onWindowLoadAndGeoIPLoad();

    });

    // helper function to push data to data layer
    function onSuccess (data, doNotSaveData) {

      // push location data into GTM data layer
      window.dataLayer.push({
        "event": "geoip.load",
        "geoip.data": data
      });
      isGeoIPLoaded = true;
      onWindowLoadAndGeoIPLoad();

      if (!doNotSaveData) {

        // store data in local storage
        if (data && data.ip) {

          var key = "ipinfo.data." + data.ip;
          localStorage.setItem(key, JSON.stringify(data));

        }

      }

    }

    // helper function to log and throw error
    function onError (err) {

      throw new Error(err.code + ": " + err.error);

    }

    // helper function to execute once we have the IP address
    function onIPLoaded (ip) {

      var data, key, request;

      window.dataLayer.push({
        "event": "geoip.ip",
        "geoip.ip": ip
      });

      // check local storage for geoip data for that IP address
      key = "ipinfo.data." + ip;
      data = localStorage.getItem(key);
      if (data) {

        // GeoIP data found in local storage
        try {
          data = JSON.parse(data);
          onSuccess(data, true);
        } catch (err) {
          throw err;
        }

      } else {

        // fetch GeoIP data from ipinfo.io
        request = new XMLHttpRequest();
        request.open("GET", "https://ipinfo.io/" + ip + "/json", true);
        request.onload = function () {

          if (this.status >= 200 && this.status < 400) {

            // Success!
            data = JSON.parse(this.response);
            onSuccess(data);

          } else {

            onError(new Error("Unexpected HTTP Status Code " + this.status));

          }

        };
        request.onerror = onError;
        request.send();

      }

    }

    var ip = sessionStorage.getItem("ipify.ip");
    if (ip) {

      // use IP address retrieved from session cache
      onIPLoaded(ip);

    } else {

      // use ipify.org to get IP address
      // listen for when the IP address has been loaded by ipfiy
      window.ipifyCallback = function ipifyCallback (json) {

        sessionStorage.setItem("ipify.ip", json.ip);
        onIPLoaded(json.ip);

      };

      // inject the script from ipify.org
      var newNode, referenceNode;

      referenceNode = document.getElementsByTagName("script")[0];
      newNode = document.createElement("script");
      newNode.async = true;
      newNode.src = "https://api.ipify.org?format=jsonp&callback=ipifyCallback";
      referenceNode.parentNode.insertBefore(newNode, referenceNode);

    }

  }());

