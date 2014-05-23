define(function(require, exports, module) {
  test( "hello test", function() {
    var util = require("util-debug");
    console.log(util.randomColor());
    ok( 1 == "1", "Passed!" );
  });
});
