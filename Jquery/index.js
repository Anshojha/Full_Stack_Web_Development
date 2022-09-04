// document.querySelector("h1").style.color="red"; This is a written in javascript
//  $("h1").css("color","red");    Both the code has same meaning but this is because of jQuery


// document.querySelectorAll("button"); is used to select all the button in javascript
//  $("button"); Select the all button and also used for single button in jQuery


// $("h1").addClass("big-title margin-50"); // This is to add the class  in jQuery here margin 50 is another class that add using jQuery
// $("h1").removeClass("big-title"); // This is to remove the class  in jQuery

// $("h1").text("bye"); // is used to change the text of selected tag


// console.log($("img").attr("src")); is used to get the attribute
// $("a").attr("href","https://www.yahoo.com"); // this take us to the yahoo search engine instesd to google search engine



// Adding eventListner using jQuery
// $("h1").click(function(){
//     $("h1").css("color","purple");
// })
// Adding Event Listner to buttons
// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";
//     })
// }



// Adding click eventListner to button using jQuery
// $("button").click(function(){
//     $("h1").css("color", "purple");
// })


// on keypress
// $("input").keypress(function(event){
//     console.log(event.key);
// })

// this change the text to key pressed
// $(document).keypress(function(event){
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover",function(){
//     $("h1").css("color", "purple"); 
// })

// $("h1").before("<button>New</button>"); // To add button before h1
// $("h1").after("<button>New</button>"); // To add after h1
// $("h1").prepend("<button>New</button>"); // To add just before h1
// $("h1").apend("<button>New</button>"); // To add just after h1

// $("button").remove(); is used to remove all the buttom 



// this function hide the h1 element
// $("button").click(function(){
//     $("h1").hide();
// })
// $("button").click(function(){
//     $("h1").toggle();
// })

$("button").on("click",function(){
   console.log( $("h1").slideUp()); 
});