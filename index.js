 document.querySelector("#loginn").addEventListener("click",mufu)
function mufu(){
    document.querySelector(".over").classList.add("overshow")
document.querySelector(".login").classList.add("loginshow")

}
document.querySelector(".login span").addEventListener("click",()=>{
    document.querySelector(".over").classList.remove("overshow")
document.querySelector(".login").classList.remove("loginshow")
console.log("ram")
})
document.querySelector("#news").addEventListener("click",()=>{
    document.querySelector(".page").classList.add("pageshow")
})
document.querySelector("#qqq").addEventListener("click",()=>{
     document.querySelector(".page").classList.remove("pageshow")

})
document.querySelector("#soluton").addEventListener("click",()=>{
    document.querySelector(".solu").classList.add("solushow")
})
document.querySelector("#zzz").addEventListener("click",()=>{
     document.querySelector(".solu").classList.remove("solushow")

})


let emai=document.querySelector("#email").value;
let fass=document.querySelector("#pass").value;
document.querySelector("#sub").addEventListener("click",()=>{
    if(emai==JSON.parse(email)){
    if(fass==JSON.parse(pass)){
        window.location.href="AirtableHome.html"
    }
}
else{
    alert("please write your rigth email or pass || or || Create New Account")
}
});
document.querySelector("#pro").addEventListener("click",function(){
    window.location.href="pro.html"
})



