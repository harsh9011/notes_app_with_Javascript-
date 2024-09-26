const notesContainer  = document.querySelector(".notes-container");
const CreateBtn  = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


//
function show_notes()
{
    notesContainer.innerHTML = localStorage.getItem("notes");
}




//updates the local storage 
function updatestorage()
{
    localStorage.setItem("notes", notesContainer.innerHTML);
}


// TO ADD NEW NOTE WHAT THE BUTTON IS CLICKED
CreateBtn.addEventListener("click", ()=>
{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    
    img.src = "images/delete.png";
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true");
    notesContainer.appendChild(inputBox).appendChild(img);
   
})

// TO DELETE THE NOTE WHEN WE CLCK IT 
notesContainer.addEventListener("click" , (e)=>
{
    //update the element and have remove note when cicked on the delete img 
     if(e.target.tagName === "IMG")
     {
        e.target.parentElement.remove();
        updatestorage();
        //updating the storage 
        
     }

     // also update when we write something in the p element 
     else if(e.target.tagName === "p")
     {

        // notes is the input-box as we have write it on the top of the script 
        notes = document.querySelectorAll(".input-box");


        //this well update the storage whe nwe will start tying or edit in the "p" tag
                    // nt is short cut of notes but can be written anything 
        notes.forEach(nt =>
        {
                // onkeyup means whenever the user relese a key 
            nt.onkeyup = function()
            {
                updatestorage();
            }
        }
        )
        
       
     }

     
     
})
