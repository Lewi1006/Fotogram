const containerRef = document.getElementById("img-gallery");

const images = [
  "./assets/img/img01.jpeg",
  "./assets/img/img02.jpeg",
  "./assets/img/img03.jpeg",
  "./assets/img/img04.jpeg",
  "./assets/img/img05.jpeg",
  "./assets/img/img06.jpeg",
  "./assets/img/img07.jpeg",
  "./assets/img/img08.jpeg",
  "./assets/img/img09.jpeg",
  "./assets/img/img10.jpeg",
  "./assets/img/img11.jpeg",
  "./assets/img/img12.jpeg",
];

function render() {
  for (let i = 0; i < images.length; i++) {
    containerRef.innerHTML += /*html*/ `
        <img class="img-gallery-item" src="${images[i]}" alt="analog photo"/>
    `;
  }
}
