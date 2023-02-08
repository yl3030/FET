function btnDownload() {
    $(".btn-download-text").each(function(){
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
        $(".songList_pic").removeClass("playing");;
        $(this).addClass("playing");
        // $(this).parents(".swiper-slide").siblings(".swiper-slide").find(".songList_pic").removeClass("playing");;
    }
})

$(".anno_title").click(function(){
    $(this).find(".anno_icon").toggleClass("active");
    $(this).parents(".anno_item").find(".anno_content").slideToggle(300);
})

$(".footer_top").click(function(){
    $("html, body").animate({scrollTop: 0}, 300);
})

$(".coupon_record_num").each(function(i){
    let num = i;
    if(!$(this).hasClass("text")) {
        if(num < 10) {
            num = "0" + num
        }
        $(this).text(num);
    }
})

$(".header_arrow").click(function(){
    history.back();
})

function tabRecord(){
    if($("#pills-try-tab").hasClass("active")){
        $(this).parents(".tab-record").removeClass("buy").addClass("try");
    }
    if($("#pills-buy-tab").hasClass("active")){
        $(this).parents(".tab-record").removeClass("try").addClass("buy");
    }
}

tabRecord();

$("#pills-try-tab").click(function(){
    $(this).parents(".tab-record").removeClass("buy").addClass("try");
})
$("#pills-buy-tab").click(function(){
    $(this).parents(".tab-record").removeClass("try").addClass("buy");
})

$(".songList-smallPic").each(function(){
    $(this).find(".songList-smallPic_num").each(function(i){
        let num = i + 1;
        $(this).text(num);
    })
})

$(".my_setting_active").click(function(){
    if(!$(this).parents(".my_setting").hasClass("empty")) {
        $(this).parents(".my_setting").find(".my_setting_list").slideToggle(300);
    }
})
$(document).click(function (event) {
    var setting = $(".my_setting");
    if (!setting.is(event.target) && setting.has(event.target).length === 0) {
        $(".my_setting_list").slideUp(300);
    }
});

$(".my_setting_list>li").click(function(){
    let text = $(this).text();
    $(this).parents(".my_setting").find(".my_setting_active").find("span").text(text);
    $(this).addClass("active").siblings("li").removeClass("active");
    $(this).parents(".my_setting_list").slideUp(300);
})

$(".cube").click(function(){
    let open = false;
    if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parents(".songList-check_item").siblings(".songList-check_item").each(function(i){
            if($(this).find(".cube").hasClass("active")) {
                open = true;
            }
        })
    }else {
        $(this).addClass("active");
        open = true;
    }
    if( open == true) {
        $(".btn-addSlider").attr("disabled",false);
    }else {
        $(".btn-addSlider").attr("disabled",true);
    }
})

$(".group_list_num").each(function(i){
    let num = i + 1;
    $(this).text(num + ".");
})

$(".switch").click(function(){
    $(this).toggleClass("active");
})

$(".header_searchBar_input input").keydown(function(){
    $(this).parents(".header_searchBar_input").addClass("focus");
})

$(".header_searchBar_input input").keyup(function(){
    let val = $(this).val();
    if(val == ""){
        $(this).parents(".header_searchBar_input").removeClass("focus");
    }
})