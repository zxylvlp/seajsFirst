define(function(require, exports, module) {
  var util = require("./util");
  require("jquery");
  $('h1').html("asdfasdfasdf");
  var helloSeaJs = document.getElementById('hello-seajs');
  helloSeaJs.style.color = util.randomColor();
  window.setInterval(function() {
    helloSeaJs.style.color = util.randomColor();
  }, 1000);
});
