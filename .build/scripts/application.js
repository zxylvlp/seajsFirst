define("application", [ "./util", "libs/jquery/jquery" ], function(require, exports, module) {
    var util = require("./util");
    require("libs/jquery/jquery");
    $("h1").html("asdfasdfasdf");
    var helloSeaJs = document.getElementById("hello-seajs");
    helloSeaJs.style.color = util.randomColor();
    window.setInterval(function() {
        helloSeaJs.style.color = util.randomColor();
    }, 1e3);
});