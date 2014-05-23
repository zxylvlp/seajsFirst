this["JST"] = this["JST"] || {};

this["JST"]["assets/scripts/test"] = function template(locals) {
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

this["JST"]["assets/scripts/testasdf"] = function template(locals) {
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