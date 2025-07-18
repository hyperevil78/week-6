console.log("js working");

const data = [
  {
    img: 'imgs/fort.jpg',
    title: 'Aguada Fort',
    desc: 'Built in the 17th century by the Portuguese, Aguada Fort stands majestically overlooking the Arabian Sea. Once a defense and water storage fortress, it features a four-storey lighthouse — one of the oldest of its kind in Asia. Its panoramic views, thick laterite walls, and historical significance make it a must-visit destination in Goa.'
  },
  {
    img: 'imgs/chruch.jpg',
    title: 'Church Of Our Lady Of The Immaculate Conception',
    desc: 'Located in the heart of Panjim, this iconic white church with its grand symmetrical stairways and Portuguese Baroque architecture is one of Goa’s most photographed landmarks. Originally built in the 16th century, it houses the ancient bell from the ruins of the Church of Our Lady of Grace. The church lights up beautifully at night and offers a peaceful escape from the city buzz.'
  },
  {
    img: 'imgs/church2.webp',
    title: 'Basilica of Bom Jesus',
    desc: 'A UNESCO World Heritage Site, the Basilica of Bom Jesus is one of Goa’s most sacred and historic churches. Built in 1605, it holds the mortal remains of St. Francis Xavier, attracting pilgrims from around the world. The church’s Baroque architecture, richly carved interiors, and aged yet majestic stone walls make it a spiritual and cultural treasure of Old Goa.'
  }
];


const cardData = [
  {
    img: 'imgs/hotel.jpg',
    title: 'Hotel',
    desc: 'Find comfortable stays in Goa’s top locations'
  },
  {
    img: 'imgs/restaurant.jpg',
    title: 'Restaurant',
    desc: 'Explore the best places to eat authentic Goan and international cuisine'
  },
  {
    img: 'imgs/bus.jpg',
    title: 'Transport',
    desc: 'Get To Goa with convenient bus'
  }
];

const imgElement = document.getElementById('carousel-img');
const titleElement = document.getElementById('title');
const descElement = document.getElementById('desc');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
let slideInterval;

// Show image + title + description
function showImage(index) {
  imgElement.src = data[index].img;
  titleElement.textContent = data[index].title;
  descElement.textContent = data[index].desc;
}

// Next image
function nextImage() {
  currentIndex = (currentIndex + 1) % data.length;
  showImage(currentIndex);
  resetInterval();
}

// Previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + data.length) % data.length;
  showImage(currentIndex);
  resetInterval();
}

// Auto-slide
function startInterval() {
  slideInterval = setInterval(() => {
    nextImage();
  }, 3000);
}

// Reset timer
function resetInterval() {
  clearInterval(slideInterval);
  startInterval();
}

// Event listeners
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Init
showImage(currentIndex);
startInterval();




const cardContainer = document.getElementById('card-container');

cardData.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  
  card.innerHTML = `
  <img src="${item.img}" alt="${item.title}" class="card-img">
  <h3 class="card-title">${item.title}</h3>
  <p class="card-desc">${item.desc}</p>

  `;

  cardContainer.appendChild(card);
});
