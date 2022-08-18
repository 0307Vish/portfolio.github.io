console.log("script run test")

document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
})