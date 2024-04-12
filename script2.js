//wap a prgram to know which is the coldest country in array
/*let countries=["Canada","London","NewYork","Russia"];
    if("canada"=="London","NewYork","Russia"){
        console.log("Canada is the coldest country");
    }
    console.log(countries);

    //*/

    

    // wap a linear search program also find the number of itration of found element
/*{
let numbers = [10,2,3,4,5,6,7,8,9]
let searchElement = Number(prompt("Enter Number to search !"))

let postion = -1

let found = false

let repeatCount = []

for (let i = 0; i < numbers.length; i++) {
    if (searchElement == numbers[i]) {
        found = true
        postion = i + 1
        repeatCount.push(postion)
    }
}

if(found){
    console.log(`Element ${searchElement} was found on position/s : ${repeatCount} | the element has been repeated ${repeatCount.length} times !`)
}else{
    console.log(`Element ${searchElement} was not found position : ${postion} | the element has been repeated ${repeatCount.length} times !`)
}
}*/

//Random Numbers
/*{

let RamdomNumber=(length,Rangelimit)=>{
    let integers=[]
    let Number=0
        for(let i=0;i<length;i++){
            Number=Math.floor(Math.ramdom()*Rangelimit+1)
            integers[i]=Number
        }
        return integers;
}
let Number=RandomNumber(10,11)

console.log(Number)
}*/

//Random Numbers
// wap in js to make a array of 10 random numbers element(using Math class and array push/unshift method)
/*{
let createRandomNumberArray = (length, RangeLimit) => {
    let ArrayName = []
    let randomNumber = 0
    for (let i = 0; i < length; i++) {
        randomNumber = Math.floor(Math.random() * RangeLimit + 1)
        ArrayName[i] = randomNumber
    }
    return ArrayName;
}
let numbers = createRandomNumberArray(10, 11)

console.log(numbers)
}*/

/*{
    let students = [ 
          {name: "amey" , age : 13 , contact: 9766696550},
           {name: "jayesh" , age : 19 , contact: 787454683},
           {name: "Anushree" , age : 23 , contact: 789745464},
           {name: "Ayushi" , age : 20 , contact: 4567688963},
          {name: "Unnati" , age : 11 , contact: 5457993632},
           {name: "Tina" , age : 16 , contact: 8777999633},
           {name: "yash" , age: 22, contact: 7897987642 }
       ]*/
      
       //students[0].address = "nagpur"
      
      // we have created a data sheet of student in array called students each element of this array is object which has some keys like name, age, contact
      
       //students.push({name:"om", age: 15 , contact: 787987987})
      
      /*for(let student of students){
           student.address = "nagpur"
       }
      
       for(let student of students){
           console.log(student)
       }
      
       students.forEach((student,index)=>{
           console.log(student)
           console.log("at")
           console.log(index)
       })*/
      
       /*let displayStudents = (student)=>{
           console.log("from map")
           console.log(student)
       }
      
       students.map(displayStudents)*/
      
       /*for(let i=0;i< students.length; i++){
           console.log("for loop")
           console.log(students[i])
       }
      }*/
      
     // sorting

      // let nums = createRandomNumberArray(5,100)
      
      // console.log(nums)
      
      // // bubble sort algo 
      // let temp;
      // let i , j = 0;
      
      // // logic
      
      // for( i = 0 ; i < nums.length ; i++){
      //     for( j = 0 ; j < nums.length ; j++){
      //         if( nums[j] > nums[j+1] ){
      //             temp = nums[j]
      //             nums[j] = nums[j+1]
      //             nums[j+1] = temp
      //         }
      //     }
      // }
      
      // console.log("sorted array 1 is  : ")
      // console.log(nums)
      
      // for( i = 0 ; i < nums.length ; i++){
      //     for( j = 0 ; j < nums.length ; j++){
      //         if( nums[j] < nums[j+1] ){
      //             temp = nums[j]
      //             nums[j] = nums[j+1]
      //             nums[j+1] = temp
      //         }
      //     }
      // }
      
      // console.log("sorted array 2 is : ")
      // console.log(nums)
      
      // binary search algorithm
      
      
      // genrating radom array
      
      // let Array1 = createRandomNumberArray(10, 100)
      
      // console.log(Array1)
      
      // Array1 = sortArray(Array1)
      
      // console.log(Array1)
      
      // write less
      
      // let searchValue = prompt("Enter Value to search in Array Using Binary Algo !")
      
      // let Array1 = [10, 22, 33, 45, 57, 58, 60, 99, 110, 111, 112, 113, 114, 115]
      
      // let searchValue = 50
      
      // // logic
      // // if value is found return the value or else if not found return -1
      
      // let upperBound = Array1.length - 1
      // let lowerBound = 0
      
      // console.log(upperBound, lowerBound, midPoint)
      
      // for (let i = 0; upperBound != lowerBound; i++) {
      
      //     if (midPoint == searchValue) {
      //         console.log(`we found the element ${midPoint} !`)
      //         break;
      //     } else if (midPoint < searchValue) {
      //         upperBound = midPoint
      //         lowerBound = 0
      //         midPoint = lowerBound + Math.floor(upperBound - lowerBound / 2)
      //     }else{
      //         upperBound = Array1.length - 1
      //         lowerBound = midPoint
      //         midPoint = lowerBound + Math.floor(upperBound - lowerBound / 2)
      //     }
      
      // }
      
      // while (midPoint <= upperBound) {
      //     if (Array1[midPoint] == searchValue) {
      //         console.log(`we found the element ${midPoint} !`)
      //         // break;
      //     } else if (midPoint < searchValue) {
      //         upperBound = midPoint
      //         lowerBound = 0
      //         midPoint = lowerBound + Math.floor((upperBound - lowerBound )/ 2)
      //     } else {
      //         upperBound = Array1.length - 1
      //         lowerBound = midPoint
      //         midPoint = lowerBound + Math.floor((upperBound - lowerBound )/ 2)
      //     }
      // }
      
      // while (lowerBound <= upperBound) {
      
      //     let midPoint = lowerBound + Math.floor((upperBound - lowerBound) / 2)
      
      
      //     if (Array1[midPoint] == searchValue) {
      //         console.log(`Element Found ${searchValue}`)
      //         break;
      //     } else if (Array1[midPoint] < searchValue) {
      //         lowerBound = midPoint
      //     } else if (Array1[midPoint] > searchValue){
      //         upperBound = midPoint
      //     }else{
      //         console.log(`Element not Found ${searchValue}`)
      //     }
      // }
      
      // let binarySearchFunction = (array,searchValue) =>{
      //     let upperBound = array.length - 1
      //     let lowerBound = 0
      
      //     while(lowerBound <= upperBound){
      //         let midPoint = lowerBound + Math.floor((upperBound - lowerBound)/2)
      
      //         if(array[midPoint] == searchValue){
      //             return `element ${searchValue} is present in the array !`
      //         }
      
      //         if(array[midPoint] < searchValue){
      //             lowerBound = midPoint + 1
      //         }else{
      //             upperBound = midPoint - 1
      //         }
      //     }
      
      //     return `element ${searchValue} is not present in the array !`
      
      // }
      
      // console.log(binarySearchFunction(Array1,58))
      
      // using while loop
      
     /* let Array1 = createRandomNumberArray(10,100)
      
      Array1 = sortArray(Array1)
      
      console.log(Array1)
      
      let searchValue = Number(prompt("Enter Search Value for Binary Search in A array !"))
      let flag = false
      
      let lowerBound = 0
      let upperBound = Array1.length - 1
      
      let midPoint;
      
      let i = 0
      
      while (lowerBound <= upperBound) {
      
          if(searchValue < Array1[lowerBound] || searchValue > Array1[upperBound] ){
              console.log("search element is not present !")
              break;
          } 
      
          midPoint = lowerBound + Math.floor((upperBound - lowerBound) / 2)
      
          if (Array1[midPoint] === searchValue){
              flag = true
              break;
          }
      
          if(Array1[midPoint] < searchValue){
              lowerBound = midPoint + 1
          }else{
              upperBound = midPoint - 1
          }
      
          i = i + 1
      
      }
      
      if(flag){
          console.log(`Element ${searchValue} found at index ${midPoint} !`)
      }else{
          console.log(`Element ${searchValue} not found !`)
      }
      
      console.log(i)
    */
   //sort Method ascending order
   {
   let numbers = [5,7,9,4,3];
   console.log(numbers);
   numbers=numbers.sort ((a,b) => {
    return a-b;
  } )
   console.log(numbers)
}

   //descending order
   {
   let numbers = [5,7,9,4,3];
   console.log(numbers);
   numbers=numbers.sort ((a,b) => {
    return b-a;
  } )
   console.log(numbers)
}
//filter method
let numbers =[1,3,5,7,9];
console.log(numbers);
numbers=numbers.filter((element)=>{
    return element != 7
})
console.log(numbers);

//those function who accepts another function as an arg can be called as higher order function

    /*let Array1 = createRandomNumberArray(10, 100)
      
      // console.log(Array1)
      
      // Array1 = sortArray(Array1)
      
      // console.log(Array1)*/

      {
        let array2=[1,2,3,4,5,6,7,8,9];
            let searchvalue2=8;
            let index=binarySearch(array2,searchvalue2);
            console.log(index);

        function binarySearch(array,searchvalue){
            let lowerbound=0;
            let upperbound=array.length-1;
            while(lowerbound<=upperbound){
                let mid=Math.floor((lowerbound+upperbound)/2);
                if(array[mid]==searchvalue){
                    return mid;
                }else if(array[mid]<searchvalue){
                    lowerbound=mid + 1;
                }else{
                    upperbound = mid -1;
                } 
            }
            return -1;
        }
      }
    

