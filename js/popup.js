var btnClear = document.getElementById('clear'),
    txtText = document.getElementById('text'),
    btnBaiduNetdisc = document.getElementById('BaiduNetdisc'),
    btnMagnet = document.getElementById('Magnet'),
    btnPixivWorksId = document.getElementById('PixivWorksId'),
    btnPixivAuthorId = document.getElementById('PixivAuthorId'),
    btnBilibiliAvId = document.getElementById('BilibiliAvId'),
    btnAcfunAcId = document.getElementById('AcfunAcId'),
    selExressCompany = document.getElementById('ExressCompany'),
    btnExress = document.getElementById('Express');


btnClear.onclick = function(){
    txtText.placeholder = "在这里输入~";
};

btnBaiduNetdisc.onclick = function(){
    var text = txtText.value.trim();
    if(text.length === 0){
        txtText.placeholder = "你倒是写点什么呀!";
        return false;
    }else if(text.indexOf('/') === -1){
        txtText.placeholder = "在这里输入~";
        window.open('http://pan.baidu.com/s/' + text);
    }else{
        txtText.placeholder = "在这里输入~";
        window.open('http://pan.baidu.com/s/' + text.slice(text.lastIndexOf('/')+1));
    }
};

btnMagnet.onclick = function(){
    var text = txtText.value.trim();
    if(text.length === 0){
        txtText.placeholder = "你倒是写点什么呀!";
        return false;
    }else{
        txtText.placeholder = "在这里输入~";
        txtText.value = 'magnet:?xt=urn:btih:' + text;
    }
};

btnPixivWorksId.onclick = function(){
    var id = txtText.value.trim();
    if(id.length === 0){
        txtText.placeholder = "你倒是写点什么呀!";
        return false;
    }else if(isNaN(Number(id))){
        txtText.value = '';
        txtText.placeholder = "请输入数字~";
    }else{
        txtText.placeholder = "在这里输入~";
        window.open('http://www.pixiv.net/member_illust.php?mode=medium&illust_id=' + id);
    }
};

btnPixivAuthorId.onclick = function(){
    var id = txtText.value.trim();
    if(id.length === 0){
        txtText.placeholder = "你倒是写点什么呀!";
        return false;
    }else if(isNaN(Number(id))){
        txtText.value = '';
        txtText.placeholder = "请输入数字~";
    }else{
        txtText.placeholder = "在这里输入~";
        window.open('http://www.pixiv.net/member.php?id=' + id);
    }
};
btnBilibiliAvId.onclick = function(){
    var id = txtText.value.trim().toLowerCase();
    if(id.length === 0){
        txtText.placeholder = "你倒是写点什么呀!";
        return false;
    }
    if(id.slice(0,2)=='av'){
        id = id.slice(2);
    }
    if(isNaN(Number(id))){
        txtText.value = '';
        txtText.placeholder = "写错啦写错啦~";
        return false;
    }else{
        txtText.placeholder = "在这里输入~";
        window.open('http://www.bilibili.com/video/av' + id);
    }
};

btnAcfunAcId.onclick = function(){
    var id = txtText.value.trim().toLowerCase();
    if(id.length === 0){
        txtText.placeholder = "你倒是写点什么呀!";
        return false;
    }
    if(id.slice(0,2)=='ac'){
        id = id.slice(2);
    }
    if(isNaN(Number(id))){
        txtText.value = '';
        txtText.placeholder = "写错啦写错啦~";
        return false;
    }else{
        txtText.placeholder = "在这里输入~";
        window.open('http://www.acfun.tv/v/ac' + id);
    }
};

btnExress.onclick = function(){
    var number = txtText.value.trim();
    var expressCompany = selExressCompany.value.trim();
    if(number.length === 0){
        txtText.placeholder = "你倒是写点什么呀!";
        return false;
    }
    if(expressCompany == ''){
        txtText.value = "";
        txtText.placeholder = "你还没选快递公司啊~";
        return false;
    }else{
        txtText.placeholder = "在这里输入~";
        window.open('http://www.kuaidi100.com/chaxun?com='+expressCompany+'&nu='+number);
    }
};


