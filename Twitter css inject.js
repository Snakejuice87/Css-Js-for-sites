// ==UserScript==
// @name          twitter css inject
// @namespace     http://userstyles.org
// @description	  My javascript injection
// @author        Snakejuice
// @include      *.twitter.com/*
// @run-at      document-start
// @version       1.0
// ==/UserScript==

(function() {
    'use strict';
  if (window.location.search.search(/[?&]twitter.com(?:$|&)/) !== -1) {
    var link = document.createElement('link');
    link.type = 'text/css'; 
    link.rel = 'stylesheet';
    link.href = 'https://raw.githubusercontent.com/Snakejuice87/Css-Js-for-sites/main/Twitter.com.css';
    document.getElementsByTagName('head')[0].appendChild(link);
}
   completion();
})();






function() {
document.write('<link rel="stylesheet" href="https://raw.githubusercontent.com/Snakejuice87/Css-Js-for-sites/main/Twitter.com.css" />');
});





(function() {
    'use strict';
    var styles = "div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c {
    width: 600px !important;
  }
div.css-1dbjc4n.r-yfoy6g.r-18bvks7.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c {
   display: block !important;
   width: 100% !important;
 }  
div.css-1dbjc4n.r-yfoy6g.r-18bvks7.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c {
  width: 100% !important;   
 }
main.css-1dbjc4n.r-1habvwh.r-16y2uox.r-1wbh5a2 {
  flex: 100%, 0% !important;
  display: none;
 }
main.css-1dbjc4n.r-1habvwh.r-16y2uox.r-1wbh5a2 > *:nth-child(2) {
  display: none !important;
  width: 0px !important;
  }"
	var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
})();