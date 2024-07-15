javascript:(function(){
  var adElements = document.querySelectorAll('div[id^="ad"], iframe[id^="ad"], img[id^="ad"]');
  for (var i = 0; i < adElements.length; i++) {
    adElements[i].parentNode.removeChild(adElements[i]);
  }
})();
