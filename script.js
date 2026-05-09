const containerRef = document.getElementById("img-gallery");

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

function render() {
  for (let i = 0; i < images.length; i++) {
    containerRef.innerHTML += /*html*/ `
        <img onclick="openDialog(${i})" class="img-gallery-item" src="${images[i].src}" alt="${images[i].alt}"/>
    `;
  }
}

// global variables
const dialogRef = document.getElementById("myDialog");
let updatedIndex = 0;

function openDialog(index) {
  dialogRef.showModal();

  updatedIndex = index;

  updateDialogBody();
}

function closeDialog() {
  dialogRef.close();
}

function updateDialogBody() {
  dialogRef.innerHTML = /*html*/ `
<div class="dialog-wrapper">
       <header class="dialog-header-wrapper">
            <h2>${images[updatedIndex].title} </h2>
            <button onclick="closeDialog()"><img src="./assets/icons/close_icon.svg" alt="close button white cross"/>
           </button>
       </header>
 
       <div class="dialog-img">
         <img src="${images[updatedIndex].src}" alt="${images[updatedIndex].alt}"/>
       </div>
 
       <footer>
         <div class="gallery-controls"> 
           <button class="previous-photo" onclick="previousPhoto()"><img src="./assets/icons/left_arrow.svg" alt="arrow previous photo"/> </button>
           <p id="count">${updatedIndex + 1}/${images.length}</p>
           <button class="next-photo" onclick="nextPhoto()"><img src="./assets/icons/right_arrow.svg" alt="arrow next photo"/> </button>
         </div>
       </footer>
     </div>
 `;
}

function previousPhoto() {
  updatedIndex--;
  if (updatedIndex < 0) {
    updatedIndex = images.length - 1;
  }
  updateDialogBody();
}

function nextPhoto() {
  updatedIndex++;

  if (updatedIndex >= images.length) {
    updatedIndex = 0;
  }
  updateDialogBody();
}
