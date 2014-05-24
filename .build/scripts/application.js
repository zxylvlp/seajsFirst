define("application", [ "./util", "libs/jquery/jquery", "libs/jade/jade", "jadetpl" ], function(require, exports, module) {
    var util = require("./util");
    require("libs/jquery/jquery");
    require("libs/jade/jade");
    require("jadetpl");
    $("h1").html(jadetpl.test);
    var helloSeaJs = document.getElementById("hello-seajs");
    helloSeaJs.style.color = util.randomColor();
    window.setInterval(function() {
        helloSeaJs.style.color = util.randomColor();
    }, 1e3);
});