define("application-debug", [ "./util-debug", "libs/jquery/jquery-debug" ], function(require, exports, module) {
    var util = require("./util-debug");
    require("libs/jquery/jquery-debug");
    $("h1").html("asdfasdfasdf");
    var helloSeaJs = document.getElementById("hello-seajs");
    helloSeaJs.style.color = util.randomColor();
    window.setInterval(function() {
        helloSeaJs.style.color = util.randomColor();
    }, 1e3);
});