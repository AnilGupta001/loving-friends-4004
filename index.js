 document.querySelector("#loginn").addEventListener("click",mufu)
function mufu(){
    document.querySelector(".over").classList.add("overshow")
document.querySelector(".login").classList.add("loginshow")

}
document.querySelector("#spn").addEventListener("click",()=>{
    document.querySelector(".over").classList.remove("overshow")
document.querySelector(".login").classList.remove("loginshow")
console.log("ram")
})
document.querySelector("#news").addEventListener("click",()=>{
    document.querySelector(".page").classList.add("pageshow")
})
document.querySelector("#sss").addEventListener("click",()=>{
     document.querySelector(".page").classList.remove("pageshow")

})
document.querySelector("#soluton").addEventListener("click",()=>{
    document.querySelector(".solu").classList.add("solushow")
})
document.querySelector("#zzz").addEventListener("click",()=>{
     document.querySelector(".solu").classList.remove("solushow")

})


