document.addEventListener("DOMContentLoaded", function(event) { 
    const carouselContainer = document.querySelector('.carousel-container');
    const tilesWrap = carouselContainer.querySelector('.tilesWrap');
    const tiles = tilesWrap.querySelectorAll('li');
    const totalTiles = tiles.length;
    let currentIndex = 0;

    function showTiles() {
      tiles.forEach(tile => {
        tile.style.display = 'none';
      });

      for (let i = currentIndex; i < currentIndex + 3; i++) {
        tiles[i % totalTiles].style.display = 'inline-block';
      }
    }

    function nextTiles() {
      currentIndex = (currentIndex + 3) % totalTiles;
      showTiles();
    }

    showTiles();


    setInterval(nextTiles, 5000); 
  });



  document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.nav-item');
    var tabContents = document.querySelectorAll('.tab');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function() {
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('active');
            }
            this.classList.add('active');

            var target = this.getAttribute('data-tab');
            for (var k = 0; k < tabContents.length; k++) {
                tabContents[k].classList.remove('active');
                if (tabContents[k].id === target) {
                    tabContents[k].classList.add('active');
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.nav-item');
    var tabContents = document.querySelectorAll('.tab');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function() {
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('active');
            }
            this.classList.add('active');

            var target = this.getAttribute('data-tab');
            for (var k = 0; k < tabContents.length; k++) {
                tabContents[k].classList.remove('active');
                if (tabContents[k].id === target) {
                    tabContents[k].classList.add('active');
                }
            }
        });
    }

    var carousel = document.querySelector('.carousel');
    var carouselItems = document.querySelectorAll('.carousel-item');
    var prevButton = document.querySelector('.carousel-button.prev');
    var nextButton = document.querySelector('.carousel-button.next');
    var currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container, .testimonial-carousel-container');

    carousels.forEach(carouselContainer => {
        const prevButton = carouselContainer.querySelector('.carousel-button.prev');
        const nextButton = carouselContainer.querySelector('.carousel-button.next');
        const carousel = carouselContainer.querySelector('.carousel, .testimonial-carousel');
        const items = carousel.querySelectorAll('.carousel-item, .testimonial-carousel-item');
        let currentIndex = 0;

        function showItem(index) {
            const offset = -index * 100;
            carousel.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
            showItem(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
            showItem(currentIndex);
        });
    });
});