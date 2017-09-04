/**
 * Created by Administrator on 2017/9/4.
 */
(function () {
    var w_small_tab=document.getElementById('w-small-tab');
    var wLis=w_small_tab.getElementsByTagName('li');
    var index=0;
    wLis[0].classList.add('navColor');
    for(var i=0;i<wLis.length;i++){
        wLis[i].index=i;
        wLis[i].onclick=function () {
            wLis[index].classList.remove('navColor');
            wLis[index].style.background='#8bbaff';
            index=this.index;
            this.style.background='#E7370E';
            this.classList.add('navColor');
        };
    }
})();