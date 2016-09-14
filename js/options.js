var btnBilibiliVideoDownload = document.getElementsByClassName('bilibiliVideoDownload');
var btnBilibiliBangumiDownload = document.getElementsByClassName('bilibiliBangumiDownload');
var btnBilibiliCover = document.getElementsByClassName('bilibiliCover');
var btnAcfunVideoDownload = document.getElementsByClassName('acfunVideoDownload');
var btnAcfunQueBLe = document.getElementsByClassName('acfunQueBLe');
var bkg_page   = chrome.extension.getBackgroundPage();

//打开设置页面，显示选项
//B站视频下载右键菜单
if(localStorage.bilibiliVideoDownload == 'on'){
    addClass(btnBilibiliVideoDownload[0],"on");
}else{
    addClass(btnBilibiliVideoDownload[1],"on");
}
//B站番剧下载右键菜单
if(localStorage.bilibiliBangumiDownload == 'on'){
    addClass(btnBilibiliBangumiDownload[0],"on");
}else{
    addClass(btnBilibiliBangumiDownload[1],"on");
}
//B站视频页面显示封面
if(localStorage.bilibiliCover == 'on'){
    addClass(btnBilibiliCover[0],"on");
}else{
    addClass(btnBilibiliCover[1],"on");
}
//A站视频下载右键菜单
if(localStorage.acfunVideoDownload == 'on'){
    addClass(btnAcfunVideoDownload[0],"on");
}else{
    addClass(btnAcfunVideoDownload[1],"on");
}
//把ACFUN替换成缺B乐
if(localStorage.acfunQueBLe == 'on'){
    addClass(btnAcfunQueBLe[0],"on");
}else{
    addClass(btnAcfunQueBLe[1],"on");
}

//点击按钮事件
//B站视频下载右键菜单
btnBilibiliVideoDownload[0].onclick = function(){
    localStorage.bilibiliVideoDownload = 'on';
    addClass(btnBilibiliVideoDownload[0],"on");
    removeClass(btnBilibiliVideoDownload[1],"on");
    bkg_page.createContextMenus('normal','下载该B站视频','bilibiliVideoDownload',bkg_page.biliDownload,["*://*.bilibili.com/video/av*"]);
};
btnBilibiliVideoDownload[1].onclick = function(){
    localStorage.bilibiliVideoDownload = 'off';
    addClass(btnBilibiliVideoDownload[1],"on");
    removeClass(btnBilibiliVideoDownload[0],"on");
    chrome.contextMenus.remove('bilibiliVideoDownload');
};
//B站番剧下载右键菜单
btnBilibiliBangumiDownload[0].onclick = function(){
    localStorage.bilibiliBangumiDownload = 'on';
    addClass(btnBilibiliBangumiDownload[0],"on");
    removeClass(btnBilibiliBangumiDownload[1],"on");
    bkg_page.createContextMenus('normal','下载该B站番剧','bilibiliBangumiDownload',bkg_page.biliDownload,["*://bangumi.bilibili.com/anime/v/*"]);
};
btnBilibiliBangumiDownload[1].onclick = function(){
    localStorage.bilibiliBangumiDownload = 'off';
    addClass(btnBilibiliBangumiDownload[1],"on");
    removeClass(btnBilibiliBangumiDownload[0],"on");
    chrome.contextMenus.remove('bilibiliBangumiDownload');
};
//B站视频页面显示封面
btnBilibiliCover[0].onclick = function(){
    localStorage.bilibiliCover = 'on';
    addClass(btnBilibiliCover[0],"on");
    removeClass(btnBilibiliCover[1],"on");
};
btnBilibiliCover[1].onclick = function(){
    localStorage.bilibiliCover = 'off';
    addClass(btnBilibiliCover[1],"on");
    removeClass(btnBilibiliCover[0],"on");
};
//A站视频下载右键菜单
btnAcfunVideoDownload[0].onclick = function(){
    localStorage.acfunVideoDownload = 'on';
    addClass(btnAcfunVideoDownload[0],"on");
    removeClass(btnAcfunVideoDownload[1],"on");
    bkg_page.createContextMenus('normal','下载该A站视频','acfunVideoDownload',bkg_page.acDownload,["*://*.acfun.tv/v/ac*","*://*.aixifan.com/v/ac*","*://*.acfun.net/v/ac*"]);
};
btnAcfunVideoDownload[1].onclick = function(){
    localStorage.acfunVideoDownload = 'off';
    addClass(btnAcfunVideoDownload[1],"on");
    removeClass(btnAcfunVideoDownload[0],"on");
    chrome.contextMenus.remove('acfunVideoDownload');
};
//把ACFUN替换成缺B乐
btnAcfunQueBLe[0].onclick = function(){
    localStorage.acfunQueBLe = 'on';
    addClass(btnAcfunQueBLe[0],"on");
    removeClass(btnAcfunQueBLe[1],"on");
};
btnAcfunQueBLe[1].onclick = function(){
    localStorage.acfunQueBLe = 'off';
    addClass(btnAcfunQueBLe[1],"on");
    removeClass(btnAcfunQueBLe[0],"on");
};


//原生js添加class
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}
function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}
function toggleClass(obj,cls){
    if(hasClass(obj,cls)){
        removeClass(obj, cls);
    }else{
        addClass(obj, cls);
    }
}
function toggleClassTest(){
    var obj = document. getElementById('test');
    toggleClass(obj,"testClass");
}