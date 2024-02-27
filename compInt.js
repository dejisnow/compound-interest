window.onload= ()=>{
    


let pv = document.querySelector(".pv")
let yr = document.querySelector(".yr")
let fv = document.querySelector(".fv")
let intr = document.querySelector(".int")
let btn = document.querySelector(".btn")
let ans = document.querySelector(".ans")

pv.addEventListener("input",()=>{
    
         fv.disabled = true
      })


btn.addEventListener("click",()=>{
   fv.value = compInt() 
       
})


function compInt(){
let pValue = parseInt(pv.value)
     let fValue = parseInt(fv.value)
      let intR = parseInt(intr.value)
       let yR = parseInt(yr.value)
    
    
       
       
let result = (1+(intR/100))**(yR)

return pValue * result 


    
}



/*
A = P (1 + r/n)**n

*/

}
