$(function (){
    // $("p").click(function(){
    //     console.log("You clicked on a paragraph");
    // });
    // $("p").hover(function(){
    //     console.log("hovering");
    //     },
    //     function(){
    //         console.log("you left");
    //     });
    // $("input").focus(function(){
    //     console.log("you did something");
    // });
    // $("p").on("click", function(){
    //     console.log("You clicked on a paragraph");
    // });
//     $( "p" ).on({
//      "click": function() { console.log( "clicked!" ); },
//      "mouseover": function() { console.log( "hovered!" ); }
//   });
//     $("p").off("click");
    $( "p" ).one({"click": function() { 
         console.log( "clicked!" ); 
     },
     "mouseover": function() { console.log( "hovered!" ); }
  });
  
});

//          jQuery-Events
// 1.) Click event can be applied to any HTML element
// 2.) Other DOM events: dblclick, mouseenter, mouseleave, mousedown, mouseup, hover
// 3.) Common form events: foucs, blur, change
// 4.) with .on method: more events can be added
// 5.) several events can ve added with their respective functions
// 6.) .off turns off any event
// 7.) .one method allows event's function to run once