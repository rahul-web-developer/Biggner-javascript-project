

let result = document
.querySelector("#result");


let search = document.querySelector("#search-btn");


let user = document.querySelector("#input").value;

user = "";


// console.log(user)

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";



// console.log(result,search,user);

//  function main(){


//     let user = document.querySelector("#input").value;


//     if(user.length == 0){
//         result.innerHTML = `<h3>Input Fieled Is Empty</h3>`;
//     }else if(user.key == "Enter"){
       
//       let fetch = await  fetch(url+user)
// .then((data)=>{
//     return datanew = await data.json();

// })
// .then((data)=>{
//     let mymeals = data.meals[0];
//     console.log("mymeals",mymeals)
// })




// user.value = "";

//     }

    




// }




search.addEventListener('click',function(){

    let user = document.querySelector("#input").value;

    

    if(user.length == 0){
        result.innerHTML = `<h2>Invalid This  Type  Item Is Not Available Here Sorry For Excuse...</h2>`;


    }else{

        // url += url+user;


        fetch(url+user)


        .then((data)=>{
            return data.json()
        })
        .then((data)=>{

            let mymeals  = data.meals[0];
            console.log(mymeals)

                
        
        })

        // user = ""
        

       
        
    }









})


