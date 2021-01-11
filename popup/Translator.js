
var ToggleDark =  document.querySelector("#ToggleDark");
var toggle =  document.getElementById("toggle");

function callback(tabs) {
  var currentTab = tabs[0]; 
  var result = "https://translate.google.com/translate?sl=auto&u=" 
  var creating = browser.tabs.create({
    url:result+currentTab.url
  });
};
function callBackground(tabs) {
  var currentTab = tabs[0]; 
  var result = "https://translate.google.com/translate?sl=auto&u=" 
  browser.runtime.sendMessage({
    url:result+currentTab.url
  });
}

function send()
{
  var lfckv = document.getElementById("toggle").checked
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

/*Dark Mode and Preferences*/
var zero = 0;

window.onload = function() {
let gettingZero = browser.storage.local.get();
gettingZero.then(onGot, onError);
}

function ToggleDarkMode () {
let gettingItem = browser.storage.local.get();
gettingItem.then(onGet, onError); 	
}


ToggleDark.onclick = ToggleDarkMode;
toggle.onchange = ToggleChange;

function ToggleChange(){
	if (toggle.checked == true){
		 browser.storage.local.set({
      ToggleOn: true   
         });
	}
	else if (toggle.checked == false){
		 browser.storage.local.set({
      ToggleOn: false 
         });
	}
}

function onGot(item) {
	var icon = document.querySelector("#icon");
		   var element = document.querySelector("#body");

	if (Object.keys(item).length === 0 && item.constructor === Object){
      browser.storage.local.set({
      ModeOn: false,
      ToggleOn: false    
         });
  	    	  icon.src = "sun.svg";
  	    	 element.classList.remove("dark-mode");


		}
		else {
  if (item["ModeOn"] == true){
	  icon.src = "moon.svg";
   element.classList.toggle("dark-mode");

  }
    else if (item["ModeOn"] == false){
	    	  icon.src = "sun.svg";
  	    	 element.classList.remove("dark-mode");
  };
  if (item["ToggleOn"] == true){
	  toggle.checked = true;

  }
  else if (item["ToggleOn"] == false){
	  toggle.checked = false;
}
}}
function onGet (item) {
	  	var icon = document.querySelector("#icon");
   if (item["ModeOn"] == true){
	   	  icon.src = "sun.svg";
  browser.storage.local.set({
  ModeOn: false      
  }); }
  else if (item["ModeOn"] == false){
	  	  icon.src = "moon.svg";
 browser.storage.local.set({
  ModeOn: true     
  });
  }
var element = document.querySelector("#body");
   element.classList.toggle("dark-mode");

}
function onError(error) {
  console.log(`Error: ${error}`);
}
