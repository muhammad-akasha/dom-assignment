let mainContent = document.getElementById("main-content");

console.log(mainContent.children);

let render = document.querySelectorAll(".render");

let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let allResult = document.querySelector(".allResults");
let createH2 = document.createElement("h2");
allResult.appendChild(createH2)
console.log(allResult)

console.log(firstName, lastName, email);

firstNameVal = "muhammad";
lastNameVal = "akasha";
emailVal = "akasha@gmail.com";

firstName.value = firstNameVal;
lastName.value = lastNameVal;
email.value = emailVal;

render[0].innerText += " " + firstNameVal;
render[1].innerText += " " + lastNameVal;
render[2].innerText += " " + emailVal;
for (let i = 0; i < render.length; i++) {
  createH2.innerText +=  render[i].innerHTML + "\n \n";
  render[i].style.display = "none"
}

let formContent = document.getElementById("form-content");

createH2.innerText += "Node Type Of form is : " + formContent.nodeType + " and  Other Result are in console" + "\n \n";

// let childNodesOfLastName = lastName.childNodes;

console.log("The Node Type of Last Name is" ,lastName.nodeType , "The childNodes of Last Name is" ,  lastName.childNodes)


let firstChild = mainContent.firstElementChild;
let lastChild = mainContent.lastElementChild;
console.log("The First Child of Main Content is " , firstChild);
console.log("The Last Child of Main Content is " , lastChild);
console.log( "ChildNodes of Main Content " , mainContent.childNodes);

let prevSibl = lastName.previousElementSibling;
let nextSibl = lastName.nextElementSibling;
let parentNode = email.parentNode;
console.log( "The Previous sibling of LastName" , prevSibl);
console.log( "The Next sibling of LastName" ,nextSibl);
console.log("The Node Type of Email is " , email.nodeType , "the parent Nodes of Email is" , parentNode)