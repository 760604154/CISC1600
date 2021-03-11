"use strict"
function clearText(){
	localStorage.removeItem("title");
	localStorage.removeItem("content");
	document.getElementById("title").value="";
	document.getElementById("content").value="";
}
function starter(){
	getTitle();
	getContent();
}
function saveTitle(){
	localStorage.setItem("title", document.getElementById("title").value);
}
function saveContent(){
	localStorage.setItem("content", document.getElementById("content").value);
}
function getTitle(){
	if (localStorage.title) {
		document.getElementById("title").value=localStorage.getItem("title");
		console.log(localStorage.getItem("title"));
	}
}
function getContent(){
	if (localStorage.content) {
		document.getElementById("content").value=localStorage.getItem("content");
		console.log(localStorage.getItem("content"));
	}
}