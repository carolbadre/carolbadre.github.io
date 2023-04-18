// Import PDFObject library
import PDFObject from 'https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.2.5/pdfobject.min.js';

// Add click event listeners to PDF links
document.querySelectorAll('.pdf-grid a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var pdfUrl = this.href;
    PDFObject.embed(pdfUrl, "#pdf-viewer");
    document.querySelector('#pdf-modal').classList.add('open');
  });
});

// Change navigation link color every second
const navLinks = document.querySelectorAll(".nav__link");

const colors = [
  "#b8c4c6",
  // list of colors omitted for brevity
];

function changeNavColor() {
  const now = new Date();
  const colorIndex = now.getSeconds() % 60;
  const color = colors[colorIndex];
  document.documentElement.style.setProperty('--hover-color', color);
}

setInterval(changeNavColor, 1000);
