document.addEventListener("DOMContentLoaded", function () {
	var element = document.getElementById('keywords');
	var data = localStorage.getItem("keywords");
	if (data!=null) {
		element.value = data;
	} 
	document.getElementById("keywords").focus();
});

document.getElementById('save').onclick = function(){
	var element = document.getElementById('keywords');
	localStorage.setItem("keywords",element.value);
	alert("Saved Data");	
	chrome.runtime.sendMessage({data:localStorage.getItem("keywords")},function(response){		
		console.log(response);
	})
	
};