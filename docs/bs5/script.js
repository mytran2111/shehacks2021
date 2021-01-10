var choices = [];  // the array to store the  the books the user selects
let paragraph; 
let count; 
let model;  
let displayResult; 
let output = [];
let userID = 190921112811; 
let bookIDs = []; 
let bookList; 
let mapTitleToID = new Map(); 
let mapIDToTitle = new Map(); 
let prediction = [];
let length; 
let button; 

function handleLoad() { 
    loadModel(); 
    displayResult = document.getElementById('suggestion'); 
    button = document.getElementById('button');
    fetch("https://front-end-books.shereenelaidi.repl.co/books.json").then(async response => {
     bookList = await response.json();
     console.log('start adding to the book list '); 
      for (let i = 0; i < bookList.length;i++){
        mapTitleToID.set(bookList[i].title, bookList[i].book_id);
        mapIDToTitle.set(bookList[i].book_id, bookList[i].title);
        
      }
      console.log("===================Finished loading database...=============================")
      console.log(mapIDToTitle);
      console.log(mapTitleToID); 
      button.addEventListener('click', handleClick);
    });
    paragraph = document.getElementById("selected-books"); 
    count = document.getElementById("counter"); 
    $(document).ready(function() {
        choices = []
        // var picker = $('.selectpicker');
        var picker = $('.selector').select2();
        picker.change((event) => {
            choices = picker.val();
            console.log(choices)
            length = choices.length
            count.textContent = `${length} / 10`
            console.log(length) 
        });
    })
}

async function loadModel(){
    // We will hide the model until the users chose all 10 choices
    model = await tf.loadLayersModel('https://front-end-books.shereenelaidi.repl.co/model.json');
    console.log('Model is loading'); 
}

function findID(array){
    console.log("The array in findID:")
    console.log(array)
    console.log(array.length)
    for (let i = 0; i < array.length; i++){
      // read csv file to get the user ID correspond to each book
      console.log("ith entry:")
      console.log(array[i])
      let book = mapTitleToID.get(array[i]); 
      console.log("Book:")
      console.log(book)
      bookIDs.push(book); 
    }
  }

async function predict(){
    findID(choices);
    // let output = model.predict(([bookIDs, userID], [5,5,5,5,5,5,5,5,5,5])); 
    console.log("Book Ids:")
    console.log(bookIDs); 
    let output = model.predict([bookIDs, 102]); 
    for (let i = 0; i < 10; i++){
      prediction.push(output[i]); 
    }
}


function displaySuggestion(){
    console.log("hi from display suggestion"); 
    
  predict(); 
  console.log(prediction); 
  for (let i = 0; i < prediction.length; i++){
     displayResult.textContent += mapIDToTitle.get(prediction[i]); 
  }
}

function handleClick(){
  displaySuggestion(); 
}
window.addEventListener('load', handleLoad);  // when load event fires, execute handleLoad



