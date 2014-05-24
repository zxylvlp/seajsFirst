define(function(require, exports, module) {
  var util = require("./util");
  require("jquery");
  require("jade");
  require("jadetpl");
  $('h1').html(jadetpl.test);
  var helloSeaJs = document.getElementById('hello-seajs');
  helloSeaJs.style.color = util.randomColor();
  window.setInterval(function() {
    helloSeaJs.style.color = util.randomColor();
  }, 1000);
});
