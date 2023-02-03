window.onload=function(){
	document.getElementById('uname').onblur=function(){
		chkUserName();
	}//检查用户名
	document.getElementById('pwd').onblur=chkPassword;//检查密码
	document.getElementById('email').onblur=chkEmail;//检查邮箱
	document.getElementById('xm').onblur=chkName;//检查姓名
	document.getElementById('tel').onblur=chkTel;//检查手机号
	createCode();
	document.getElementById('ch').onclick=createCode;
	document.getElementById('btn').onclick=chkCode;
	//表单提交事件onsubmit
	document.getElementById('myform').onsubmit=function(){
		if(chkUserName()&&chkPassword()&&chkEmail()&&chkName()&&chkTel()){
			alert("注册成功！");
			return true;
			
		}else{
			return false;
		}
	}
	
	document.getElementById('trans').onclick=changCode;
	
	//window.location.href='Logon.html';
}

//用户名
function chkUserName(){
	var userName=document.getElementById('uname');
	var userSpan=document.getElementById('suname');
	if(/^\w{4,16}$/.test(userName.value)){
		userSpan.innerHTML="<img src='../images/right.jpg'>";
		return true;
	}else{
		userSpan.innerHTML='用户名格式错误！';
		return false;
	}
}
//密码
function chkPassword(){
	var Password=document.getElementById('pwd');
	var pSpan=document.getElementById('spwd');
	if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).{6,}$/.test(Password.value)) {
		pSpan.innerHTML="<img src='../images/right.jpg'>";
		return true;
	} else{
		pSpan.innerHTML='密码格式错误！';
		return false;
	}
}
//邮箱
function chkEmail(){
	var Email=document.getElementById('email');
	var sEmail=document.getElementById('semail');
	if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(Email.value)) {
		sEmail.innerHTML="<img src='../images/right.jpg'>";
		return true;
	} else{
		sEmail.innerHTML='Email格式错误！';
		return false;
	}
}
//手机号
function chkTel(){
	var Tel=document.getElementById('tel');
	var sTel=document.getElementById('stel');
	if (/^\d{11,}$/.test(Tel.value)) {
		sTel.innerHTML="<img src='../images/right.jpg'>";
		return true;
	} else{
		sTel.innerHTML='手机号格式错误！';
		return false;
	}
}
//姓名
function chkName(){
	var xname=document.getElementById('xm');
	var nameSpan=document.getElementById('sxm');
	if(/^[\u4e00-\u9fa5]{2,8}$/.test(xname.value)){
		nameSpan.innerHTML="<img src='../images/right.jpg'>";
			return true;
		}else{
			nameSpan.innerHTML='姓名格式错误';
			return false;
		}
}
//验证码
function createCode(){
	var str='0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
	var newStr="";
	for(var i=0;i<4;i++){
		newStr+=str.charAt(Math.floor(Math.random()*62));
	}
	document.getElementById('yan').innerHTML=newStr;
}
function chkCode(){
	var yan=document.getElementById('yantxt');
	if (yan.value==document.getElementById('yan').innerText) {
		alert('验证成功！');
	} else{
		alert('验证码输入错误！');
	}
}
function changCode(){
	var txt=document.getElementById('text0').value;
	var arr=txt.split('-');
	var strNew=arr[0];
	for(var i=1;i<arr.length;i++){
		strNew+=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
	}
	document.getElementById('div0').innerHTML=strNew;
}