'use strict'

var nameFlag = false,phoneFlag = false,ageFlag = false, emailFlag = false;
	try {	
		var firstName = document.getElementById('firstName');
		firstName.onkeyup = function() {
			nameFlag = firstName.value.length ? true : false;
			checkValidation();
		}
	}
	catch(err) {}
	//Age validation
	var age = document.getElementById('age');
	try {
		age.onkeydown = function(e) {
			var key = e.keyCode ? e.keyCode : e.which;
			if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
				return true;
			}
			else if ( key < 48 || key > 57 ) {
				ageFlag = false;
				return false;
			}else {
				console.log('A');
				ageFlag = true;
			}
			if (age.value.length > 2){
				ageFlag = false;
				return false;
			}
		}
		age.onkeyup = function(e) {
			if (age.value > 100){
				alert('Please enter the age between 0 to 100');
				age.value = "";
				age.focus();
				ageFlag = false;
			}
			ageFlag = age.value.length ? true : false;
			checkValidation();
		}
	}
	catch(err) {}
	//Phone validation
	var phone = document.getElementById('phone');
	try {
		phone.onkeydown = function(e) {
			var key = e.keyCode ? e.keyCode : e.which;
			if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
				return true;
			}
			else if ( key < 48 || key > 57 ) {
				phoneFlag = false;
				return false;
			}else{
				phoneFlag = true;
				console.log('P');
			}
		}
		phone.onkeyup = function(e) {
			phoneFlag = phone.value.length ? true : false;
			checkValidation();
		}
	}
	catch(err) {}
	//Email Validation
	var email = document.getElementById('email');
	try {
		email.onkeyup = function(e) {
			var atpos = email.value.indexOf("@");
			var dotpos = email.value.lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.value.length) {
				emailFlag = false;
			}else{
				emailFlag = true;
				console.log('E');
			}
			checkValidation();
		}
	}
	catch(err){}
	//validation success enable submit
	var save = document.getElementById("saveProfile");
	function checkValidation(){
		if(nameFlag== true && ageFlag == true && phoneFlag == true && emailFlag == true){
			save.removeAttribute("disabled");
			console.log('enable');
		}else{
			save.setAttribute("disabled","disabled");
			console.log('disable');
		}
	}
	
	//upload image
	var dataURL = '';
	var profileImage = document.getElementById('profileImage');
	var openFile = function(event) {
		var input = event.target;
		var reader = new FileReader();
		reader.onload = function(){
		  dataURL = reader.result;
		  profileImage.src = dataURL;
		};
		reader.readAsDataURL(input.files[0]);
	};
	
	//ProfileService constructor
	function ProfileService(){
		this.name;
		this.age;
		this.phone;
		this.email;
		this.address;
		this.profileImage;
	}
	ProfileService.prototype.save = function(){
		this.name = firstName.value;;
		this.age = age.value;
		this.phone = phone.value;
		this.email = email.value;
		this.address = document.getElementById('address').value;
		this.profileImage = dataURL;
		clearForm();
	}
	//Clear Form
	function clearForm(){
		document.getElementById('myform').reset();
		alert('Profile saved successfully');
		save.setAttribute("disabled","disabled");
		profileImage.src = '';
	}
	
	//Save profile data
	var saveProfile = document.getElementById('saveProfile');
	var saveData = new ProfileService();
	try {
		saveProfile.onclick = function() {
			saveData.save();
			console.log(saveData);
			return false;
		}
	}
	catch(err){}