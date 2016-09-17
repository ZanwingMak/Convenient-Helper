function baiduNetDiscUrlReplaceToHttps(){
    //var debug = 0;
    var new_location = location.href.replace(/http\:/, 'https:');
    //if ( debug > 0 ) {
    //    alert(  "Hash:     "+location.hash+
    //        "\nHost:     "+location.host+
    //        "\nHostname: "+location.hostname+
    //        "\nHREF:     "+location.href+
    //        "\nPathname: "+location.pathname+
    //        "\nPort:     "+location.port+
    //        "\nProtocol: "+location.protocol+
    //        "\n"+
    //        "\nNew Location: "+new_location);
    //};
    location.href = new_location;
}

chrome.runtime.sendMessage('localStorageBaiduNetDiscUrlReplaceToHttps', function(response){
    if(response == 'on'){
        baiduNetDiscUrlReplaceToHttps();
    }
});