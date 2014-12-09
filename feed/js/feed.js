'use strict'
/**
	Feed the text and url objects into feedAll funtion

*/
		var totalFeeds = [];
		var idCounter = 0;
	
	//feed constructor and functions
	
		function feed(){
			this.id;
			this.type;
			this.date;
		};
		feed.prototype.getId = function() {
			return this.id;
		};
		feed.prototype.getType = function() {
			return this.type;
		};
		feed.prototype.getDatetime = function() {
			return this.date;
		};
		
	//url and text feed constructors and functions
	
		function urlFeed(){
			this.url;
		};
		function textFeed(){
			this.text;
		};
		
		
	//inheriting the feed objects into url and textfeed 
	
		urlFeed.prototype = new feed();
		textFeed.prototype = new feed();	
	
	urlFeed.prototype.getFeed = function() {
			return this.url;
		};
		textFeed.prototype.getFeed = function() {
			return this.text;
		};
		
	//Adding new feed in the feed page
	
		function createFeed(){
			idCounter ++;
			var postFeed = document.getElementById('text-url');
		if(postFeed.value !=''){
			if(/:\/\//.test(postFeed.value)){
				var AddFeed = new urlFeed();
				AddFeed.id = idCounter;
				AddFeed.type = 'Url';
				AddFeed.url = postFeed.value;
				AddFeed.date = getDate();
				console.log(AddFeed instanceof urlFeed);
			}else{
				var AddFeed = new textFeed();
				AddFeed.id = idCounter;
				AddFeed.type = 'text';
				AddFeed.text = postFeed.value;
				AddFeed.date = getDate();
				console.log(AddFeed instanceof textFeed);
			}
			postFeed.value = '';
			totalFeeds.push(AddFeed);
			console.log(postFeed);
			updateList();
		}
		postFeed.focus();
	}
		//Delete existing feed form feedpage
	function deleteFeed(feedId){
	    var index;
		for(index in totalFeeds){
		  if(totalFeeds[index].id == feedId){
			totalFeeds.splice(index,1);
			updateList();
			return;
		  }
		}			
	}
	// Get Date&Time
	function getDate() {      
		var createdDate = new Date()
		return createdDate.getDate()+"/"+(createdDate.getMonth()+1)+"/"+createdDate.getFullYear() +" "+createdDate.getHours()+":"+createdDate.getMinutes();
	}
		//Create Feed List HTML Element
	function updateList(){
		var feedList = '';
		var feedIndex;
		var texturlcontainer = document.getElementById('texturlcontainer');

		if(!totalFeeds.length){
			texturlcontainer.innerHTML = '';
			return;
		}
		
		
		for(feedIndex in totalFeeds){
	

			feedList += '<li class="urllist">';
			feedList += '<img class="feed-img" src="../images/feed-image.jpg" />';
			if(totalFeeds[feedIndex].getType()=='Url'){
				feedList += '<a class="feed-span" href="'+totalFeeds[feedIndex].getFeed()+'" target="_blank">'+totalFeeds[feedIndex].getFeed()+'</a>';
			}else{
				feedList += '<span class="feed-span">'+totalFeeds[feedIndex].getFeed()+'</span>';
			}
			feedList += '<span class="close-span">';	
			feedList +='<span onclick="deleteFeed('+totalFeeds[feedIndex].getId()+')">';
			feedList += '<img src="../images/close_icon.png" />';
			feedList += '</span>';
			feedList += '<span datetime="2008-02-14 20:00">'+totalFeeds[feedIndex].getDatetime()+'</span>';
			feedList += '</span>';			
			feedList +=  '</li>';
			texturlcontainer.innerHTML = feedList;
		}
		
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	