<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.2.5/pdfobject.min.js"></script>
<script>
  document.querySelectorAll('.pdf-grid a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var pdfUrl = this.href;
      PDFObject.embed(pdfUrl, "#pdf-viewer");
      document.querySelector('#pdf-modal').classList.add('open');
    });
  });

  document.querySelector('#pdf-modal .close').addEventListener('click', function() {
    document.querySelector('#pdf-modal').classList.remove('open');
    document.querySelector('#pdf-viewer').innerHTML = '';
  });
</script>

// Other code for other sections of your portfolio page can go here
