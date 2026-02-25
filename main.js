// -------------------------------
// PDF EMBED HANDLER
// -------------------------------
document.querySelectorAll('.pdf-grid a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const pdfUrl = this.href;
    PDFObject.embed(pdfUrl, "#pdf-viewer");
    document.querySelector('#pdf-modal').classList.add('open');
  });
});


// -------------------------------
// RANDOM HOVER COLORS FOR NAV
// -------------------------------

const colors = [
  "#b8c4c6", "#e6efc9", "#abb2cc", "#b6daf4", "#e4cce1", "#c0dcb4",
  "#e2b9ae", "#b8d0f1", "#eed5e0", "#d8e2af", "#ebc6ac", "#d7b6b7",
  "#f6e8c6", "#ebf1e6", "#e7e4f0", "#dbc6b1", "#aecf9b", "#f0cce1",
  "#daddea", "#f8e6e3", "#f1e8ea", "#f4d6e8", "#dff0dc", "#d1e9fe",
  "#dae8f3", "#eddeea", "#e3e2ef", "#d3dbed", "#e9f1d2", "#faf9d9",
  "#ecd1f0", "#eee1ec", "#dee7f8", "#eec7d5", "#e3c3c6", "#cad69b",
  "#aeb1a4", "#e6e0d8", "#8fc0d1", "#9c9fbc", "#407973", "#407973",
  "#c7bea0", "#b37c85", "#91a9a9", "#97bdca", "#ecb681", "#d8d8cc",
  "#8ba1cc", "#81a780", "#b3d3ea", "#c7cdd2", "#b994c0", "#e8f1c4",
  "#915e88", "#9a6f96", "#f5cf98", "#a49db0", "#e7c5ae", "#9cacbb"
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

document.querySelectorAll('#my-nav ul li a').forEach(function (link) {
  link.addEventListener('mouseover', function () {
    this.style.backgroundColor = getRandomColor();
  });

  link.addEventListener('mouseleave', function () {
    this.style.backgroundColor = '';
  });
});


// -------------------------------
// GALLERY LIGHTBOX
// -------------------------------
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', function () {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');

    const largeImage = document.createElement('img');
    largeImage.src = img.src;
    largeImage.classList.add('large-image');

    lightbox.appendChild(largeImage);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => lightbox.remove());
  });
});


// -------------------------------
<script>
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function unlockPwBox(box) {

  const correctHash = "PASTE_YOUR_REAL_HASH_HERE";

  const userInput = prompt("Enter password:");
  if (!userInput) return;

  const userHash = await sha256(userInput);

  const placeholder = box.querySelector(".pw-placeholder");
  const secret = box.querySelector(".pw-secret");

  if (userHash === correctHash) {
    placeholder.style.display = "none";
    secret.style.display = "block";
    box.onclick = null;
  } else {
    alert("Incorrect password.");
  }
}

window.unlockPwBox = unlockPwBox;
</script>
