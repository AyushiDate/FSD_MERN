
// code without setInterval function
/*{
let i=1;
while(i <= 100){
    console.log("Aish");
i++;
  }
}*/

// code with using setInterval function
/*{
setInterval(()=>{
      console.log("Aish!")
  },10) 
}*/

//setInterval(()=>{}) , setTtimeout(()=>{}) // this higher order methods/function

// let i = 1
// while (i <= 1000) {
//     console.log("hello , world !")
//     i++
// }

// 1000ms - 1s

// setInterval(()=>{
//     console.log("hello, world !")
// },50) 

// console.log("next line !")

// let fun1 = setInterval(() => {

//     let date = new Date()

//     document.getElementById("time").innerHTML = date.toLocaleTimeString()
//     // console.log(date.toLocaleTimeString() )

// }, 1000)

// setTimeout(() => {
//     // console.log("time out !")
//     clearInterval(fun1)
// }, 60000)



// setTimeout(()=>{
//     console.log("hi") //we have to hold this line uptill 2 sec
// },2000)

// let remaining_time = 10

// let reverseTime = setInterval(()=>{
//     document.getElementById("remaining_time").innerHTML = remaining_time + "s"
//     remaining_time -= 1
// },1000)

// setTimeout(()=>{
//     clearInterval(reverseTime)
// } , 11000)

// // let abc = {
// //     log: ()=>{console.log("hello")}
// // }

// abc.log()

//There are two types of methods / function

//1) setInterval
//2) setTimeout

/*setTimeout(function(){
  console.log("Hello World");
},

2000);*/

/*function myFunction(){
  console.log("Hello World");
}*/


//setTimeout(myFunction,2000);
/*setTimeout(function(){
  console.log("Hello World");
},
10000);*/

/*function sayHello() {
  console.log("Hello!");
}

// Call the sayHello function every 2 seconds
const intervalId = setInterval(sayHello, 2000);*/

/*setTimeout(()=>{
  console.log("Hello Nagpur");
},6000)*/

//2) setInterval

/*setInterval(()=>{
       console.log("hello, world !")
   },10) 
  
   console.log("next line !")*/

   /*setTimeout(()=>{
         clearInterval(reverseTime)
     } , 11000)*/

    /* setTimeout(() => {
       console.log("time out !")
          clearInterval(fun1)
       }, 60000)*/

       /*let remaining_time = 10

 let reverseTime = setInterval(()=>{
     document.getElementById("remaining_time").innerHTML = remaining_time + "s"
    remaining_time -= 1
 },1000)*/

     //while program using greet function

     /*while (i <= 1000) {
           console.log("hello , world !")
           i++
       }*/

       /*let greet = () => {
        return "My Webpage"
       }
       console.log(greet())
       console.log(greet())
       console.log(greet())
       console.log(greet())
       console.log(greet())*/

       /*let remaining_time=10
       let reverseTime=setInterval(()=>{
        document.getElementById("remaining_time").innerHTML=remaining_time+"s"
        remaining_time-=1
       },1000)

       setTimeout(()=>{
        clearInterval(reverseTime)
       },11000)*/



function hello(){
  console.log("hello")
}
setTimeout(hello,4000);