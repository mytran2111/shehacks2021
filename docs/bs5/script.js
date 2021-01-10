var choices = [];  // the array to store the  the books the user selects
let paragraph; 

function handleLoad() { 
    paragraph = document.getElementById("selected-books"); 
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