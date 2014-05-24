define("application-debug", [ "./util-debug", "libs/jquery/jquery-debug", "libs/jade/jade-debug", "jadetpl-debug" ], function(require, exports, module) {
    var util = require("./util-debug");
    require("libs/jquery/jquery-debug");
    require("libs/jade/jade-debug");
    require("jadetpl-debug");
    $("h1").html(jadetpl.test);
    var helloSeaJs = document.getElementById("hello-seajs");
    helloSeaJs.style.color = util.randomColor();
    window.setInterval(function() {
        helloSeaJs.style.color = util.randomColor();
    }, 1e3);
});
