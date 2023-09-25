<!-- Link to the PDFObject library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.2.5/pdfobject.min.js"></script>

<script>
  // Embed PDFs in the page when the user clicks on a link with the class "pdf-grid a"
  document.querySelectorAll('.pdf-grid a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var pdfUrl = this.href;
      PDFObject.embed(pdfUrl, "#pdf-viewer");
      document.querySelector('#pdf-modal').classList.add('open');
    });
  });

  // Define an array of color codes
  const colors = [
    "#b8c4c6",
    "#e6efc9",
    "#abb2cc",
    "#b6daf4",
    "#e4cce1",
    "#c0dcb4",
    "#e2b9ae",
    "#b8d0f1",
    "#eed5e0",
    "#d8e2af",
    "#ebc6ac",
    "#d7b6b7",
    "#f6e8c6",
    "#ebf1e6",
    "#e7e4f0",
    "#dbc6b1",
    "#aecf9b",
    "#f0cce1",
    "#daddea",
    "#f8e6e3",
    "#f1e8ea",
    "#f4d6e8",
    "#dff0dc",
    "#d1e9fe",
    "#dae8f3",
    "#eddeea",
    "#e3e2ef",
    "#d3dbed",
    "#e9f1d2",
    "#faf9d9",
    "#ecd1f0",
    "#eee1ec",
    "#dee7f8",
    "#eec7d5",
    "#e3c3c6",
    "#cad69b",
    "#aeb1a4",
    "#e6e0d8",
    "#8fc0d1",
    "#9c9fbc",
    "#407973",
    "#407973",
    "#c7bea0",
    "#b37c85",
    "#91a9a9",
    "#97bdca",
    "#ecb681",
    "#d8d8cc",
    "#8ba1cc",
    "#81a780",
    "#b3d3ea",
    "#c7cdd2",
    "#b994c0",
    "#e8f1c4",
    "#915e88",
    "#9a6f96",
    "#f5cf98",
    "#a49db0",
    "#e7c5ae",
    "#9cacbb"    ];

// Function to return a random color from the colors array
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Add event listener to all navigation links to change their background color on hover
document.querySelectorAll('#my-nav .nav-link').forEach(function(link) {
  link.addEventListener('mouseover', function() {
    const randomColor = getRandomColor();
    this.style.backgroundColor = randomColor;
  });

  link.addEventListener('mouseleave', function() {
    // Reset the background color on mouse leave
    this.style.backgroundColor = '';
  });
});
</script>
