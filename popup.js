function onLoad() {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.create({"url": 'https://www.bueda.com/posts/new/?url=' +
                    encodeURIComponent(tab.url) + '&subject=' +
                    encodeURIComponent(tab.title),
                "selected": true});
    });
}
