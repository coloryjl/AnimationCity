var li=document.getElementsByTagName("li");
			var prev=document.getElementById("prev");
			var next=document.getElementById("next");
			var index=0;
			function  show(){
				index++;
				if(index==li.length)
				{
				index=0;
				}
				for(var i=0;i<li.length;i++)
				{
					li[i].style.opacity=0;
				}
				li[index].style.opacity=1;
			}
		function  show1(){
				index--;
				if(index==-1)
				{
				index=li.length-1;
				}
				for(var i=0;i<li.length;i++)
				{
					li[i].style.opacity=0;
				}
				li[index].style.opacity=1;
			}
		
function tiao()
{
	if(document.getElementById("te").value=="电影")
	{
	document.getElementById("tee").href="dianying.html";
	document.getElementById("te").value=null;
	}
	 else if(document.getElementById("te").value=="电视剧")
	 {
	document.getElementById("tee").href="dianshiju.html";
	document.getElementById("te").value=null;
	}
	else
	{
	document.getElementById("tee").href="tongnian.html";
	document.getElementById("te").value=null;
}
	}

function zhuan1()
{
	document.getElementById("z1").style.zIndex=3;
	document.getElementById("z2").style.zIndex=2;
	document.getElementById("z3").style.zIndex=1;
	document.getElementById("b11").style.backgroundColor="#7FFFD4";
	document.getElementById("b22").style.backgroundColor="#A9A9A9";
	document.getElementById("b33").style.backgroundColor="#A9A9A9";
}

function zhuan2()
{
	document.getElementById("z1").style.zIndex=2;
	document.getElementById("z2").style.zIndex=3;
	document.getElementById("z3").style.zIndex=1;
	document.getElementById("b22").style.backgroundColor="#7FFFD4";
	document.getElementById("b11").style.backgroundColor="#A9A9A9";
	document.getElementById("b33").style.backgroundColor="#A9A9A9";
}

function zhuan3()
{
	document.getElementById("z1").style.zIndex=1;
	document.getElementById("z2").style.zIndex=2;
	document.getElementById("z3").style.zIndex=3;
	document.getElementById("b33").style.backgroundColor="#7FFFD4";
	document.getElementById("b22").style.backgroundColor="#A9A9A9";
	document.getElementById("b11").style.backgroundColor="#A9A9A9";
}

function xian1()
{
	document.getElementById("dd1").style.backgroundColor="#7FFF00";
	document.getElementById("dd2").style.backgroundColor="white";
	document.getElementById("dd3").style.backgroundColor="white";
	document.getElementById("d11").style.zIndex=2;
	document.getElementById("d22").style.zIndex=1;
	document.getElementById("d33").style.zIndex=0;
}
function xian2()
{
	document.getElementById("dd1").style.backgroundColor="white";
	document.getElementById("dd2").style.backgroundColor="#7FFF00";
	document.getElementById("dd3").style.backgroundColor="white";
	document.getElementById("d11").style.zIndex=1;
	document.getElementById("d22").style.zIndex=2;
	document.getElementById("d33").style.zIndex=0;
}
function xian3()
{
	document.getElementById("dd1").style.backgroundColor="white";
	document.getElementById("dd2").style.backgroundColor="white";
	document.getElementById("dd3").style.backgroundColor="#7FFF00";
	document.getElementById("d11").style.zIndex=1;
	document.getElementById("d22").style.zIndex=0;
	document.getElementById("d33").style.zIndex=2;
}
