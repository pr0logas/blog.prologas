//: Author: Tomas Andriekus
//:: Description: we want to pick a random story from markdown list
//:: 2020-02-09

import { Stories } from './../../stories.js';

const randomStorie = Stories[Math.floor(Math.random() * Stories.length)];

console.log("random stories =>", randomStorie);