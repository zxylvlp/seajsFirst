define(function(require, exports, module) {
  test( "hello test", function() {
    require("libs/jade/jade-debug");
    require("jadetpl-debug");
    console.log(jadetpl.test());
    //console.log(util.randomColor());
    ok( 1 == "1", "Passed!" );
  });
});
