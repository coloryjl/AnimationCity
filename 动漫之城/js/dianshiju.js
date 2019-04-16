var d1=1,d2=5,d3=2;d4=3;
var timer;
function  begin2()
{
	if(d1==d2)
		d1=1;
		else
		d1++;
		document.getElementById("s1").src="./img/电视剧"+d1+".jpg";
		if(d3==d2)
		d3=1;
		else
		d3++;
		document.getElementById("s3").src="./img/电视剧"+d3+".jpg";
		if(d4==d2)
		d4=1;
		else
		d4++;
		document.getElementById("s2").src="./img/电视剧"+d4+".jpg";
		
}
function  begin1()
{    
	   d1--;
	if(d1==0)
		d1=5;
		document.getElementById("s1").src="./img/电视剧"+d1+".jpg";
		d3--;
		if(d3==0)
		d3=5;
		document.getElementById("s3").src="./img/电视剧"+d3+".jpg";
		d4--;
		if(d4==0)
		d4=5;
		document.getElementById("s2").src="./img/电视剧"+d4+".jpg";
		
}

function restart()
{
	begin2();
	init();
}
function init()
{
	timer=setInterval('begin2();',2000);
}

function pause()
{
	clearInterval(timer);
}



function fangying()
{
	var bb=document.getElementById("cc");
	var bbb=document.getElementById("div42");
	bb.style.backgroundColor="limegreen";
	var ccc=document.getElementById("div43");
	bbb.style.opacity=1;
	ccc.style.opacity=0;
}
function fang()
{
	var bb=document.getElementById("cc");
	bb.style.backgroundColor="white";
}
function fangying1()
{
	var ee=document.getElementById("dd");
	ee.style.backgroundColor="limegreen";
	var fff=document.getElementById("div43");
	var ggg=document.getElementById("div42");
	fff.style.opacity=1;
	ggg.style.opacity=0;
}
function fang1()
{
	var bb=document.getElementById("dd");
	bb.style.backgroundColor="white";
}