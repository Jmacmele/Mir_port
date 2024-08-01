 

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
     Makomele?.addEventListener("click",()=>{
        sidem.classList.add("show");
        
     

    
     }
     
    )
    gete?.addEventListener("click",()=>{
        sidem.classList.remove("show");
    }
    )


    document.addEventListener("DOMContentLoaded", function() {
        const textElement = document.querySelector(".Text");
        const originalText = textElement.textContent;
        let index = originalText.length;
        let deleting = true;
    
        function deleteText() {
            if (index >= 0) {
                textElement.textContent = originalText.slice(0, index);
                index--;
                setTimeout(deleteText, 20); // Adjust the speed of deletion here (100ms per character)
            } else {
                deleting = false;
                setTimeout(addText, 500); // Pause before starting to add text
            }
        }
    
        function addText() {
            if (index < originalText.length) {
                textElement.textContent = originalText.slice(0, index + 1);
                index++;
                setTimeout(addText, 20); // Adjust the speed of adding text here (100ms per character)
            } else {
                deleting = true;
                setTimeout(deleteText, 500); // Pause before starting to delete text again
            }
        }
    
        deleteText();
    });
    
    



   
     
    
