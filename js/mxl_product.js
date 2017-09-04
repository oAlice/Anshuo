window.onload=function(){
	//进入页面获取location,根据参数进行选择性隐藏
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
	var more=document.getElementsByClassName('mxl_xdlc_more');
	var first=document.getElementsByClassName('first')[0];
	for(var i=0;i<mxl_xdlc.length;i++){
		mxl_xdlc[i].index=i;
		mxl_xdlc[i].onclick=function(){
			var xxk=more[this.index].querySelectorAll(".proshow_box>div");
			for(var j=0;j<xxk.length;j++){
				xxk[j].style.display='none'
			}
			xxk[0].style.display='block';
			first.style.display='none'			
			more[this.index].style.display='block'
		}
	}
	
	
	//second
	var mxl_jzgl=document.querySelectorAll(".second .more");
	var jzgl_more=document.getElementsByClassName('mxl_jzgl_more');
	var second=document.getElementsByClassName('second')[0];
	for(var i=0;i<mxl_jzgl.length;i++){
		mxl_jzgl[i].index=i;
		mxl_jzgl[i].onclick=function(){
			var xxk=jzgl_more[this.index].querySelectorAll(".proshow_box>div");
			for(var j=0;j<xxk.length;j++){
				xxk[j].style.display='none'
			}
			xxk[0].style.display='block'
			second.style.display='none';
			jzgl_more[this.index].style.display='block';
		}
	}
	
	//third
	var mxl_fxlh=document.querySelectorAll(".third .more");
	var fxlh_more=document.getElementsByClassName('mxl_fxlh_more');
	var third=document.getElementsByClassName('third')[0];
	for(var i=0;i<mxl_fxlh.length;i++){
		mxl_fxlh[i].index=i;
		mxl_fxlh[i].onclick=function(){
			var xxk=fxlh_more[this.index].querySelectorAll(".proshow_box>div");
			for(var j=0;j<xxk.length;j++){
				xxk[j].style.display='none'
			}
			xxk[0].style.display='block';
			third.style.display='none';
			fxlh_more[this.index].style.display='block';
		}
	}
	
	//four
	var mxl_ywcl=document.querySelectorAll(".four .more");
	var ywcl_more=document.getElementsByClassName('mxl_ywcl_more');
	var four=document.getElementsByClassName('four')[0];
	for(var i=0;i<mxl_ywcl.length;i++){
		mxl_ywcl[i].index=i;
		mxl_ywcl[i].onclick=function(){
			var xxk=ywcl_more[this.index].querySelectorAll(".proshow_box>div");
			for(var j=0;j<xxk.length;j++){
				xxk[j].style.display='none'
			}
			
			xxk[0].style.display='block'
			four.style.display='none';
			ywcl_more[this.index].style.display='block';
		}
	}
	
	//five
	var mxl_jgbs=document.querySelectorAll(".five .more");
	var jgbs_more=document.getElementsByClassName('mxl_jgbs_more');
	var five=document.getElementsByClassName('five')[0];
	for(var i=0;i<mxl_jgbs.length;i++){
		mxl_jgbs[i].index=i;
		mxl_jgbs[i].onclick=function(){
			var xxk=jgbs_more[this.index].querySelectorAll(".proshow_box>div");
			for(var j=0;j<xxk.length;j++){
				xxk[j].style.display='none'
			}
			xxk[0].style.display='block'
			five.style.display='none';
			jgbs_more[this.index].style.display='block';
		}
	}
	
	//six
	var mxl_fxfx=document.querySelectorAll(".six .more");
	var fxfx_more=document.getElementsByClassName('mxl_fxfx_more');
	var six=document.getElementsByClassName('six')[0];
	for(var i=0;i<mxl_fxfx.length;i++){
		mxl_fxfx[i].index=i;
		mxl_fxfx[i].onclick=function(){
			var xxk=fxfx_more[this.index].querySelectorAll(".proshow_box>div");
			for(var j=0;j<xxk.length;j++){
				xxk[j].style.display='none'
			}
			xxk[0].style.display='block'
			six.style.display='none';
			fxfx_more[this.index].style.display='block';
		}
	}
	
	//seven
	var mxl_ypt=document.querySelectorAll(".seven .more");
	var ypt_more=document.getElementsByClassName('mxl_ypt_more');
	var seven=document.getElementsByClassName('seven')[0];
	for(var i=0;i<mxl_ypt.length;i++){
		mxl_ypt[i].index=i;
		mxl_ypt[i].onclick=function(){
			var xxk=ypt_more[this.index].querySelectorAll(".proshow_box>div");
			for(var j=0;j<xxk.length;j++){
				xxk[j].style.display='none'
			}
			xxk[0].style.display='block'
			seven.style.display='none';
			ypt_more[this.index].style.display='block';
		}
	}
	
}
