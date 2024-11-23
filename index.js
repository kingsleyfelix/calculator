const screenEl = document.querySelector(".screen")
const btnEl = document.querySelectorAll("p")

btnEl.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(btn.innerHTML === "0"){
            if(screenEl.innerHTML === "0"){
                return false
            }
        }
        if(btn.innerHTML === "="){
            screenEl.innerHTML = eval(screenEl.innerHTML.replace("×","*").replace("÷","/"))
        }else if(btn.innerHTML === "DEL"){
            screenEl.innerHTML = ""
        }else{
            screenEl.innerHTML += btn.innerHTML
        }
    
    })
})














