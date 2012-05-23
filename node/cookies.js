// JavaScript Document
function Cookies(cookieString){
	this.cookies=[];
	this.addCookiesString=function(cookieString){
		nc=cookieString.split(';');
		this.addCookies(nc);
	}
	
	this.addCookies=function(newCookies){
		var keys=newCookies.keys():
		for(var i=0;i<keys.length;i++){
			this.cookies[keys[i]]=newCookies[keys[i]];	
		}
	}
	if(cookieString){
		this.addCookiesString(cookieString);
	}
}

exports.cookies=Cookies;