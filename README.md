<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My Portfolio</title>
  <style>
    /* Styles for the navigation bar */
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #333;
      color: #fff;
      padding: 20px;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      margin-right: 20px;
      font-weight: bold;
      font-size: 18px;
    }
    nav a:hover {
      text-decoration: underline;
    }

    /* Styles for the page content */
    main {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
    }
    h1 {
      font-size: 36px;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
  </style>
  <script>
    // Generate random pastel color for the background
    function getRandomPastelColor() {
      var r = Math.floor((Math.random() * 256 + 64) / 2);
      var g = Math.floor((Math.random() * 256 + 64) / 2);
      var b = Math.floor((Math.random() * 256 + 64) / 2);
      return "rgb(" + r + "," + g + "," + b + ")";
    }

    // Set the background color to a random pastel color on load
    window.onload = function() {
      document.body.style.backgroundColor = getRandomPastelColor();
    }
  </script>
</head>
<body>
  <!-- Navigation bar with random pastel color background -->
  <nav style="background-color: ${getRandomPastelColor()}">
    <div>
      <a href="#">Home</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#cv">CV</a>
      <a href="#documents">Documents</a>
    </div>
  </nav>

  <!-- Front page content -->
  <main>
    <h1>Welcome to my portfolio!</h1>
    <p>Here you can find examples of my work, my CV, and documents and talks that I have written.</p>
    <p>Use the navigation bar above to explore the different pages of my portfolio.</p>
  </main>

  <!-- Portfolio page content -->
  <main id="portfolio">
    <h1>My Portfolio</h1>
    <h2>Images</h2>
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
  </main>

  <!-- CV page content -->
  <main id="cv">
    <h1>My CV</h1>
    <p>Insert your CV content here.</p>
  </main>

  <!-- Documents page content -->
  <main id="documents">
    <h1>My Documents and Talks</h1>
    <h2>Documents</h2>
    <ul>
      <li><a href="document1.pdf">Document 1</a></li>
      <li><a href="document2.pdf">Document 2</a></li>
      <
