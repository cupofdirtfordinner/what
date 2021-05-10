(function() {
    'use strict';
    window.stop();
    var urlraw = window.location.href.replace(/https*:\/\/blocked.com\-default\.ws\/\?oI\=[0-9]+\&type\=chromium\-m\&url\=/, "").split("");
    var url = urlraw.join("");
    url = url.split("%2F").join("/");
    url = url.split("%3F").join("?");
    document.write('<!DOCTYPE HTML><html><head><title>'+url+'</title></head><body><style>html,body{border:0;margin:0;padding:0;height:100%}iframe{border:0;margin:0;display:block}</style><iframe src="http://'+url+'" height=100% width=100%></iframe></body></html>');
    window.stop();
})();
