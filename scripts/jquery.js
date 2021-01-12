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

//////// vanilla section /////////////
const vanilla = $('.vanilla');
vanilla.css({
    'display': 'flex',
    'flex-direction': 'column',
    'width': '49.9%'
})

$('.vanilla > h2').first().css({
    'text-align': 'center',
    'color': '#eee',
    'background': '#0769AD',
    'padding': '16px',
    'margin': 0
})

//////// Events //////////////
//     • When the HTML document has been loaded and you can manipulate it with JavaScript

jQuery.append(renderBlock({
    title: 'When the HTML document has been loaded and you can manipulate it with JavaScript'
},

`
$(document).ready(function() {
    //do jQuery stuff when DOM is ready
});


            OR


$(function(){ 
	//jQuery code here 
});`
))

//     • When an HTML item has been clicked

jQuery.append(renderBlock({
    title: 'When an HTML item has been clicked',
    example: $('<button>Click me</button>').click(function(){ alert('Button clicked')}).css({
        'width': 'fit-content'
    })
},
`
$('button').click(function() {
    //jQuery code here
})
`))

//     • When an HTML item has been double clicked

jQuery.append(renderBlock({
    title: 'When an HTML item has been double clicked',
    example: $('<button>Click me</button>').dblclick(function(){ alert('Button double clicked')}).css({
        'width': 'fit-content'
    })
},
`
$('button').dblclick(function() {
    //jQuery code here
})
`))
//     • When the user presses a key on the keyboard

jQuery.append(renderBlock({
    title: 'When the user presses a key on the keyboard',
    example: $('<input type="text" placeholder="type here">').keypress(()=>alert('Key pressed')).css({
        'width': 'fit-content'
    })
},
`
$('input').keypress(function() {
    //jQuery code here
})
`))
//     • When the user moves the mouse cursor

jQuery.append(renderBlock({
    title: 'When the user moves the mouse cursor',
    example: $('<span></span>').mousemove(function(){ alert('Mouse moved')}).css({
        'width': '100px',
        'height': '40px',
        'background': '#568'
    })
},
`
$('span').mousemove(function() {
    //jQuery code here
})
`))
//     • When the user changes a value of an text input

jQuery.append(renderBlock({
    title: 'When the user changes a value of an text input',
    example: $('<input type="text" value="edit here">').change(()=>alert('Value changed')).css({
        'width': 'fit-content'
    })
},
`
$('input').change(function() {
    //jQuery code here
})
`))
//     • When an image is loaded

jQuery.append(renderBlock({
    title: 'When an image is loaded',
    example: $('<button class="imgloader">Load image</button>').click(function(){$('.imgloader').after($('<img src="https://img2.pngio.com/jquery-logo-web-development-jquery-ui-javascript-computer-icons-jquery-png-910_500.png">').css('width','200px').ready(()=>alert('image loaded'))); $('.imgloader').off()}).css({
        'width': 'fit-content'
    })
},
`
$('img').ready(function() {
    // .load() is deprecated and removed
})
`))
//     • When an image fails to load, (if you write an incorrect image url the loading of the image will fail)

jQuery.append(renderBlock({
    title: 'When an image fails to load',
    example: $('<button class="imgfail">Load image</button>').click(function(){$('.imgfail').after($('<img src="https://i2.pngio.com/jquery-logo-web-development-jquery-ui-javascript-computer-icons-jquery-png-910_500.png">').css('width','200px').on('error', ()=>alert('image load failed'))); $('.imgfail').off()}).css({
        'width': 'fit-content'
    })
},
`
$('img').on('error', function() {
    // .error() is deprecated and removed
})
`))
//     • When a form is submitted

jQuery.append(renderBlock({
    title: 'When a form is submitted',
    example: $('<form><input type="text" value="Full Name"><button>Submit</button></form>').submit((e)=>{e.preventDefault(); alert('form submitted')}).css({
        'width': 'fit-content'
    })
},
`
$('form').submit(function(e) {
    e.preventDefault()
    //jQuery code here
})
`))
//     • When the user changes the option of a select element

jQuery.append(renderBlock({
    title: 'When the user changes the option of a select element',
    example: $('<select><option value="angular">Angular</option><option value="vue">Vue</option><option value="react">React</option></select>').change(()=>alert('Value changed')).css({
        'width': 'fit-content'
    })
},
`
$('select').change(function() {
    //jQuery code here
})
`))
//     • When you position the mouse over an element

jQuery.append(renderBlock({
    title: 'When you position the mouse over an element',
    example: $('<span></span>').mouseenter(function(){ alert('Mouse entered')}).css({
        'width': '100px',
        'height': '40px',
        'background': '#568'
    })
},
`
$('span').mouseenter(function() {
    //jQuery code here
})
`))
//     • When a checkbox is checked or unchecked

jQuery.append(renderBlock({
    title: 'When a checkbox is checked or unchecked',
    example: $('<label for="check" >Try me</label><input id="check" type="checkbox">').click((e)=>{if($(e.target).is(':checked')){alert('Checked')} else {alert('Unchecked')}}).css({
        'width': 'fit-content'
    })
},
`
$('input').click(function(e) {
    if($(e.target).is(':checked')) {
        //jQuery code here
    } else {
        //jQuery code here
    }
})
`))
//     • When a ul list item is clicked, show the item that was clicked

jQuery.append(renderBlock({
    title: 'When a ul list item is clicked, show the item that was clicked',
    example: $('<ul class="list"><li>One</li><li>Two</li><li>Three</li></ul>').click(function(e){alert(e.target.textContent + ' is clicked')}).css({
        'width': 'fit-content'
    })
},
`
$('ul').click(function(e) {
    console.log(e.target)
    //jQuery code here
})
`))
// Functions and Selectors
//     • Create an HTML element with any text value

jQuery.append(renderBlock({
    title: 'Create an HTML element with any text value',
    example: $('<p>This is a paragraph.</p>').css({
        'width': 'fit-content'
    })
},
`


$('&lt;p&gt;This is a paragraph.&lt;/p&gt;')


`))
//     • Remove an HTML element with any text value

jQuery.append(renderBlock({
    title: 'Remove an HTML element with any text value',
},
`


$('p').remove()


`))
//     • Append an HTML element with any text value to a parent element

jQuery.append(renderBlock({
    title: 'Append an HTML element with any text value to a parent element',
    example: $('<div><h4>This is parent element</h4></div>').append($('<p>This is a paragraph.</p>')).css({
        'width': 'fit-content'
    })
},
`


$('div').append($('&lt;p&gt;This is a paragraph.&lt;/p&gt;'))


`))
//     • Prepend an HTML element with any text value to a parent element

jQuery.append(renderBlock({
    title: 'Prepend an HTML element with any text value to a parent element',
    example: $('<div><h4>This is parent element</h4></div>').prepend($('<p>This is a paragraph.</p>')).css({
        'width': 'fit-content'
    })
},
`


$('div').prepend($('&lt;p&gt;This is a paragraph.&lt;/p&gt;'))


`))
//     • Create and add an HTML element with any text value after another element

//     • Create and add an HTML element with any text value before another element

//     • Clone an HTML element within other element

jQuery.append(renderBlock({
    title: 'Clone an HTML element within other element'
},
`


$('div').append($('&lt;p&gt;This is a paragraph.&lt;/p&gt;').clone())



`))
//     • Add a class to an HTML item

jQuery.append(renderBlock({
    title: 'Add a class to an HTML item'
},
`


$(selector).addClass(classname,function(index,currentclass))



`))
//     • Remove a class to an HTML item

jQuery.append(renderBlock({
    title: 'Remove a class to an HTML item'
},
`


$(selector).removeClass(classname,function(index,currentclass))



`))
//     • Toggle a class of an HTML item

jQuery.append(renderBlock({
    title: 'Toggle a class of an HTML item'
},
`


$(selector).toggleClass(classname,function(index,currentclass),switch)



`))
//     • Add a disabled attribute to an HTML button

jQuery.append(renderBlock({
    title: 'Add a disabled attribute to an HTML button',
    example: $('<button>Click me</button>').attr('disabled', true).css({
        'width': 'fit-content'
    })
},
`


$(selector).attr('disabled', true)



`))
//     • Remove the disabled attribute of an HTML button

jQuery.append(renderBlock({
    title: 'Remove the disabled attribute of an HTML button',
    example: $('<button>Click me</button>').removeAttr('disabled').css({
        'width': 'fit-content'
    })
},
`


$(selector).removeAttr('disabled')



`))
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
    let head;
    if(title != undefined){
        head = $(`<h4>${title}</h4>`).css({
            'margin': '10px 0'
        })
    }
    let ex;
    if(example != undefined){
        ex = example
    }
    const result = $(`<div></div>`).css({
        'display': 'flex',
        'flex-direction': 'column',
        'padding': '8px',
        'height': '300px',
        'justify-content': 'flex-end'
    }).append(head, ex, codeBlock)
    return result;
}