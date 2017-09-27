function onClicked(tab) {
  chrome.storage.sync.get({'prefix': ''}, function(items){
    var url = 'https://twitter.com/intent/tweet?'
      + 'text=' + encodeURIComponent(items.prefix) + encodeURIComponent(tab.title)
      + '&url=' + encodeURIComponent(tab.url);
    var w = 550;
    var h = 450;
    var x = (screen.width - w) / 2;
    var y = (screen.height - h) / 2;
    var features = `left=${x},top=${y},width=${w},height=${h},status=no`;
    window.open(url, null, features);
  });
}

chrome.browserAction.onClicked.addListener(onClicked);

// vim:set ts=8 sts=2 sw=2 tw=0 et:
