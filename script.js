// create variable to access html document elements by ID
// --> here to render img into img-gallery

const containerRef = document.getElementById("img-gallery");

// create objects for each image with the properties src/alt/title
// --> because we need to access each property individually
// #region img objects
const image01 = {
  src: "./assets/img/img01.jpeg",
  alt: "hallway with horseshoe and rose decoration on the wall",
  title: "Hallway",
};

const image02 = {
  src: "./assets/img/img02.jpeg",
  alt: "white peacock",
  title: "Peacock",
};

const image03 = {
  src: "./assets/img/img03.jpeg",
  alt: "highheels viewed from the back with rhinestones",
  title: "2000s heels",
};

const image04 = {
  src: "./assets/img/img04.jpeg",
  alt: "pink lillies on a staircase",
  title: "Pink lillies",
};

const image05 = {
  src: "./assets/img/img05.jpeg",
  alt: "flowerpot in winter",
  title: "Flowers in winter",
};

const image06 = {
  src: "./assets/img/img06.jpeg",
  alt: "window in glasgow botanicals",
  title: "Glasgow botanics",
};

const image07 = {
  src: "./assets/img/img07.jpeg",
  alt: "bicycles on the beach",
  title: "Isle of Bute",
};

const image08 = {
  src: "./assets/img/img08.jpeg",
  alt: "gravestone decoration",
  title: "Warsaw cemetry",
};

const image09 = {
  src: "./assets/img/img09.jpeg",
  alt: "stone sculpture of an angel in Berlin",
  title: "Angel sculpture",
};

const image10 = {
  src: "./assets/img/img10.jpeg",
  alt: "car covered with sleeve",
  title: "02/2026",
};

const image11 = {
  src: "./assets/img/img11.jpeg",
  alt: "dog jumping on fence",
  title: "Dog behind fence",
};

const image12 = {
  src: "./assets/img/img12.jpeg",
  alt: "hedge that is half brown and half green",
  title: "Brandenburg 2025",
};

//#endregion

// create array with the image objects
const images = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  image12,
];

// render images into our html div by using a for loop that loops through the images array
// onlclick event on image that calls the openDialog function
// --> here we need to pass the value to the variable index --> index represents the position of img in array
function render() {
  for (let i = 0; i < images.length; i++) {
    containerRef.innerHTML += /*html*/ `
        <img aria-haspopup="dialog" aria-controls="myDialog" onclick="openDialog(${i})" class="img-gallery-item" src="${images[i].src}" alt="${images[i].alt}"/>
    `;
  }
}

// create popup dialog
// render into dialog tag in html
const dialogRef = document.getElementById("myDialog");

// define a global variable for index because all functions need to access the value
// easier to make it global so I don't have to pass value from function to function and can work with variable scope
let updatedIndex = 0;

// function to open the dialog --> content of Dialog is in seperate function
// --> which is why it calls the updatedDialogBody function
// In the dialog I assign  the value of index to the global updatedIndex Variable so all functions can access it
// new stored value of updatedIndex is now globally the value of Index

function openDialog(index) {
  dialogRef.showModal();

  updatedIndex = index;

  updateDialogBody();
}

function closeDialog() {
  dialogRef.close();
}

// function that runs what happens inside the dialog window --> whole html structure
// when I click on img --> same img will be large (we make sure it's the same img by accessing same index)
// I address my <dialog id="myDialog"> with the variable dialogRef
// and say I want to write within HTML by using innerHTML
// h2 accesses value thats stored at a certain index of array, which is an object
// and by .title we cann give out the objects property
// img gets updated by accessing src and alt of object
// buttons have onclick function similar to popup dialog
// n/12 = index/length of array --> index+1 damit es bei 0 anfängt

function updateDialogBody() {
  dialogRef.innerHTML = /*html*/ `
<div class="dialog-wrapper">
       <header class="dialog-header">
            <button aria-label="close dialog" tabindex="0" onclick="closeDialog()"><img src="./assets/icons/close_icon.svg" alt="close button white cross"/>
           </button>
       </header>
 
       <figure class="dialog-figure">
        <figcaption id="img-title">${images[updatedIndex].title} 
        </figcaption>
         <img src="${images[updatedIndex].src}" alt="${images[updatedIndex].alt}"/>
      </figure>
 
       <footer>
         <div class="gallery-controls"> 
           <button aria-label="previous photo" class="previous-photo" tabindex="0" onclick="previousPhoto()">
           <img src="./assets/icons/left_arrow.svg" alt="arrow previous photo"/> 
          </button>
           <p id="count">${updatedIndex + 1}/${images.length}</p>
           <button aria-label="next photo" class="next-photo" tabindex="0" onclick="nextPhoto()"><img src="./assets/icons/right_arrow.svg" alt="arrow next photo"/> </button>
         </div>
       </footer>
     </div>
 `;
}

// when button is clicked the index decreases
// if we reach the 1st image it should wrap around and count down from 12 again
// --> thus if index value is smaller than 0 the new value should be images.length -1 (-1 because last element in array is null terminator)
// then execute updateDialogBody function so content is displayed again
function previousPhoto() {
  updatedIndex--;
  if (updatedIndex < 0) {
    updatedIndex = images.length - 1;
  }
  updateDialogBody();
}

// if we reach the 12th images the value at updateIndex should be 0 again so we can start with the 1st image
function nextPhoto() {
  updatedIndex++;

  if (updatedIndex >= images.length) {
    updatedIndex = 0;
  }
  updateDialogBody();
}


//eventListener needs to be applied to whole document to work
// first argument = event type
// second argument = function that should execute when the event happens (arrow function)


document.addEventListener("keydown", (event) => {
  if(event.key === "ArrowLeft") {
    previousPhoto();
  }

  if(event.key === "ArrowRight"){
    nextPhoto();
  }
});
