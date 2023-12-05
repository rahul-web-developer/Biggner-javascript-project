
 //javascript start here

 const url = "https://api.github.com/users";

 const searchinput = document.querySelector("#inputsearch")

   

 let searchbtn = document.querySelector("#search");



 let profilecontainer = document.querySelector("#profile-container");
   
  let loadingelement = document.querySelector("#loadingelement");





  const api = async()=>{

    const username = searchinput.value;
    loadingelement.innerText = "loading....";

 
     loadingelement.style.color = "black"

    try {
        
    const response = await fetch(`${url}/${username}`)
  
     let data = await response.json()


     if(data.bio){

      loadingelement.innerText = "";

      profilecontainer.innerHTML = genratefile(data)
     }else{
      loadingelement.innerHTML = data.message;
       loadingelement.style.color = "red"
       profilecontainer.innerText = ""
     }

     console.log("data is ", data)

    } catch (error) {
        console.log(error)
        loadingelement.innerText = "";

    }

  }

  // api()


  searchbtn.addEventListener('click',api)




  const  genratefile = (profile)=>{

    return  (`<div class="profile-box">

    <div class="top-section">
          
        <div class="left">
             <div class="avatar">
                <img src="${profile.avatar_url}">
             </div> 
             <div class="self">
                <h1>${profile.name}</h1>
                <h1>${profile.login}</h1>
             </div>

        </div>
        
<a href="${profile.html_url}" target="_blank">
<button id="check">check profile</button>
</a>
    </div>

    <div class="about">

        <h2>about</h2>
        <p>${profile.bio}</p>
    </div>

    <div class="status">
        <div class="status-item">
            <h3>followers</h3>
            <p>${profile.followers  }</p>
        </div>
        <div class="status-item">
            <h3>following</h3>
            <p>${profile.following}</p>
            
        </div>
        <div class="status-item">
            <h3>Repository</h3>
           <P>${profile.public_repos}</p> 
        </div>
    </div>

</div>
`)

  
  }