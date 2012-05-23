var querystring=require('querystring');
function BBSThread(){
	this.form={};
	this.form['anonymous']='false';
	this.form['attachments']={};
	this.form['attentionUids']='';	
	this.form['capture']='';
	this.form['content']='';	
	this.form['contentWithBBCode']='';	
	this.form['fid ']=998;
	this.form['grabHouse']=0;
	this.form['htmlon']=0;
	this.form['inputTas']=''	
	this.form['noticePerm']=1;
	this.form['notice_perm']=1;
	this.form['openCaptcha']=0;
	this.form['ratePk']=0;
	this.form['readPerm ']=	0;
	this.form['recommendTagArea	']='recommendTag_502_口水杂谈';
	this.form['selectedFid']=998;
	this.form['selectedTagIds']=502;
	this.form['selectedTagNames']='口水杂谈';
	this.form['sendQQ']=0;
	this.form['sendSina']=0;
	this.form['subject']=''; //
	this.form['submitType']=1;
	this.form['tagsInput']='';	
	this.form['threadcategory']=0;
	this.form['tid']=0;
	
	this.getFormString=function(){
		var form=this.form;
		var formString='';
		for(var key in form){
			if(formString!='') formString+='&';			
			formString+=(key.trim()+'='+querystring.escape(form[key]));
		}
		return formString;
	}
}

exports.bbsthread=BBSThread;