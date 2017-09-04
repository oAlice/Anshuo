/**
 * Created by Administrator on 2017/9/4.
 */
var inner = document.getElementsByClassName("w-banner-con")[0];
var outer = document.getElementsByClassName("w-banner")[0];
var oLeft = outer.getElementsByClassName("l")[0];
var oRight = outer.getElementsByClassName("r")[0];
var w = inner.children[0].offsetWidth;
var lis = document.getElementsByClassName("w-point-ul")[0].children;

var t = null,iNow = 0
clearInterval(t)
move(inner.children[iNow].children[1],{right:0})
t = setInterval(function(){
    oRight.onclick()
},3000);
oLeft.onclick = function(){
    iNow--;
    if(iNow<0){
        inner.style.left = -(inner.children.length-1)*w+"px";
        iNow = inner.children.length-2
    }
    for(var i = 0;i<lis.length;i++){
        lis[i].className = 'left'
    }
    if(iNow == 0||iNow > 4){
        lis[0].className ="left select"
    }else{
        lis[iNow].className ="left select"
    }


    move(inner,{left:-iNow*w},{time:50,type:Tween.Cubic.easeIn,fn:function(){
        console.log(1)
        for(var i = 0;i<inner.children.length;i++){
            inner.children[i].children[1].style.right = -800+'px'
        }
        move(inner.children[iNow].children[1],{right:0})
    }});
}
oRight.onclick = function(){
    iNow++
    if(iNow >5){
        inner.style.left = 0
        iNow =1
    }
    for(var i = 0;i<lis.length;i++){
        lis[i].className = 'left'
    }
    if(iNow == 0||iNow > 4){
        lis[0].className ="left select"
    }else{
        lis[iNow].className ="left select"
    }

    move(inner,{left:-iNow*w},{time:50,type:Tween.Cubic.easeIn,fn:function(){
        console.log(1)
        for(var i = 0;i<inner.children.length;i++){
            inner.children[i].children[1].style.right = -800+'px'
        }
        move(inner.children[iNow].children[1],{right:0})
    }});
}

outer.onmouseover = function(){
    clearInterval(t)
}
outer.onmouseout = function(){
    t = setInterval(function(){
        oRight.onclick()
    },3000);
}
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onclick = function(){
        for(var i = 0;i<lis.length;i++){
            lis[i].className = 'left'
        }
        iNow = this.index;
        lis[iNow].className ="left select";
        move(inner,{left:-iNow*w},{time:50,type:Tween.Cubic.easeIn,fn:function(){
            for(var i = 0;i<inner.children.length;i++){
                inner.children[i].children[1].style.right = -800+'px'
            }
            move(inner.children[iNow].children[1],{right:0})
        }});
    }
};

