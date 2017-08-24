window.onload=function(){
	//进入页面获取location,根据参数进行选择性隐藏
	var adress=location.href;
	console.log(adress)
	var num=adress.substring(adress.length-1);
	console.log(num)
	var numm=Number(num)
	console.log(numm)
	
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
	
	
	console.log(allDiv.length)
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
	
	var serviceA=document.querySelectorAll(".mxl_ywcl .mxl_fy a");
	var serviceLi=document.querySelectorAll(".mxl_ywcl>ul>li");
	serviceA[0].onclick=function(){
		serviceA[1].className='mxl_cpb';
		serviceA[2].className='';
		for(var i=0;i<serviceLi.length;i++){
			if(i<4){
				serviceLi[i].style.display='block'
			}else{
				serviceLi[i].style.display='none';
				break
			}
		}
		serviceA[0].style.display='none';
		serviceA[3].style.display='inline-block';
	}
	serviceA[1].onclick=serviceA[0].onclick;
	serviceA[3].onclick=function(){
		serviceA[1].className='';
		serviceA[2].className='mxl_cpb';
		for(var i=0;i<serviceLi.length;i++){
			if(i<4){
				serviceLi[i].style.display='none'
			}else{
				serviceLi[i].style.display='block';
				break
			}
		}
		serviceA[3].style.display='none'
		serviceA[0].style.display='inline-block'
	}
	serviceA[2].onclick=serviceA[3].onclick;
	
	//产品功能选项卡
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
	
	//查看更多点击
	var mxl_xdlc=document.querySelectorAll(".first .more");
	var more=document.getElementsByClassName('mxl_xdlc_more')[0];
	var mxl_xdlc_more=document.querySelectorAll(".mxl_xdlc_more>div");
	var first=document.getElementsByClassName('first')[0];
	for(var i=0;i<mxl_xdlc.length;i++){
		mxl_xdlc[i].index=i;
		mxl_xdlc[i].onclick=function(){
			alert(1)
			first.style.display='none'
			more.style.display='block'
			for(var j=0;j<mxl_xdlc_more.length;j++){
				mxl_xdlc_more[j].style.display='none' 
			}
			mxl_xdlc_more[this.index].style.display='block'
		}
	}
	
}
