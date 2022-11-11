document.querySelector('#sub').addEventListener("click",function (event){
   
    
        event.preventDefault();
         let x=document.querySelector("#email").value;
         localStorage.setItem("email",JSON.stringify(x))
        
         if(x!=""){
         window.location.href="submit.html"; 
        }
        else{
            alert("Plese Write Your Work Email")
        }
        }) 
      


    
                           
