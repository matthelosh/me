$(window).load(function(){
    $(".se-pre-con").fadeOut("slow");
});
$(document).ready(function(){
    $(".close").click(function(){
        $(this).closest(".panel").fadeOut();
    });

    $(".menuTrigger").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("triggerActive");

    $(".menuSisi").toggleClass("show");
    
  });
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    // console.log(wScroll);
    if(wScroll >= 100){

    }
});