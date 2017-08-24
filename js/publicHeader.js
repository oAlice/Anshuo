	var mxl_logoli=document.querySelectorAll(".mxl_logolist li");
	for(var i=0;i<mxl_logoli.length;i++){
		mxl_logoli[i].onmouseover=function(){
			var liChildren=this.children[1]
			if(this.children.length==2){
				var divChildren=liChildren.children;
				this.children[1].style.display='block';				
				this.children[1].style.height=divChildren[0].offsetHeight*divChildren.length+'px';		
				this.children[1].style.padding='20px 15px 20px 15px'
			}
		}
		mxl_logoli[i].onmouseout=function(){
			var liChildren=this.children[1]
			if(this.children.length==2){							
				this.children[1].style.height="0px";		
				this.children[1].style.padding='0 15px 0 15px'		
				if(this.children[1].style.height==0){
					this.children[1].style.display='none'
				}
			}
		}
	}

