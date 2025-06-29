const phoneButton=document.querySelectorAll(".back-button")
const dropdownButton=document.querySelector(".dropdown-b")
const dropdownContainer=document.querySelector(".airtime-dropdown-container")
const dropdown=document.querySelector(".dropdown")
const content=document.querySelector(".content")
const closeButton=document.querySelector(".close-button")
const itemDiv=document.querySelector(".item-div")
const billDropdownContent=document.querySelector(".bill-dropdown-container")
const billDropdownButton=document.querySelector(".bill-dropdown-b")
const billProduct=document.querySelector(".bill-product")

if(billDropdownButton&&billDropdownContent){
billDropdownButton.addEventListener("click",()=>{
   if(billDropdownContent.style.display==="flex"){
      billDropdownContent.style.display="none"
      content.classList.remove("blurred")
   }else{
      billDropdownContent.style.display="flex"
content.classList.add("blurred")
   }
})

closeButton.addEventListener("click",()=>{
    billDropdownContent.style.display="none"
         content.classList.remove("blurred")

})


// this is for the outerpart of it so outside the element is clickable
document.addEventListener("click", (e)=>{
   if(!billDropdownContent.contains(e.target)&& !billDropdownButton.contains(e.target)){
        billDropdownContent.style.display="none"
         content.classList.remove("blurred")
   }
})

// this is for making the clicked text to be in the span 

billDropdownContent.addEventListener("click",(e)=>{
   const target=e.target;

   if(target.matches("[data-value]")){
      const clickedItem=target.dataset.value;
     billProduct.innerText=clickedItem;
      itemDiv.innerText=clickedItem;
      billDropdownContent.style.display="none"
      content.classList.remove("blurred")
   }
})
}


phoneButton.forEach(button=>button.addEventListener("click",()=>{
   window.history.back()
}))

// this is for the drop downdown button logic displaying it and not
if(dropdown && dropdownButton){
dropdownButton.addEventListener("click",()=>{
   if(dropdown.style.display==="flex"){
      dropdown.style.display="none"
      content.classList.remove("blurred")
   }else{
      dropdown.style.display="flex"
content.classList.add("blurred")
   }

})

// this is for the outerpart of it so outside is clickable
document.addEventListener("click", (e)=>{
   if(!dropdown.contains(e.target)&& !dropdownButton.contains(e.target)){
        dropdown.style.display="none"
         content.classList.remove("blurred")
   }
})
// this is for the button iside the dropdown
closeButton.addEventListener("click",()=>{
    dropdown.style.display="none"
         content.classList.remove("blurred")
})

// this is for making the clicked text to be in the span 

dropdown.addEventListener("click",(e)=>{
   const target=e.target;

   if(target.matches("[data-value]")){
      const clickedItem=target.dataset.value;
     itemDiv.innerText=clickedItem;
      dropdown.style.display="none"
      content.classList.remove("blurred")
   }
})

}



