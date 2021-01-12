//////// Events //////////////
//     • When the HTML document has been loaded and you can manipulate it with JavaScript

vanilla.append(renderBlock({},

`
document.addEventListener('DOMContentLoaded', function(event) {
    //the event occurred
})


            OR


document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
})
`
))

//     • When an HTML item has been clicked

vanilla.append(renderBlock({},
`
object.onclick = function(){myScript};
            OR
object.addEventListener("click", myScript);
`))

//     • When an HTML item has been double clicked

vanilla.append(renderBlock({},
`
object.ondblclick = function(){myScript};
            OR
object.addEventListener("dblclick", myScript);
`))
//     • When the user presses a key on the keyboard

vanilla.append(renderBlock({},
`
object.onkeypress = function(){myScript};
            OR
object.addEventListener("keypress", myScript);
`))
//     • When the user moves the mouse cursor

vanilla.append(renderBlock({},
`
object.onmousemove = function(){myScript};
            OR
object.addEventListener("mousemove", myScript);
`))
//     • When the user changes a value of an text input

vanilla.append(renderBlock({},
`
object.onchange = function(){myScript};
            OR
object.addEventListener("change", myScript);
`))
//     • When an image is loaded

vanilla.append(renderBlock({},
`
object.onload = function(){myScript};
            OR
object.addEventListener("load", myScript);
`))
//     • When an image fails to load, (if you write an incorrect image url the loading of the image will fail)

vanilla.append(renderBlock({},
`
object.onerror = function(){myScript};
            OR
object.addEventListener("error", myScript);
`))
//     • When a form is submitted

vanilla.append(renderBlock({},
`
object.onsubmit = function(){myScript};
            OR
object.addEventListener("submit", myScript);

`))
//     • When the user changes the option of a select element

vanilla.append(renderBlock({},
`
object.onchange = function(){myScript};
            OR
object.addEventListener("change", myScript);
`))
//     • When you position the mouse over an element

vanilla.append(renderBlock({},
`
object.onmouseenter = function(){myScript};
            OR
object.addEventListener("mouseenter", myScript);
`))
//     • When a checkbox is checked or unchecked

vanilla.append(renderBlock({},
`

document.getElementById("myCheck").checked;





`))
//     • When a ul list item is clicked, show the item that was clicked

vanilla.append(renderBlock({},
`
object.addEventListener("click", function(e) {
    console.log(e.target)
    // vanilla js code
});
`))
// Functions and Selectors
//     • Create an HTML element with any text value

vanilla.append(renderBlock({},
`

const newEl = document.createElement(nodename)
newEl.textContent = 'text here'


`))
//     • Remove an HTML element with any text value

vanilla.append(renderBlock({},
`


document.querySelector(selector).remove()


`))
//     • Append an HTML element with any text value to a parent element

vanilla.append(renderBlock({},
`


node.appendChild(node)


`))
//     • Prepend an HTML element with any text value to a parent element

vanilla.append(renderBlock({},
`
const parentEl = document.getElementById(selector)
const newEl = document.createElement(nodename)
newEl.textContent = 'Some text here'
parentEl.insertBefore(newEl, parentEl.firstChild)

`))
//     • Create and add an HTML element with any text value after another element

//     • Create and add an HTML element with any text value before another element

//     • Clone an HTML element within other element

vanilla.append(renderBlock({},
`

var elmnt = document.querySelector(selector);
var cln = elmnt.cloneNode(true);
document.body.appendChild(cln);


`))
//     • Add a class to an HTML item

vanilla.append(renderBlock({},
`


document.querySelector(selector).classList.add(classname);



`))
//     • Remove a class to an HTML item

vanilla.append(renderBlock({},
`


document.querySelector(selector).classList.remove(classname);



`))
//     • Toggle a class of an HTML item

vanilla.append(renderBlock({},
`


document.querySelector(selector).classList.toggle(classname);



`))
//     • Add a disabled attribute to an HTML button

vanilla.append(renderBlock({},
`


document.querySelector(selector).setAttribute('disabled', true)



`))
//     • Remove the disabled attribute of an HTML button

vanilla.append(renderBlock({},
`


document.querySelector(selector).removeAttribute('disabled')



`))
//     • Set a data-src attribute to a img element

vanilla.append(renderBlock({},
`


document.querySelector(selector).setAttribute('data-src', 'newVal');



`))
//     • Remove the data-src attribute of the img element

vanilla.append(renderBlock({},
`


document.querySelector(selector).removeAttribute('data-src');



`))
//     • Hide an HTML element on click (display: none)

vanilla.append(renderBlock({},
`


document.querySelector(selector).style.display = "none";



`))
//     • Show an HTML element on click (display: block)

vanilla.append(renderBlock({},
`


document.querySelector(selector).style.display = "initial";



`))
//     • Fade in an HTML element using jQuery
//     • Fade out an HTML element using jQuery
//     • Iterate a collection of elements and apply a change of style on them
//     • Get the parent element of a certain element and change its font weight
//     • Get the collection of children of a certain element and change its font weight
//     • Get all the elements that have a certain class and change their font weight
//     • Get an item by id and change its font weight
//     • Get all the elements that have a certain class and the display property of none and change their font color
//     • Get the options of a select element that are selected (attribute selected)
//     • Change the href attribute of the first <a> element (You have to create several <a> elements)
//     • Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)
//     • Remove all items from a specific selector
//     • Animate an item after 2 seconds from the initial page load