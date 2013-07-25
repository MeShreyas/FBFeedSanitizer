var stopWords = PARAMS.split(",");
var divs = document.getElementsByClassName("clearfix storyContent");
var length = divs.length;
var count=0;
while(length--) {
	if(divs[length].style.display == "none") {
		continue;
	}
	var currentHtml = divs[length].innerHTML;
	var wl = stopWords.length;
	while (wl--) {		
		if(stopWords[wl].trim().length <= 0) {
			continue;
		}
		var regex = new RegExp('\\b'+stopWords[wl].trim()+'\\b','gi');
		if (currentHtml.search(regex) != -1) {
			divs[length].style.display = "none";
			count++;
			break;
		}
	}
}

if (count==0) {
	alert("No Stories to hide");
} else {
	alert("Stories Hidden : "+count);
}

