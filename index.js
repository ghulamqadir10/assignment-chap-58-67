// Q1 part1 
var main_content = document.querySelector("#main-content")

// Q1 part2
var children = main_content.children;
// for (var i = 0; i < children.length; i++){
console.log(children);
document.write("<h2>Childrens of Main-content<h2>")
document.write("<h4>Childrens Of Main-content " + children[0] + "</h4>");
// }

// Q1 part 3 

document.write("<h2>Elements Of Class Render</h2>")
var classes = document.querySelectorAll(".render")
for (var i = 0; i < classes.length; i++) {
    var content = classes[i].innerHTML
    console.log(content)
    document.write("<h4>" , content , "<h4>")
}

document.write("<h1>Other Question In Console<h1>")
// Q1 part 4;
var first_name = document.getElementById("first-name");
first_name.value = "pakistan";
console.log(first_name.value)

// Q1 part 5
var last_name = document.getElementById("last-name")
last_name.value = "zindabad"
console.log(last_name.value)

// Q2 part 1
var form_content = document.getElementById("form-content")
form_content.nodeType;
console.log(form_content)
// document.write(form_content)

// Q2 part 2 
var lastName = document.getElementById("lastName")
var nodetypelastname = lastName.nodeType;
var lastNamefirstchild = document.getElementById("lastName")
lastNamefirstchild.firstChild;
console.log("nodetype of lastName ", nodetypelastname)
console.log("childnode of lastName ", lastNamefirstchild)


// Q2 part 3
// Question ko samaj kr karanga 


// Q2 part 4 
var mainContent = document.querySelector("#main-content")//isma masla hoga agr console.log ma + ki jagha , lagayanga to  
var mainContentfirstChild = mainContent.firstElementChild;
console.log("first child of main content ", mainContentfirstChild);

// and
var mainContentLastChild = mainContent.lastElementChild;
console.log("last child of main content ", mainContentLastChild)

// Q2 part  5
document.write("")
var lastname = document.getElementById("lastName")   //ya yahan per naya bnaya haui
console.log(lastname)
var nextSibling = lastname.nextElementSibling;
console.log("next sibling is ", nextSibling)
var previousSibling = lastName.previousElementSibling; //ye lastName uper sa liya hai
var siblinghtml = previousSibling;
console.log("previous sibling is ", siblinghtml)


// Q2 part 6
var email = document.getElementById("email");
var parentNode = email.parentNode;
console.log(parentNode)
var emailNode = email.nodeType;
console.log("node type of email is ", emailNode)

