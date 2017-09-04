var adress=location.href;
var num=adress.substring(adress.length-1);
var numm=Number(num)

var rightDiv=document.querySelectorAll(".mxl_rightcp>div.mxl_xdlc");
var allDiv=document.querySelectorAll(".mxl_rightcp>div");
var leftA=document.querySelectorAll(".mxl_leftcp_list>li>a");

if(!isNaN(numm)){
	for(var i=0;i<leftA.length;i++){
		leftA[i].parentNode.className='';
		leftA[num].parentNode.className="mxl_cur"
	}
	for(var i=0;i<rightDiv.length;i++){
		rightDiv[i].style.display='none';
		rightDiv[num].style.display='block'
	}
}


for(var i=0;i<leftA.length;i++){ 
	leftA[i].index=i;
	leftA[i].onclick=function(){
		for(var t=0;t<allDiv.length;t++){
			allDiv[t].style.display='none'
		}
		for(var j=0;j<rightDiv.length;j++){
			leftA[j].parentNode.className=''
			rightDiv[j].style.display='none'
		}
		rightDiv[this.index].style.display='block';
		leftA[this.index].parentNode.className='mxl_cur'
	}
}

var tabSpan=document.querySelectorAll(".proshow_tab span");
var tabDiv=document.querySelectorAll(".proshow_box>div");
for(var i=0;i<tabSpan.length;i++){
	tabSpan[i].index=i;
	tabSpan[i].onmouseover=function(){
		for(var j=0;j<tabDiv.length;j++){
			tabSpan[j].className='';
			tabDiv[j].style.display='none'
		}
		tabSpan[this.index].className='mxl_bck';
		tabDiv[this.index].style.display='block'
	}
}