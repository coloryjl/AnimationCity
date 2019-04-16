var timer;
function f1()
{
				var date=new Date();
				var year=date.getFullYear();
				var month=date.getMonth()+1;
				var day=date.getDate();
				var hour=date.getHours();
				var minute=date.getMinutes();
				var second=date.getSeconds();
				document.getElementById("n1").value=year;
				document.getElementById("n2").value=month
				document.getElementById("n3").value=day;
				document.getElementById("n4").value=hour;
				document.getElementById("n5").value=minute;
				document.getElementById("n6").value=second;
				dd++;
}
function f2()
{
    timer=setInterval(f1,1000);
}

var dd=0;
function restart()
{
  f1(); 
  f2();
}
 function pause()
 {
 	var ee,eee;
 	clearInterval(timer);
 	if(dd<=60)
 	alert("您开心地回忆了0分"+dd+"秒");
 	else if(dd>60&&dd<3600)
 	{
 		ee=dd%60;
 		eee=Math.round(dd/60);
 		alert("您开心地回忆了"+eee+"分"+ee+"秒");
 	}
 }
 
 
 
 var n9=2500;
 
 function f3()
 {
 	setInterval(restart3,n9);
 }
 
 function f4()
 {
 	setInterval(restart4,n9);
 }
 var bbb=0;
 var ccc=1;
 function restart3()
 {
 	if(bbb==1)
 	bbb=0;
 	else
 	bbb++;
 	if(ccc==0)
 	ccc=1;
 	else
 	ccc--;
 	document.getElementById("n7").style.zIndex=bbb;
 	document.getElementById("n8").style.zIndex=ccc;
 }
 
 var bb=0;
 var cc=1;
 function restart4()
 {
 	if(bb==1)
 	bb=0;
 	else
 	bb++;
 	if(cc==0)
 	cc=1;
 	else
 	cc--;
 	document.getElementById("n10").style.zIndex=bb;
 	document.getElementById("n11").style.zIndex=cc;
 }
 
 function restart1()
 {
 	restart3();
 	f3();
 }

function restart2()
 {
 	restart4();
 	f4();
 }
