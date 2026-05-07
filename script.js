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

const dialogRef = document.getElementById("myDialog");
const dialogImg = document.getElementById("dialog-img");

function openDialog(index) {
  dialogRef.showModal();
  dialogImg.innerHTML = /*html*/ `
    <img src="${images[index].src}" alt="${images[index].alt}"/>
  `;
}

function closeDialog() {
  dialogRef.close();
}

const dialogHeadline = document.getElementById("dialog-headline");

function giveTitle(index) {
    dialogHeadline.innerHTML = /*html*/ `
     <h2> ${images[index].title} </h2>;
    `;
  }


// dialogHeadline.innerHTML = 'images[i].alt';
// dialogRef.innerHTML = /*html*/`
//   <header><h2>img-titles</h2></header>
// `
