// ==UserScript==
// @name          Gogoanime ccs
// @description    custom link css style 
// @include        https://Anitaku.to*
// @include      *Anitaku.to/*
// @match      Anitaku.to
// @run-at         document-start
// @version       1.0
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// ==/UserScript==


// NEW SITES CAN BE ADDED NOW

var css =
		"div#draggableElement { z-index: 0 !important;  display: none !important; } div.has-mail { width: 0px; height: 0px; display: none !important; } div#news-ticker { width: 0px; height 0px; display: none !important; }",
	head = document.head || document.getElementsByTagName("head")[0],
	style = document.createElement("style");

head.appendChild(style);

style.type = "text/css";
if (style.styleSheet) {
	// This is required for IE8 and below.
	style.styleSheet.cssText = css;
} else {
	style.appendChild(document.createTextNode(css));
}
})();
