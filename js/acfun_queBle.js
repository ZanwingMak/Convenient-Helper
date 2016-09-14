function acfunQueBLE(){
    String.prototype.correct = function () {
        return this.toString()
            .replace(/AcFun/gi, '缺Ｂ乐')
            .replace(/\bAC\b/g, '缺Ｂ');
    };
    function correctText() {
        var $this = $(this);
        $this.text($this.text().correct());
    }
    document.title = document.title.correct();
    $('.title').each(correctText);
    $('a.tag').each(correctText);
    $('h1').each(correctText);
    $('h2').each(correctText);
    $('#footer-inner').find('a').each(correctText);
    $('.bottom-footer').find('p').each(correctText);
}

chrome.runtime.sendMessage('localStorageAcfunQueBLe', function(response){
    //document.write(response);
    if(response == 'on'){
        acfunQueBLE();
    }
});