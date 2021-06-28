  browser.contextMenus.create({
    id: "Translate_Selection",
    title: "Translate the Selection",
    contexts: ["selection"]
  });
  browser.contextMenus.create({
    id: "Translate_Web",
    title: "Translate this Website",
    contexts: ["page"]
  });

  var Translate_Selection_Win_Id;

  browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "Translate_Selection") {
     var url1 = "https://translate.google.com/#view=home&op=translate&sl=auto&text=" + info.selectionText;
     if (Translate_Selection_Win_Id != undefined){
      browser.windows.remove(Translate_Selection_Win_Id);
     }
     var creating = browser.windows.create({
    url: url1,
    type: "popup",
    height: 652, 
    width: 375
  }).then((data) => {
    Translate_Selection_Win_Id = data.id;
      });
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


  function onErrorLocal(error) {
    console.log(`Error: ${error}`);
  }
  function onGotLocal(item) {
    let urlDownloadPage = "./download.html";
    console.log("test4")

    if (item["DownloadPage"] != true){
      browser.storage.local.set({
        DownloadPage: true
      });
      console.log("test")

      var page = browser.tabs.create({
        url:urlDownloadPage
      });
  }
}
window.onload = function() {
  console.log("test3")

  let gettingThanks = browser.storage.local.get();
  gettingThanks.then(onGotLocal, onErrorLocal);
}
