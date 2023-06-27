// Select the image container element
const imageContainer = document.querySelector(".image-container");

// Array of all image URLs
const allImages = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
  "images/image4.png",
  "images/image5.png",
  "images/image6.png",
  "images/image7.png",
  "images/image8.png",
  "images/image9.png",
  "images/image10.png",
  "images/image11.png",
  "images/image12.png",
  "images/image13.png",
  "images/image14.png",
  "images/image15.png",
  
];

// Array to hold the current displayed images
let displayedImages = [];

// Shuffle the images and update the displayed grid when the button is clicked
const shuffleButton = document.querySelector("#shuffle-button");
shuffleButton.addEventListener("click", function() {
  const shuffledImages = shuffleArray(allImages);
  displayedImages = shuffledImages.slice(0, 9);
  updateImageGrid(displayedImages);
});

// Shuffle the array in-place using the Fisher-Yates algorithm
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Update the image grid with the provided images
function updateImageGrid(images) {
  imageContainer.innerHTML = ""; // Clear the container

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let i = 0; i < images.length; i++) {
    const image = document.createElement("img");
    image.src = images[i];
    image.style.opacity = "0";

    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.appendChild(image);

    gridContainer.appendChild(gridItem);
  }

  imageContainer.appendChild(gridContainer);

  // Trigger fade-in animation
  fadeInImages();
}

// Fade in the images
function fadeInImages() {
  const allImages = Array.from(imageContainer.querySelectorAll("img"));
  let counter = 0;
  const interval = 200 / allImages.length;

  function fadeIn() {
    if (counter >= allImages.length) {
      return;
    }

    allImages[counter].style.opacity = "1";
    counter++;
    setTimeout(fadeIn, interval);
  }

  fadeIn();
}

// Initialize the grid with the initial set of images
const initialImages = allImages.slice(0, 9);
updateImageGrid(initialImages);
