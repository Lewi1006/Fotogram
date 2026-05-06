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
        <img onclick="openDialog(${i})" src="${images[i]}" alt="analog photo"/>
    `;
  }
}

const dialogRef = document.getElementById("dialog");
const dialogImg = document.getElementById("dialog-img");

function openDialog(index) {
  dialogRef.showModal();

  dialogImg.innerHTML += /*html*/`
    <img src="${images[index]}" alt="analog photo"/>
  `
}

function closeDialog() {
  dialogRef.close();
}




// dialogRef.innerHTML = /*html*/`
//   <header><h2>img-titles</h2></header>
// `
