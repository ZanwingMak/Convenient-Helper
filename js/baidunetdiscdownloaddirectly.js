function baiduNetDiscDownloadDirectly(){
    navigator.__defineGetter__("platform", function(){return "Linux";});
}

chrome.runtime.sendMessage('localStorageBaiduNetDiscDownloadDirectly', function(response){
    if(response == 'on'){
        baiduNetDiscDownloadDirectly();
    }
});