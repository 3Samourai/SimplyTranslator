  browser.contextMenus.create({
    id: "Translate_Selection",
    title: "Translate the Selection",
    contexts: ["selection"]
  });
  browser.contextMenus.create({
    id: "Translate_Web",
    title: "Translate this Website"
  });

  browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "Translate_Selection") {
     var url1 = "https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=" + info.selectionText;
     var creating = browser.windows.create({
    url: url1,
    type: "popup",
    height: 652, 
    width: 375
  })
    }
    else if (info.menuItemId == "Translate_Web"){
      var url = "https://translate.google.com/translate?sl=auto&u=";
      browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
        let tab = tabs[0]; 
        browser.tabs.update({
          url: url + tab.url
          });
    }, console.error); 
    }
  })
  function SaveMessage(message, sender)
  {
    browser.tabs.update({
    url: message.url
    })
  }
  browser.runtime.onMessage.addListener(SaveMessage)
