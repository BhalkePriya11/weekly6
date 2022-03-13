let submit=document.querySelector(".submit");
let title=document.getElementById("title");
let desc=document.getElementById("desc");
console.log(title.desc);
let notesElem=document.querySelector("notes");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    addNotes();
})
function addNotes(){
    let titleval=title.Value;
    let descval=desc.value;
    let card=document.createElement("div");
    card.classList.add("card");
    if(titleval){
    card.innerHTML= '
    <h3>${titleval}</h3>
    <p>$(descval)</p>
    <button class="del">Delete</button>'
    notesElem.appendChild(card);
    }
    let clear=card.querySelector("del");
    clear.addEventListener("click",()=>{
        card.remove();
    })
}
