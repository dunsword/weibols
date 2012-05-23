function _w_loadjs(id, src){
	var jq=document.createElement('script');
	jq.id=id;
	jq.setAttribute('charset','utf-8');
	jq.src=src;
	document.body.appendChild(jq);
	return jq;
}

var _w_callback=function(){
	
	$('div').each(function(index){
							var display=$(this).css('display');
							//if(display=='block') alert($(this).html());
							});
	
	
	var mask=new _w_MaskLayer();	
	var docBox=new _w_Docbox('main');
	docBox.box.fadeIn('slow');
}

if(!_w_jquery){
	var _w_jquery=_w_loadjs('jquery','http://www.weibols.com/weibols/jquery-1.7.2.js');
	_w_jquery.onload=_w_callback;
}else{
	_w_callback();
}

function _w_MaskLayer(){
	var bodyWidth=$('body').innerWidth();
	var bodyHeight=$('body').innerHeight();
	this.content='<div id="_w_mask" style="background: black; position:absolute; zindex:9999; top:0; left:0; width:'+bodyWidth+'px; height:'+bodyHeight+'px">mask</div>';
	$(this.content).appendTo('body');
}

function _w_Docbox(docid){
	var bodyWidth=$('body').innerWidth();
	var bodyHeight=$('body').innerHeight();
	
	this.docid=docid;;
	this.top=10;
	this.height=bodyHeight-10;
	this.left=(bodyWidth-1024)/2;
	this.width=1024;
	this.right=100;
	this.content='';
	this.content+='<div id="'+docid+'" style="background:  gray"><form name="doc"  action="http://www.weibols.com/weibols/record.php" method="post" target="_blank">';
	this.content+='<input name="title" type="text" value="fromjs"/><br/>';
	this.content+='<textarea name="content"  rows="3" ></textarea><br/>';
	this.content+='<input type="submit" name="submit" value="submit" /></form><div>';
	
	this.content=$('.thread-cont').html();
	
	
	this.box=$(this.content);
	this.box.css('background','white');
	this.box.css('position','absolute');
	this.box.css('display','none');
	this.box.css('zindex',10000);
	this.box.css('top',this.top);
	this.box.css('left',this.left);
	this.box.css('width',this.width);
	this.box.css('hight',this.height);;
	this.box.appendTo('body');
}


/*
var logd=function(obj){
	if(false){
		alert(obj);
	}
}

logd('collect js loaded');
//初始化
var title=document.title;
var n=document.documentElement;
var nlist=n.childNodes;
var b=document.getElementsByTagName("body")[0];
var divs=document.getElementsByTagName("div");
for(var i=0; i<divs.length;i++)
{
	
}

logd('begin define doxbox');

//__________________________________________________________________________
//类库定义
var DocBox=function(boxId){
	this.id=boxId;
	this.left=100;
	this.top=100;
	this.right=100;
	this.background='gray';
	this.content='';
	
	this.setContent=function(value){
		this.content=value;
	}
	
	this.box=document.createElement('div');
	this.box.addEventListener('click',
							  function(e){
								  //e.target.style.visibility='hidden';
							  },
							  false);
	b.appendChild(this.box);
	
	this.show=renderDocBox;
}

var renderDocBox=function(){
	var msg=this.box;
	msg.innerHTML=this.content;
	msg.id=this.id;
	msg.style.position='absolute';
	msg.style.left=this.left+'px';
	msg.style.top=this.top+'px';
	msg.style.right=this.right+'px';
	msg.style.background=this.background;
	msg.style.zindex=10000;
	showDiv(msg,this);
}

var movedDiv;
var movedPos=70;
var showDiv=function(sdiv,box){
	movedDiv=sdiv;
	sdiv.style.top='0px';
	sdiv.style.visibility='visible';
	moveDiv();
}
var moveDiv=function(){
	movedPos+=3
	movedDiv.style.top=movedPos+'px';
	if(movedPos<=100) setTimeout('moveDiv()',10);
	else {
		movedPos=0
		movedDiv=null;
	}
}
//显示内容
var getContent=function(){
	var content='';
	//content+= 'screen.windth='+b.clientWidth+'<br>';
	//content+='screen.height='+b.clientHeight+'<br>';
	content+='<form name="doc"  action="http://www.weibols.com/weibols/record.php" method="post" target="_blank">';
	content+='<input name="title" type="text" value="fromjs"/><br/>';
	content+='<textarea name="content"  rows="3" ></textarea><br/>';
	content+='<input type="submit" name="submit" value="submit" /></form>';
	return content;
}

/*
logd('begin show contents');

//______________________________________________________________

logd('doxbox: '+docbox);
if(docbox==undefined){
	var docbox=new DocBox('docBox');
}

docbox.setContent(getContent());
docbox.show();
logd('end');

*/
//var cookies=document.cookie.split(";");
//alert("cookie number: "+cookies.length);
//var str_cookies="";

//for(i=0; i<cookies.length; i++){
//	str_cookies+=cookies[i]+"\n";
//}
//alert("cookies: "+str_cookies);

