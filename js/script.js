jQuery(document).ready(function($) {
  $("ul#ticker01").liScroll();
});

// copy/set anchor tag from hibu survey embed into #hibu-experience-survey
var hibu_btn = $("a[id^='bottom-button']")[1];
$("#hibu-experience-survey").append(hibu_btn);
$("#hibu-experience-survey > #bottom-button").addClass("button-small");
var hibuInterval = window.setInterval(setReviewHref, 500);

function setReviewHref() {
	var hibu_btn = $("a[id^='bottom-button']")[1];
	var href = $(hibu_btn).attr("href");
  if (href) {
  	$("#hibu-experience-survey > #bottom-button").attr("href", href);
		clearInterval(hibuInterval);
  }
}