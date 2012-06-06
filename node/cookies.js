var mongoose=require('mongoose');
var util=require('util');
var Schema=mongoose.Schema;


CookieSchema=new Schema({
	createdAt: {type:Date, default: Date.now},
	cookieName: String,
	cookieValue:String,
	path:String,
	domain:String,
	expires:{type:Date, default:null}
});
mongoose.model("Cookie",CookieSchema);
var CookieItem=mongoose.model('Cookie');

// cookie类
function Cookies(){
	this.cookies=[];
	
	this.setCookies=function(setCookies){
		for(var i=0;i<setCookies.length;i++){
			this.addCookie(setCookies[i]);
		}
	}
	/*
	 * 传入参数citem是从header中那倒的cookie数组内容，由${name}:${value},domain=${domain},expires=${expires},path=${path}构成 
	 */
	this.addCookie=function(cItem){
		var ci=new CookieItem(cItem);
		this.cookies[ci.name]=ci;
	}
	this.cookieString=function(){
		var str='';
		for(var key in this.cookies){
			//var cItem=this.cookies[i];
			str+=key+"="+this.cookies[key].value+";";
		}
		return str;
	}
}
/**
 用于保存一个cookie项，根据setCookie的值字符串构造，如：uname=Paul;Domain=.19lou.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
 包含域：name、value、path、expires
*/
function saveCookie(cookieString,callback){
	var cpath=null,cname,cvalue,cexpires=null,ccreatedAt,cdomain;
	if(cookieString&&typeof(cookieString)==='string'){
			var opts=cookieString.split(';');
			for(var i=0;i<opts.length;i++){	
				var opt=opts[i];
				var pair=opt.split('=');
				
				if(pair[0]&& pair[1]){
					if(pair[0].toLowerCase().trim()==='path'){
						cpath=pair[1].trim();
					}else if(pair[0].toLowerCase().trim()==='expires'){
						
						var gmtDate=pair[1].trim().replace(/-/g,' ');
						cexpires=Date.parse(gmtDate);
					}else if(pair[0].toLowerCase().trim()==='domain'){
						cdomain=pair[1].trim();
					}
					else {
						cname=pair[0].trim();
						cvalue=pair[1].trim();
					}
				}
			}
	}
	var query=CookieItem.update({domain:cdomain,name:cname},
				 {name:cname,value:cvalue,path:cpath,domain:cdomain,expires:cexpires,createdAt:new Date()},
				 {upsert:true},
				 function(err){
					if(err){
							callback(false,err);
					}else{
							CookieItem.findOne({domain:cdomain,name:cname},function(err,doc){
								console.log(util.inspect("result="+doc));
								callback(true,'cookie saved!');
							});
							
					}
				});
}


exports.saveCookie=saveCookie;