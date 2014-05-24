this["jadetpl"] = this["jadetpl"] || {};

this["jadetpl"]["test"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),youAreUsingJade = locals_.youAreUsingJade;
buf.push("<div id=\"container\" class=\"col\">");
if ( youAreUsingJade)
{
buf.push("<p>You are amazing</p>");
}
else
{
buf.push("<p>Get on it!</p>");
}
buf.push("<p>Jade is a terse and simple\ntemplating language with a\nstrong focus on performance\nand powerful features.</p></div>");;return buf.join("");
};

this["jadetpl"]["testasdf"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var locals_ = (locals || {}),pageTitle = locals_.pageTitle,youAreUsingJade = locals_.youAreUsingJade;
buf.push("<!DOCTYPE html><html lang=\"en\"><head><title>" + (jade.escape(null == (jade_interp = pageTitle) ? "" : jade_interp)) + "</title><script type=\"text/javascript\">if (foo) {\n   bar(1 + 5)\n}</script></head><body><h1>Jade - node template engine</h1><div id=\"container\" class=\"col\">");
if ( youAreUsingJade)
{
buf.push("<p>You are amazing</p>");
}
else
{
buf.push("<p>Get on it!</p>");
}
buf.push("<p>Jade is a terse and simple\ntemplating language with a\nstrong focus on performance\nand powerful features.</p></div></body></html>");;return buf.join("");
};