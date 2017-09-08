$(function(){
    
    // Examples:
    
    // $("img").hide(10000);
    // $("img").show(5000);
    
    //  $("h1").slideUp(10000);
    // $("h1").slideDown(5000);
    
    // $("p").fadeOut(10000);
    // $("p").fadeIn(5000);
    
    // $("p").toggle("normal");
    // $("img").toggle("slow");
    
    // $("h1").hide(100);
    // $("h1").fadeIn(2000).addClass("blue");
    
    $("h1").hide();
    $("h1").fadeIn(2000, function() {
        $(this).addClass("blue")
    });
    
    $("img").on("click", function(){
      $("h1").stop(); 
    });
    
    
    
    
    
    
});

//                          jQuery Effects
// 1.) hide, show, slideUp, slideDown, fadeOut, fadeIn : manipulation of elements
// 2.) within parameter parenthesis arguments can be passed: slow, fast, normal
// 3.) the arguments can also be passed in milliseconds
// 4.) toggle();
// 5.) differ an action until animation is completed - Animation call back function














