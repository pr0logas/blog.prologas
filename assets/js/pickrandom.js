//: Author: Tomas Andriekus
//:: Description: we want to pick a random story from markdown list
//:: 2020-02-10

import { Stories } from './../../stories.js';

var storiesCount = Object.keys(Stories).length
var randomStoryDice = Math.floor((Math.random() * storiesCount) + 0);
let randomStory = ''

let count = 0;
for(var key in Stories) {
	if (randomStoryDice == count) {
		randomStory = Stories[key]
		break;
	}
	count += 1;
}

console.log("random stories =>", randomStory);