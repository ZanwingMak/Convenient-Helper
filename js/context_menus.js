chrome.runtime.sendMessage('localStorageAcfunVideoDownload', function(response){
    if(response == 'on'){
        chrome.contextMenus.create({
            type: 'normal',
            title: '下载该A站视频',
            id: 'c',
            onclick: acDownload,
            documentUrlPatterns: ["*://*.acfun.tv/v/ac*","*://*.aixifan.com/v/ac*","*://*.acfun.net/v/ac*"]
        });
    }
});