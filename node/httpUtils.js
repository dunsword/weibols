// cookie��
function Cookies(){
	this.cookies=[];
	
	this.setCookies=function(setCookies){
		for(var i=0;i<setCookies.length;i++){
			this.addCookie(setCookies[i]);
		}
	}
	/*
	 * �������citem�Ǵ�header���ǵ���cookie�������ݣ���${name}:${value},domain=${domain},expires=${expires},path=${path}���� 
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
 ���ڱ���һ��cookie�����setCookie��ֵ�ַ������죬�磺Domain=.19lou.com; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
 ������name��value��path��expires
*/
function CookieItem(cookieItem){
		this.cookieItem=cookieItem;
		this.name;
		this.value;
		this.path;
		this.domain;
		this.expires;
		if(cookieItem&&typeof(cookieItem)==='string'){
			var opts=cookieItem.split(';');
			for(var i=0;i<opts.length;i++){	
				var opt=opts[i];
				var pair=opt.split('=');
				
				if(pair[0]&& pair[1]){
					if(pair[0].toLowerCase().trim()==='path'){
						this.path=pair[1].trim();
					}else if(pair[0].toLowerCase().trim()==='expires'){
						this.expires=pair[1].trim();
					}else if(pair[0].toLowerCase().trim()==='domain'){
						this.domain=pair[1].trim();
					}
					else {
						this.name=pair[0].trim();
						this.value=pair[1].trim();
					}
				}
			}
		}
}

exports.cookies=Cookies;