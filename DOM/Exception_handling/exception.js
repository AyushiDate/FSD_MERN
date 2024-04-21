{
let a=50;
let b=0;
console.log(a/b);
}  //output: infinity (because divided by zero)

{
   let a=70;
   let b=0;

   try{
        if(b===0){
        throw("division by zero is undefined");
        }
    console.log(a/b);
    
     }catch(err){
        console.log(err)

      }
}

/*{
    try{
        let name= window.prompt("Enter your name");
        
        if(name.length > 6){
          throw("length overloaded")
    }
    
    } catch(e){
        console.log(e);
    }
}*/