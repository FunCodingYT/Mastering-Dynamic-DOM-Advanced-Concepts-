// ➡️ Event Bubbling

// const child = document.querySelector("#child");
// const parent = document.querySelector("#parent");

// document.addEventListener("click", ()=>{
//     console.log("document clicked!");
    
// })

// parent.addEventListener("click", ()=>{
//     console.log("parent clicked!");
    
// })

// document.body.addEventListener("click", ()=>{
//     console.log("body clicked!");
    
// })

// child.addEventListener("click", ()=>{
//     console.log("child clicked!");
    
// })


// ➡️ Event Capturing

// const child = document.querySelector("#child");
// const parent = document.querySelector("#parent");
// const grandParent = document.querySelector("#grand-parent");

// child.addEventListener("click", ()=>{
//     console.log("child clicked");
    
// })

// parent.addEventListener("click", ()=>{
//     console.log("parent clicked");

// }, true)

// grandParent.addEventListener("click", (event)=>{
//     event.stopPropagation();
//     console.log("grand parent clicked");

// }, true)

// document.body.addEventListener("click", ()=>{
//     console.log("body clicked");
    
// }, true)



// ➡️ Event Delegation

const removeBtn = document.querySelectorAll(".removeBtn");
const addItem = document.querySelector("#addItem");
const container = document.querySelector("#container");

container.addEventListener("click", (event)=>{
    if (event.target.classList.contains("removeBtn")){
        event.target.parentElement.remove();
        
    };
    
});

addItem.addEventListener("click", ()=>{
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "card");
    newDiv.innerHTML = `
        <h4>Fruit ${Math.floor(Math.random() * 100)}</h4>
        <button class="removeBtn">Remove</button>
    `;
    container.append(newDiv);
});

