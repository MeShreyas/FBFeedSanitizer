var test = localStorage.getItem("keywords");
if (test == null) {
	test = ['Rahul Gandhi', 'Modi', 'Narendra Modi', 'Namo', 'UPA', 'BJP'].toString();
	localStorage.setItem("keywords",test);
}

chrome.runtime.onMessage.addListener(
	function(request,sender,response) {
		if (request.data!=null) {
			test = request.data;
		}
	}
);

function listener() {
	chrome.tabs.executeScript(null, {code: 'PARAMS = '+JSON.stringify(test)+';'});
	chrome.tabs.executeScript(null, {file: "scripts/contentscript.js"});
}

chrome.pageAction.onClicked.addListener(listener);

function check(tab_id,data,tab) {
	if(tab.url.indexOf('facebook.com')>-1) {
		chrome.pageAction.show(tab_id);
	}
}

chrome.tabs.onUpdated.addListener(check);
