var choices = [];  // the array to store the  the books the user selects
let paragraph; 
let count; 

function handleLoad() { 
    paragraph = document.getElementById("selected-books"); 
    count = document.getElementById("counter"); 
    $(document).ready(function() {
        var choices = []
        // var picker = $('.selectpicker');
        var picker = $('.selector').select2();
        picker.change((event) => {
            choices = picker.val();
            console.log(choices)
            let length = choices.length
            count.textContent = `${length} / 10`
            console.log(length) 
        });
    })
}




window.addEventListener('load', handleLoad);  // when load event fires, execute handleLoad


// enjoy the disaster: 
