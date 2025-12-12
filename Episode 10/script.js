// ➡️ Creating & Removing Elements

// ◉ createElement()
// const newLi = document.createElement("li");
// newLi.textContent = "mango";
// console.log(newLi);

// const parent = document.querySelector("#list");

// ◉ append() => Add element as a last child (Recommended, Modern)
// append Syntax => parentElemet.append(node);

// const newLi1 = document.createElement("li");
// newLi1.innerHTML = "<i>append wala fruit</i>";
// const h4 = document.createElement("h4");
// h4.textContent = "i am a heading";
// const text = document.createTextNode("i am a text");
// parent.append(newLi1, h4, "blahhhh", text);


// ◉ prepend() => Add element as a first child
// const newLi2 = document.createElement("li");
// newLi2.textContent = "prepend wala fruit";
// parent.prepend(newLi2);


// ◉ insertBefore()
// insertBefore Syntax => parentElement.insertBefore(newNode, ReferenceNode);

// const newLi3 = document.createElement("li");
// newLi3.textContent = "insertBefore wala fruit";
// const kiwi = document.querySelector("#kiwi")
// parent.insertBefore(newLi3, kiwi);


// ◉ remove() 
// const h1 = document.querySelector("h1");
// h1.remove();

// ◉ removeChild()
// const list = document.querySelector("#list");
// const item2 = document.querySelector("#item2");
// list.removeChild(item2);


// ➡️ Working with Attributes

// ◉ id Attribute:
// const h1 = document.createElement("h1");
// h1.textContent = "Heading";
// const container = document.querySelector(".container");
// container.append(h1);

// // Setting Attribute:
// // h1.id = "heading"; // with property
// h1.setAttribute("id", "heading"); // with method
// Syntax => Element.setAttribute(AttrName, AttrValue);

// Getting Attribute:
// console.log(h1.id); // with property
// console.log(h1.getAttribute("id")); // with method


// ◉ class Attribute:
// const para = document.createElement("p");
// para.textContent = "I am a paragraph";
// document.body.append(para);

// // Setting Attribute:
// para.className = "paragraph"; // with property
// para.setAttribute("class", "paragraph"); // with method


// ◉ src Attribute:
// const image = document.createElement("img");
// document.body.append(image);

// // Setting Attribute:
// image.src = "https://plus.unsplash.com/premium_photo-1764437207646-a6e159edded9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // with property
// image.setAttribute("alt", "JavaScript JoyRide"); // with method
// image.setAttribute("id", "picture"); // with method
// console.log(image);


// ◉ href Attribute:
// const link = document.createElement("a");
// link.textContent = "Fun Coding";
// const container1 = document.querySelector(".container");
// container1.append(link);

// // Setting Attribute:
// link.href = "https://www.youtube.com/@FunCodingYT"; // with property
// link.setAttribute("href", "https://www.google.com"); // with method


// ◉ placeholder, type, value Attribute:
// const input = document.createElement("input");
// document.body.append(input);

// // Setting Attribute:
// input.placeholder = "Enter a Text";
// input.setAttribute("type", "password");
// input.value = "JavaScript Course";

// Getting Attribute:
// console.log(input.getAttribute("type"));
// console.log(input.hasAttribute("class"));
// input.removeAttribute("placeholder");


// ➡️ DOM Traversing

// const item = document.querySelector("#item");

// ◉ Upward Traversing => (parentElement, parentNode, closest)
// const parent = item.parentElement;
// const grandParent = parent.parentElement;
// const item3 =document.querySelector("#item3");
// const jump = item3.closest("div");

// ◉ Downward Traversing => 
// (childNodes, children, firstElementChild, lastElementChild)

// const container = document.querySelector("#container");
// console.log(container.childNodes[1]);
// const childOne = container.children[0];
// const childTwo = container.firstElementChild;
// const childTwo = container.lastElementChild.children[1];

// ◉ Sideways Traversing => 
// (previousSibling, previousElementSibling, nextElementSibling)
// const orange = document.querySelector("#orange");
// const previous = orange.previousElementSibling;
// const next = orange.nextElementSibling;

// const apple = document.querySelector("#apple");
// const preSibling = apple.previousElementSibling.previousElementSibling;


// changeBackground(jump);

// function changeBackground(element) {
//     element.style.backgroundColor = "orange";
// }
