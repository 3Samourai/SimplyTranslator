function callback(tabs) {
  var currentTab = tabs[0]; 
  console.log(currentTab.url);
  var result = "https://translate.google.com/translate?sl=auto&u=" 
  console.log(result);
  var creating = browser.tabs.create({
    url:result+currentTab.url
  });
};
function send()
{
  var query = { active: true, currentWindow: true };
  browser.tabs.query(query, callback);
  console.log(query);
};
document.querySelector("#btn").onclick = send;
