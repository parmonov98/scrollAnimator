"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var animate = /*#__PURE__*/function () {
  function animate(debug) {
    var _this = this;

    _classCallCheck(this, animate);

    // an array of list of ids of screens on the page
    // Blink engine detection
    this.DEBUG = debug;
    this.offsets = [];
    this.screens = []; // screens's sizes  

    this.setAllScreens();
    window.addEventListener('scroll', function (e) {
      // console.log(e.view.screenY);
      // console.log(e.view.pageY);
      // console.log(window.scrollY);
      if (_this.DEBUG) {
        console.log(e); //console.log(e.path[1].pageYOffset);

        var test = document.querySelector("[data-offset=\"".concat(_this.offsets[0], "\"]"));
        console.log(test);
      }

      document.querySelector("[data-offset=\"".concat(_this.offsets[0], "\"]"));
      var path = {};
      path.pageY = window.scrollY || e.path[1].pageYOffset;

      if (path) {
        for (var i = 0; i < _this.offsets.length; i++) {
          var offset = _this.offsets[i];

          if (offset <= path.pageY) {
            _this.animateScreen(document.querySelector("[data-offset=\"".concat(_this.offsets[i], "\"]")));
          }
        }
      }
    });
  }

  _createClass(animate, [{
    key: "checkBrowser",
    value: function checkBrowser() {
      var browsers = [{
        name: opera,
        isThis: false
      }, {
        name: firefox,
        isThis: false
      }, {
        name: chrome,
        isThis: false
      }, {
        name: IE,
        isThis: false
      }, {
        name: Edge,
        isThis: false
      }, {
        name: safari,
        isThis: false
      }]; // Chrome 1 - 71

      var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
      browsers[0].isThis = isChrome; // Opera 8.0+

      var isOpera = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
      browsers[0].isThis = isOpera; // Firefox 1.0+

      var isFirefox = typeof InstallTrigger !== 'undefined';
      browsers[0].isThis = isFirefox; // Safari 3.0+ "[object HTMLElementConstructor]" 

      var isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
      }(!window['safari'] || typeof safari !== 'undefined' && safari.pushNotification);

      browsers[0].isThis = isSafari; // Internet Explorer 6-11

      var isIE =
      /*@cc_on!@*/
      false || !!document.documentMode;
      browsers[0].isThis = isIE; // Edge 20+

      var isEdge = !isIE && !!window.StyleMedia;
      browsers[0].isThis = isEdge;
      browsers.forEach(function (browser) {
        if (browser.isThis) {
          return browser.name;
        } else return null;
      });
    }
  }, {
    key: "setAllScreens",
    value: function setAllScreens() {
      this.screens = document.querySelectorAll("[data-offset]");

      if (this.DEBUG) {
        console.log(this.screens);
      }

      var attrs = [];

      for (var i = 0; i < this.screens.length; i++) {
        attrs[i] = this.screens[i].getAttribute('data-offset');
      }

      this.offsets = attrs;
    }
  }, {
    key: "animateScreen",
    value: function animateScreen(screen) {
      if (this.DEBUG) {
        console.log(screen);
      }

      var elements = screen.querySelectorAll('[data-animations]');

      if (elements.length === 0) {
        console.log(screen);

        if (screen.getAttribute('data-animations').trim() != '') {
          var classNames = screen.getAttribute('data-animations');
          var classes = classNames.split(' ');
          classes.forEach(function (className) {
            if (!screen.classList.contains(className)) {
              screen.className += ' ' + className;
              screen.setAttribute('data-animations', '');
            }
          });
        }
      } else {
        if (this.DEBUG) {
          console.log(elements);
        }

        elements.forEach(function (el) {
          if (el.getAttribute('data-animations').trim() != '') {
            var _classNames = el.getAttribute('data-animations');

            var _classes = _classNames.split(" ");

            _classes.forEach(function (className) {
              // className
              if (!el.classList.contains(className)) {
                el.className += ' ' + el.getAttribute('data-animations');
                el.setAttribute('data-animations', '');
              }
            });
          }
        });
      }
    }
  }]);

  return animate;
}();