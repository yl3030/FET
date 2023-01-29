function btnDownload() {
    $(".btn-download").each(function(){
        if($(this).hasClass("normal")) {
            let span = $("<span>立即下載</span>");
            $(this).append(span);
        }else if($(this).hasClass("downloading")) {
            let span = $("<span>下載中</span><img src='./public/img/icon/loading.svg'>");
            $(this).append(span);
        }else if($(this).hasClass("downloaded")) {
            let span = $("<span>已下載</span><img src='./public/img/icon/true.svg'>");
            $(this).append(span);
        }
    })
};

btnDownload();


$(".songList_pic").click(function(){
    if($(this).hasClass("playing")) {
        $(this).removeClass("playing");
    }else {
        $(this).addClass("playing");
        $(this).parents(".swiper-slide").siblings(".swiper-slide").find(".songList_pic").removeClass("playing");;
    }
})

$(".anno_title").click(function(){
    $(this).find(".anno_icon").toggleClass("active");
    $(this).parents(".anno_item").find(".anno_content").slideToggle(300);
})

$(".footer_top").click(function(){
    $("html, body").animate({scrollTop: 0}, 300);
})