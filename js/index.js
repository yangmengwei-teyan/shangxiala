
/**
 * 全局变量
 */

var domeTop = document.querySelector("#item-box").offsetTop;


// 是否开启下拉刷新的开关
var pullDownOff;
// 是否开启上拉加载的开关
var pullUpOff;

 /**
  * 页面元素
  */
var pullDown = document.querySelector(".pull-down");
var pullUp = document.querySelector(".pull-up");
var h = pullDown.offsetHeight;

/**
 * 实例化
 */
var myScroll = new BScroll(".main",{
    probeType:2 //会在屏幕滑动的过程中实时的派发 scroll 事件
});

// on：注册事件，scroll：滚动过程中实时坐标
myScroll.on('scroll',onScroll);
myScroll.on('scrollEnd',scrollEnd);

/**
 * 功能函数
 */

function onScroll(){
    // y：scroll 纵轴坐标。
    // console.log(myScroll.y);
    // 最大纵向滚动位置。
    // console.log(myScroll.maxScrollY - h);
    
    if(myScroll.y > h){
        pullDown.innerHTML = "释放刷新";
        pullDownOff = true;
    }else{
        pullDown.innerHTML = "下拉刷新";
        pullDownOff = false;
    }
    if(myScroll.y < myScroll.maxScrollY - h){
        pullUp.innerHTML = "释放加载";
        pullUpOff = true;
    }else{
        pullUp.innerHTML = "上拉加载";
        pullUpOff = false;
    }

    
    
    // 吸顶
    console.log(domeTop);
    
    if(Math.abs(myScroll.y) > domeTop){
        document.querySelector("#fixe-item").classList.remove("hide");
    }else{
        document.querySelector("#fixe-item").classList.add("hide");
    }
}

function scrollEnd(){

    if(pullDownOff){
        location.reload();
    }
    if(pullUpOff){
        // 执行加载方法
        // 调用ajax
    }
}
