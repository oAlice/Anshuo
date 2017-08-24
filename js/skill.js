	var mxl_threetz=document.getElementsByClassName('mxl_threetz')[0];
	var mxl_tzChildren=mxl_threetz.children;
	for(var i=0;i<mxl_tzChildren.length;i++){
		mxl_tzChildren[i].onmouseover=function(){
			var mxl_tzimg=this.children[0].children;
			mxl_tzimg[0].style.zIndex='-1';
		}
		mxl_tzChildren[i].onmouseout=function(){
			var mxl_tzimg=this.children[0].children;
			mxl_tzimg[0].style.zIndex='3';
		}
	}
    
