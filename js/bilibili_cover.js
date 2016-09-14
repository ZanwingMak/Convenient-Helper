function bilibili_cover(){
    var cover_box=document.createElement("div");
    cover_box.id="cover_box";
    var cover_image=document.querySelector(".cover_image").cloneNode(false);
    cover_image.id="cover_image";
    cover_image.onclick=function(){
        window.open(this.src,'_blank');
    };
    var cover_text=document.createElement("span");
    cover_text.textContent="视频封面";
    cover_text.id="cover_text";
    cover_box.appendChild(cover_text);
    cover_box.appendChild(cover_image);
    document.querySelector(".v_small").insertBefore(cover_box,document.querySelector(".v-live-recommend"));
//var _style = document.createElement('style');
//_style.innerText = '.elecrank-wrapper{padding:30px 0px 0px 10px;}#cover_box{padding-left:10px;padding-top:38px;}#cover_image{display:inline!important;width:258px;height:auto;margin-top:20px;cursor:pointer!important;}#cover_text{font-size:16px}';
//document.getElementsByTagName('head')[0].appendChild(_style);
}

chrome.runtime.sendMessage('localStorageBilibiliCover', function(response){
    //document.write(response);
    if(response == 'on'){
        bilibili_cover();
    }
});