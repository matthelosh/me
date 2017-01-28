$(window).load(function(){
    $(".se-pre-con").fadeOut("slow");
});
$(document).ready(function(){
    $(".close").click(function(){
        $(this).closest(".panel").fadeOut();
    });
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    // console.log(wScroll);
    if(wScroll >= 100){

    }
});