browser.contextMenus.create({
    id: "annas-search",
    title: "Search in Anna's Archive",
    icons: {
        "16": "icons/16.png",
        "24": "icons/24.png",
        "32": "icons/32.png",
        "48": "icons/48.png",
    },
    contexts: ["selection"],
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case "annas-search":
            browser.tabs.create({ url: "https://annas-archive.org/search?q=" + info.selectionText });
            break;
    }
})