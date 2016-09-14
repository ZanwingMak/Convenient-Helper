//初始化
chrome.runtime.sendMessage('init', function(response){
    //让background来执行初始化
    return true;
});