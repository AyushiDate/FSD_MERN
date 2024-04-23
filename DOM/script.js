// document object model - dom

// document: class, tagname, id 

// console.log(document)

// let a = document.getElementsByClassName("second")
// // return a HTML collection that can be used as an Array

// console.log(a)
// console.log(a.length)
// console.log(a[2])

// let b = document.getElementsByTagName("h1")
// // return a HTML collection that can be used as an Array

// console.log(b)
// console.log(b.length)
// console.log(b[0])

// let c = document.getElementById("i1")
// // return only one element if exists else null

// console.log(c)

// querySelector
// querySelectorAll

// let d = document.querySelector(".first")
// // returns only single elememt / first occurence if exists

// console.log(d)

// let e = document.querySelectorAll("#i1")
// // returns Node List of element that can be used as an array 

// console.log(e)

//Add text in all divs at a time
{
let div = document.querySelectorAll("#i1");
     div[0].innerText="Aish"
     div[1].innerText="Aish"
}

//another method for add text in all divs at a time
{
let divs = document.querySelectorAll("#i1");
let idx=1;
    for(div of divs) {
        div.innerText='Date ${idx}';
        idx++;
    }
}

// Add text with using queryselector
{
    let divs = document.querySelector("#i1");
     divs.innerText="Ayushi Date"
}

//change innerText with using id
{
let a = document.getElementById("i1");
   a.innerText="iiiiii";
   console.log(a);
}
    
