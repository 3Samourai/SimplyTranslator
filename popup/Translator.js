function callback(tabs) {
  var currentTab = tabs[0]; 
  console.log(currentTab.url);
  var result = "https://translate.google.com/translate?sl=auto&u=" 
  console.log(result);
  var creating = browser.tabs.create({
    url:result+currentTab.url
  });
};
function callBackground(tabs) {
  var currentTab = tabs[0]; 
  console.log(currentTab.url);
  var result = "https://translate.google.com/translate?sl=auto&u=" 
  console.log(result);
  browser.runtime.sendMessage({
    url:result+currentTab.url
  });
}

function send()
{
  var lfckv = document.getElementById("toggle").checked
  console.log(lfckv);
 if (lfckv == true){
  var query = { active: true, currentWindow: true };
  browser.tabs.query(query, callback);
 }
 else{
  var query = { active: true, currentWindow: true };
  browser.tabs.query(query, callBackground);
 }
};
document.querySelector("#btn").onclick = send;
