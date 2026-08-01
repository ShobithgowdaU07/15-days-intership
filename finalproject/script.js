const themebtn = document.querySelector(".theme-toggle");
 
function applyLightTheme(){
    document.body.style.background = "white";
    document.body.style.color = "black";
    document.querySelector(".navbar").style.background= "white";
    document.querySelectorAll("nav-links a").style.background = "black";
    themebtn.textContent= "🌞"
}
function applyDarkTheme(){
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.querySelector(".navbar").style.background= "darkblue";
    document.querySelectorAll("nav-links a").style.background = "lightblue";
    themebtn.textContent= "🌛";
}
if (localStorage.getItem("theme")==="dark"){
    applyLightTheme();
}else{
    applyDarkTheme();
}
themebtn.addEventListener("click", ()=>{
    const isDark = document.body.style.background==="black";
 
    if(isDark){
        applyLightTheme();
        localStorage.setItem("theme", "light");
    }else{
        applyLightTheme();
        localStorage.setItem("theme", "dark");
    }
})
 
localStorage.setItem("theme", "light");