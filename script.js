const cards = document.querySelectorAll('.course-card');
const hoverCard = document.getElementById('hoverCard');

// Elements to update
const hoverTitle = document.getElementById('hoverTitle');
const hoverCategory = document.getElementById('hoverCategory');
const hoverPrice = document.getElementById('hoverPrice');
const hoverImage = document.getElementById('hoverImage');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const rect = card.getBoundingClientRect();

    // 🧠 Get data from hovered card
    const title = card.dataset.title;
    const category = card.dataset.category;
    const price = card.dataset.price;
    const image = card.dataset.image;

    // 🎯 Inject into hover card
    hoverTitle.textContent = title;
    hoverCategory.textContent = category;
    hoverPrice.textContent = price;

    if (hoverImage) {
      hoverImage.src = image;
    }

    // 📍 Position
    const spaceRight = window.innerWidth - rect.right;

    hoverCard.style.top = `${rect.top}px`;

    if (spaceRight < 450) {
      hoverCard.style.left = `${rect.left - 450}px`;
    } else {
      hoverCard.style.left = `${rect.right + 20}px`;
    }

    // 👁 Show
    hoverCard.classList.remove('opacity-0', 'pointer-events-none');
    hoverCard.classList.add('opacity-100');
  });

  card.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!hoverCard.matches(':hover')) {
        hoverCard.classList.add('opacity-0', 'pointer-events-none');
        hoverCard.classList.remove('opacity-100');
      }
    }, 120);
  });
});

// Keep visible
hoverCard.addEventListener('mouseenter', () => {
  hoverCard.classList.remove('opacity-0', 'pointer-events-none');
  hoverCard.classList.add('opacity-100');
});

// Hide
hoverCard.addEventListener('mouseleave', () => {
  hoverCard.classList.add('opacity-0', 'pointer-events-none');
  hoverCard.classList.remove('opacity-100');
});

let cartCount = 0;

const cartBadge = document.getElementById('cartCount');
const addToCartBtn = document.getElementById('addToCartBtn');

addToCartBtn.addEventListener('click', () => {
  cartCount++;

  // Update UI
  cartBadge.textContent = cartCount;

  // Show badge if hidden
  if (cartBadge.classList.contains('hidden')) {
    cartBadge.classList.remove('hidden');
  }
});