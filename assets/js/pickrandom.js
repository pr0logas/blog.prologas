//: Author: Tomas Andriekus
//:: Description: we want to pick a random story from markdown list
//:: 2020-02-07

const stories =
	[
		"how-to-dump-mysql-database-linux",
		"how-to-install-aws-bucket-software-centos7"
	];
const randomStorie = stories[Math.floor(Math.random() * stories.length)];

console.log("random stories =>", randomStorie);
