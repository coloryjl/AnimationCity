  var aa=1;
   var bb=5;
   var timer=null;
   function  $(id){
   	return document.getElementById(id);
   }
 function  sw(){
  	if(aa==bb)
  	{
  		aa=1;
  	}
  	else 
  	{
  		aa++;
  	}
  	$("im").src="./img/校园20171"+aa+".jpg";
  }
 function start() 
 {
 	sw();
 	inn();
 }
function finshed(){
	clearInterval(timer);
}  
function inn(){
	timer=setInterval("sw();",1000);
}
 