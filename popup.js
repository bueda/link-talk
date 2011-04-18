function onLoad() {
    chrome.tabs.create({"url": 'https://www.bueda.com/posts/new/?reply=' +
            encodeURIComponent(location.href) + '&subject=' +
            encodeURIComponent(document.title),
        "selected": true});
}
