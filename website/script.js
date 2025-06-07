const sideNav=document.querySelector(".sidebar")
const closeSideBar=document.querySelector(".close-sidebar");
const sideBarButton=document.querySelector(".navbutton");
const pageContent=document.querySelector(".container");

sideBarButton.addEventListener("click",()=>{
sideNav.classList.toggle("open")
sideBarButton.classList.toggle("rotate")
pageContent.classList.toggle("blured")
closeSideBar.classList.remove("rotate")

})

closeSideBar.addEventListener("click",()=>{
   sideNav.classList.toggle("open")
   closeSideBar.classList.toggle("rotate")
   pageContent.classList.toggle("blured")
   sideBarButton.classList.remove("rotate")
})
