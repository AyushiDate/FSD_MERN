// starting jq

// document - $

// console.log(document)

// console.log($)

// let jsTarget = document.querySelector("#id1")

// console.log(jsTarget)

// jsTarget.innerHTML = "new data !"

// jsTarget.style.color = "red"

// let jqTarget = $("#id1")

// console.log(jqTarget)

// jqTarget.html("New data from jq !")

// jqTarget.css("color","blue")
// // jqTarget.css("font-size","150px")
// jqTarget.css("background","linear-gradient(red,blue)")

// jqTarget.click(()=>{
//     alert("heading was clicked !")
// })

// jqTarget.mouseover(()=>{
//     alert("heading was hovred  !")
// })

// jqTarget.dblclick(()=>{
//     alert("heading was double clicked  !")
// })

// $(document).keypress((event)=>{
//     console.log(event.key)
// })

// ANIMATIONS

/*$("#btn").click(()=>{
    $("#id1").fadeIn(200,()=>{
        console.log("fade completed !")
    })
})

$("#btn2").on("mouseover",()=>{
    $("#element1").toggleClass("collapse")
})*/

/*console.log(jQuery);
console.log("We are using jQuery");*/

//jQuery syntax
//$('selector').Action/function()

$('p').click(); //click on p // click is a function

$("p").click(function () {
  console.log("you clicked on p");

$('p').hide(); // 'hide' is a function,all para are hide

$(this).hide(); // 'this' is a selector,only one para are hide on click(jis par click kiya vhi hide)

//$("#id").hide();

  //$(".class").hide();
}); //do this we clicked on p*/

//Document.ready function // I will work on the documents once the documents are ready

/*$(function(){ // It will suffice if you write just this much

})*/

//Define document ready function = when my documents is ready then run this code is called document ready function

/*$(document).ready(function () {
  console.log(jQuery);
  console.log("We are using jQuery");*/

  //jQuery syntax
  //$("selector").Action / function () {
  /*$("p").click(); //click on p // click is a function

  $("p").click(function () {
    console.log("you clicked on p");

    $("p").hide(); // 'hide' is a function,all para are hide

    $(this).hide(); // 'this' is a selector,only one para are hide on click(jis jis par click kiya vhi hide)

    $("#id").hide();

    $(".class").hide();
  }); //do this we clicked on p
  });*/

//There are three main types of selectors in jQuery
//1. element selector
//2. id selector
//3. class selector

//1. Element selector - This is an example of element selector which clicks on all p
$('p').click();