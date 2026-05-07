const containerRef = document.getElementById("img-gallery");

// const images = [
//   "./assets/img/img01.jpeg",
//   "./assets/img/img02.jpeg",
//   "./assets/img/img03.jpeg",
//   "./assets/img/img04.jpeg",
//   "./assets/img/img05.jpeg",
//   "./assets/img/img06.jpeg",
//   "./assets/img/img07.jpeg",
//   "./assets/img/img08.jpeg",
//   "./assets/img/img09.jpeg",
//   "./assets/img/img10.jpeg",
//   "./assets/img/img11.jpeg",
//   "./assets/img/img12.jpeg",
// ];

// #region img objects
const image01 = {
  src: "./assets/img/img01.jpeg",
  alt: "hallway with horseshoe and rose decoration on the wall",
};

const image02 = {
  src: "./assets/img/img02.jpeg",
  alt: "white peacock",
};

const image03 = {
  src: "./assets/img/img03.jpeg",
  alt: "highheels viewed from the back with rhinestones",
};

const image04 = {
  src: "./assets/img/img04.jpeg",
  alt: "pink lillies on a staircase",
};

const image05 = {
  src: "./assets/img/img05.jpeg",
  alt: "flowerpot in winter",
};

const image06 = {
  src: "./assets/img/img06.jpeg",
  alt: "window in glasgow botanicals",
};

const image07 = {
  src: "./assets/img/img07.jpeg",
  alt: "bicycles on the beach",
};

const image08 = {
  src: "./assets/img/img08.jpeg",
  alt: "gravestone decoration",
};

const image09 = {
  src: "./assets/img/img09.jpeg",
  alt: "stone sculpture of an angel in Berlin",
};

const image10 = {
  src: "./assets/img/img10.jpeg",
  alt: "car covered with sleeve",
};

const image11 = {
  src: "./assets/img/img11.jpeg",
  alt: "dog jumping on fence",
};

const image12 = {
  src: "./assets/img/img12.jpeg",
  alt: "hedge that is half brown and half green",
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
        <img class="img-gallery-item" src="${images[i].src}" alt="${images[i].alt}"/>
    `;
  }
}
