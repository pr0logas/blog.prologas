//: Author: Tomas Andriekus
//:: Description: we want to pick a latest story from markdown list
//:: 2020-02-24

var myStorieList = './../../stories.json'

var jqxhr = $.getJSON(myStorieList, function(json) {
	let setLength = json.length;
	let result = (json[(setLength - 1)].stories)
	setLastStorie(result);
})