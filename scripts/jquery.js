////////// header ///////////////
$('#root').css({
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'space-between',
    'margin': '10px',
}).append($('<header>Cheat Sheet</header><section class="jQuery"><h2>jQuery</h2></section><section class="vanilla"><h2>Vanilla</h2></section>'));

$('header').css({
    'width': '100%',
    'padding': '10px',
    'font-weight': 900,
    'font-size': '28px',
    'text-align': 'center',
    'color': '#eee',
    'background': 'url("https://api.jquery.com/jquery-wp-content/themes/jquery/images/dark-grey-tile.png")'
})

//////// jQuery section /////////////
const jQuery = $('.jQuery');
jQuery.css({
    'display': 'flex',
    'flex-direction': 'column',
    'width': '49.9%'    
})

$('.jQuery > h2').first().css({
    'text-align': 'center',
    'color': '#eee',
    'background': '#0769AD',
    'padding': '16px',
    'margin': 0
})

// Events
//     • When the HTML document has been loaded and you can manipulate it with JavaScript

//     • When an HTML item has been clicked
//     • When an HTML item has been double clicked
//     • When the user presses a key on the keyboard
//     • When the user moves the mouse cursor
//     • When the user changes a value of an text input
//     • When an image is loaded
//     • When an image fails to load, (if you write an incorrect image url the loading of the image will fail)
//     • When a form is submitted
//     • When the user changes the option of a select element
//     • When you position the mouse over an element
//     • When a checkbox is checked or unchecked
//     • When a ul list item is clicked, show the item that was clicked
// Functions and Selectors
//     • Create an HTML element with any text value
//     • Remove an HTML element with any text value
//     • Append an HTML element with any text value to a parent element
//     • Prepend an HTML element with any text value to a parent element
//     • Create and add an HTML element with any text value after another element
//     • Create and add an HTML element with any text value before another element
//     • Clone an HTML element within other element
//     • Add a class to an HTML item
//     • Remove a class to an HTML item
//     • Toggle a class of an HTML item
//     • Add a disabled attribute to an HTML button
//     • Remove the disabled attribute of an HTML button
//     • Set a data-src attribute to a img element
//     • Remove the data-src attribute of the img element
//     • Hide an HTML element on click (display: none)
//     • Show an HTML element on click (display: block)
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

function renderBlock({title, example}, code){
    const codeBlock = $(`<pre>${code}</pre>`).css({
        'background': '#333',
        'color': '#ccc',
        'padding': '12px',
        'overflow-x': 'scroll'
    })
    const head = $(`<h5>${title}</h5>`).css({
        'margin': '10px 0'
    })
    let ex = null
    if(example != undefined){
        ex = example
    }
    const result = $(`<div></div>`).css({
        'display': 'flex',
        'flex-direction': 'column',
        'padding': '8px'
    }).append(head, ex, codeBlock)
    jQuery.append(result)
}