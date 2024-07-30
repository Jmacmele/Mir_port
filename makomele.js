 

     var tablinks = document.getElementsByClassName("tab-links");
     var tabcontents = document.getElementsByClassName("tab-contents");
    
     function opentab(tabname) {
         for (tablink of tablinks) {
             tablink.classList.remove("active-link");
         }
         for (tabcontent of tabcontents) {
             tabcontent.classList.remove("active-tab");
         }
         event.currentTarget.classList.add("active-link");
         document.getElementById(tabname).classList.add("active-tab");
     }

     const sidem = document.querySelector(".sidemenu");
     const Makomele=document.querySelector(".fa-bars");
     const gete=document.querySelector(".fa-times");
     Makomele.addEventListener("click",()=>{
        sidem.classList.add("show");
        
     

    
     }
     
    )
    gete.addEventListener("click",()=>{
        sidem.classList.remove("show");
    }
    )

    



   
     
    
