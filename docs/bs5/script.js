var choices = [];  // the array to store the  the books the user selects
let paragraph; 

function handleLoad() { 
    paragraph = document.getElementById("selected-books"); 
    loadBooks() 
}

function loadBooks() {
    // load the data from the .json file 

    const URL = "https://front-end-books.shereenelaidi.repl.co/books.json"; 

    let dropdown = $('selector'); 
    dropdown.empty()
    dropdown.append('<option selected="true" disabled>Choose a Book</option>')
    dropdown.prop('selectedIndex', 0)

    //populate the dropdown with the list of books
    console.log("loading books")
    // $.getJSON(URL, function(data) {
    //     $.each(data, function (key, entry) {
    //         console.log("hi")
    //         console.log(data)
    //         dropdown.append($('<option></option>').attr('value', entry.authors).text(entry.title))
    //     })
    // }); 
}


$(document).ready(function() {
    // var choices = []
    // var picker = $('.selectpicker');
    var picker = $('.selector').select2();
    picker.change((event) => {
        choices = picker.val();
        console.log(choices)
        // display the selected books
        // format the string 
        // let string = choices.toString(); 
        // paragraph.textContent = string; 
    });
})


window.addEventListener('load', handleLoad);  // when load event fires, execute handleLoad


// enjoy the disaster: 
