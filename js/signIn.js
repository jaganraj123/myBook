// JavaScript Document
'use strict'
/**
login form index to the feed page
*/

function signIn(){
	var userName, passWord, message,signIn;
		userName  = document.getElementById("userName").value;
		passWord = document.getElementById("passWord").value;
		message = document.getElementsByClassName("message");
		signIn = document.getElementById("signIn");
	
		if(userName == '' && passWord == '' ){
			message[0].innerHTML = "UserName should not be empty";
			message[1].innerHTML = "Password should not be empty";
		}else if(userName == '' && passWord != '' ){
			message[0].innerHTML = "UserName should not be empty";
			message[1].innerHTML = "";
		}else if(userName != '' && passWord == '' ){
			message[0].innerHTML = ""
			message[1].innerHTML = "Password should not be empty";
		}else if(userName != '' && userName.length > 8){
			message[0].innerHTML = "UserName maximum of 8 characters";
			message[1].innerHTML = "";
		}else if(passWord != '' && passWord.length < 6){
			message[0].innerHTML = "";
			message[1].innerHTML = "Password minimum of 6 characters";
		}else{
			window.location = "feed/feed.html";
		}	
}
	
	
