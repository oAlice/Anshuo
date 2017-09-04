/**
 * Created by Administrator on 2017/8/26.
 */
//选项卡
    (function () {
        var w_tab=document.getElementById('w-data-tab');
        var list=w_tab.getElementsByTagName('li');
        var w_hide=document.getElementById('w-sol-hide');
        var oDiv=w_hide.getElementsByClassName('w-solhide');
        var len=list.length;
        var i=0;
        for(var i=0;i<len;i++){
            list[i].index=i;
            list[i].onclick=function () {
                for(var j=0;j<oDiv.length;j++){
                    if(this.index==j){
                        this.style.background="#E7370E";
                        oDiv[j].style.display="block";
                    }else{
                        list[j].style.background="#8bbaff";
                        oDiv[j].style.display="none";
                    }
                }
            }
        }
    })();

//点击变色
// (function () {
// var w_small_tab=document.getElementById('w-small-tab');
// var wLis=w_small_tab.getElementsByTagName('li');
//     var index=0;
//
//     wLis[0].classList.add('navColor');
//     for(var i=0;i<wLis.length;i++){
//         wLis[i].index=i;
//         wLis[i].onclick=function () {
//
//             wLis[index].classList.remove('navColor');
//             wLis[index].style.background='#8bbaff';
//             index=this.index;
//             this.style.background='#E7370E';
//             this.classList.add('navColor');
//
//         };
//
//     }
// })();
//轮播图







