if(localStorage.bilibiliVideoDownload == "on"){
    createContextMenus('normal','下载该B站视频','bilibiliVideoDownload',biliDownload,["*://*.bilibili.com/video/av*"]);
}

if(localStorage.bilibiliBangumiDownload == "on") {
    createContextMenus('normal','下载该B站番剧','bilibiliBangumiDownload',biliDownload,["*://bangumi.bilibili.com/anime/v/*"]);
}

if(localStorage.acfunVideoDownload == "on"){
    createContextMenus('normal','下载该A站视频','acfunVideoDownload',acDownload,["*://*.acfun.tv/v/ac*","*://*.aixifan.com/v/ac*","*://*.acfun.net/v/ac*"]);
}

function biliDownload(info,tab){
    var url = info.pageUrl;
    if(url.indexOf("/anime/v/") != -1){
        window.open('http://www.bilibilijj.com/anime/v/' + parseInt(url.slice(url.search(/v/i)+2)));
    }else{
        window.open('http://www.bilibilijj.com/video/av' + parseInt(url.slice(url.search(/av/i)+2)));
    }
}
function acDownload(info,tab){
    var url = info.pageUrl;
    window.open('http://www.flvcd.com/parse.php?format=&kw=' + url);
}

//监听,返回消息
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == 'localStorageBilibiliVideoDownload'){
        //sendResponse('Hello from background.');
        sendResponse(localStorage.bilibiliVideoDownload);
    }
    if(message == 'localStorageBilibiliBangumiDownload'){
        sendResponse(localStorage.bilibiliBangumiDownload);
    }
    if(message == 'localStorageBilibiliCover'){
        sendResponse(localStorage.bilibiliCover);
    }
    if(message == 'localStorageAcfunVideoDownload'){
        sendResponse(localStorage.acfunVideoDownload);
    }
    if(message == 'localStorageAcfunQueBLe'){
        sendResponse(localStorage.acfunQueBLe);
    }
    if(message == 'localStorageBaiduNetDiscUrlReplaceToHttps'){
        sendResponse(localStorage.baiduNetDiscUrlReplaceToHttps);
    }
    if(message == 'localStorageBaiduNetDiscDownloadDirectly'){
        sendResponse(localStorage.baiduNetDiscDownloadDirectly);
    }
    if(message == 'init'){
        //初始化
        //B站视频下载右键菜单
        if (!localStorage.bilibiliVideoDownload) {
            localStorage.bilibiliVideoDownload = 'on';
        }
        //B站番剧下载右键菜单
        if(!localStorage.bilibiliBangumiDownload){
            localStorage.bilibiliBangumiDownload = 'on';
        }
        //B站视频页面显示封面
        if(!localStorage.bilibiliCover){
            localStorage.bilibiliCover = 'on';
        }
        //A站视频下载右键菜单
        if(!localStorage.acfunVideoDownload){
            localStorage.acfunVideoDownload = 'on';
        }
        //把ACFUN替换成缺B乐
        if(!localStorage.acfunQueBLe){
            localStorage.acfunQueBLe = 'on';
        }
        //百度网盘强制跳转到https协议
        if(!localStorage.baiduNetDiscUrlReplaceToHttps){
            localStorage.baiduNetDiscUrlReplaceToHttps = 'on';
        }
        //百度网盘直接下载，坚决不安装管家
        if(!localStorage.baiduNetDiscDownloadDirectly){
            localStorage.baiduNetDiscDownloadDirectly = 'on';
        }
    }
});

function createContextMenus(type,title,id,onclick,documentUrlPatterns){
    chrome.contextMenus.create({
        type: type,
        title: title,
        id: id,
        onclick: onclick,
        documentUrlPatterns: documentUrlPatterns
    });
}
