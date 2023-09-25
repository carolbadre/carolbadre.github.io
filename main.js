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
    // (list of color codes...)
  ];

  // Function to return a random color from the colors array
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Set a random color for the hover effect on page load
  const randomColor = getRandomColor();
  document.documentElement.style.setProperty('--hover-color', randomColor);

  // Add event listener to all PDF links to change their color on hover
  document.querySelectorAll('.pdf-grid a').forEach(function(link) {
    link.addEventListener('mouseover', function() {
      this.style.color = getRandomColor();
    });
  });

</script>
