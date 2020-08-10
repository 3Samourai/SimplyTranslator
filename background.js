  browser.contextMenus.create({
    id: "Translate_Selection",
    title: "Translate the Selection",
    contexts: ["selection"]
  });
  

  browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "Translate_Selection") {

     var url1 = "https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=" + info.selectionText;
  //console.log(url1);
     var creating = browser.windows.create({
    url: url1,
    type: "popup",
    height: 652, 
    width: 375
  })
    }
  })
  function SaveMessage(message, sender)
  {
    console.log(message.url);
    browser.tabs.update({
    url: message.url
    })
  }
  browser.runtime.onMessage.addListener(SaveMessage)
