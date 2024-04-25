// creating a promise

let myPromise = new Promise((resolve, reject) => {

    let input = xyz

    try {

        if (input == 123) {
            return resolve("Your input is accepted and going to resolved !")
        } else {
            return reject("Yout input is reject due to miss-match of data !")
        }
    }
    catch (err) {
        console.log("caught a error !")
    }

})

 /*handling of a promise using .then()

 myPromise.then((resolve)=>{
     console.log("relove code !")
     console.log(resolve)
 },(reject)=>{
     console.log("reject code !")
     console.log(reject)
 })*/

// handling of a promise using async await

/*let callPromise = async () => { // write async of to make a custom asyncronus function

    try {

        let response = await myPromise // also write await keyword in front of any promising code.

      
  console.log(response)
    }catch(err){
        console.log("error while handling a promise ")
        console.log(err)
    }*/

    // make sure to surround the entire block of code in try catch to catch any uncaught exceptions/error

//}

// async function callPromise(){

// }

/*callPromise()

console.log("instant log !")*/

/*let myPromise = new Promise((resolve, reject) => {

    let input = 123

    try {

        if (input == 123) {
            return resolve("Your input is accepted and going to resolved !")
        } else {
            return reject("Yout input is reject due to miss-match of data !")
        }
    }
    catch (err) {
        console.log("caught a error !")
    }

})*/
//Promises

/*{
function promise1 ((resolve , reject){
    let input =123
    if (input ==123){
        return resolve("Your input is accepted and going to resolved !")
    } else {
        return reject("Yout input is reject due to miss-match of data !")
    } 
    }
}*/

/*let promise=new promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("2 seconds have passed");
        resolve("resolved messege");
      },2000);
});
myPromise.then((response)=>{
    console.log("response log:");
    console.log(response);
});*/
