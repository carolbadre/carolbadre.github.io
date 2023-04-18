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

  const navLinks = document.querySelectorAll(".nav__link");

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
    "#f3ece3",
    "#dcecda",
    "#f1f9db",
    "#fae7d4",
    "#edf9db",
    "#d6d7e9",
    "#f1ece4",
    "#edf5e8"
  ];

  const seconds = new Date().getSeconds();
  const colorIdx = seconds % colors.length;

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const color = colors[colorIdx];
      link.style.setProperty("--hover-color", color);
    });

    link.addEventListener("mouseleave", () => {
      link.style.setProperty("--hover-color", "");
    });
  });
</script>
