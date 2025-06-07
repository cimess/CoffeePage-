const sideNav=document.querySelector(".sidebar")
const closeSideBar=document.querySelector(".close-sidebar");
const sideBarButton=document.querySelector(".navbutton");
const pageContent=document.querySelector(".container");


sideBarButton.addEventListener("click",()=>{
sideNav.classList.toggle("open")
pageContent.classList.toggle("blured")
})

closeSideBar.addEventListener("click",()=>{
   sideNav.classList.toggle("open")
   pageContent.classList.toggle("blured")
})
