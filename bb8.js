"use strict"

var Cylon = require('cylon');
var keypress = require("keypress");


    Cylon.robot({
      connections: {
        bluetooth: { adaptor: 'central', uuid: '4e51973b007a40db9e45a207c39a8065', module: 'cylon-ble'}
      },

      devices: {
        bb8: { driver: 'bb8', module: 'cylon-sphero-ble'}
      },

      work: function(my) {

        function handle(ch, key) {

          if (key.ctrl && key.name === "c") {
              process.stdin.pause();
              process.exit();
          }

          switch (key.name) {

            case "c":
            var myColor = setInterval(function () {
              my.bb8.randomColor();
            }, 1000);
              // my.bb8.randomColor();
            break;

            case "k":
              my.bb8.randomColor();
            break;

            case "w":
              my.bb8.randomColor();
              my.bb8.roll(100, 90);
            break;

            case "d":
              my.bb8.randomColor();
              my.bb8.roll(100, 180);
            break;

            case "s":
              my.bb8.randomColor();
              my.bb8.roll(100, 270);
            break;

            case "a":
              my.bb8.randomColor();
              my.bb8.roll(100, 0);
            break;

            case "space":
              my.bb8.stop();
            break;
            }
          }

          keypress(process.stdin);
          process.stdin.on("keypress", handle);

          process.stdin.setRawMode(true);
          process.stdin.resume();
      }
    }).start();
