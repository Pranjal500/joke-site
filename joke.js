//....................FETCH API................
// const jokes = document.querySelector('#joke');
// const jokesBtn = document.querySelector('#jokebtn');

//  const generateJokes =()=>{
//      const setHeader = {
//          headers : {
//              Accept : "application/json"
//          }
//      }

//      fetch('https://icanhazdadjoke.com',setHeader)
//      .then((res)=>res.json() )
//      .then((data)=>{jokes.innerHTML= data.joke;
//     }).catch((error)=>{
//          console.log(error);
//      })
     
//  }

// jokebtn.addEventListener('click',generateJokes);
// generateJokes();


//.....................ASYNC - AWAIT..................
const jokes = document.querySelector('#joke');
const jokesBtn = document.querySelector('#jokebtn');

 const generateJokes =async()=>{
   try{ const setHeader = {
         headers : {
             Accept : "application/json"
         }
     }

    const res = await fetch('https://icanhazdadjoke.com',setHeader)
    const data = await res.json();
    jokes.innerHTML= data.joke;
   }catch(err){
       console.log(`the error is ${err}` );
   }
     
 }

jokebtn.addEventListener('click',generateJokes);
generateJokes();
