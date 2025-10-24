document.addEventListener('DOMContentLoaded', () => {
  const cartItems = [];
  const cartList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const fmt = new Intl.NumberFormat('id-ID');

  document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      const card = e.target.closest('.card');
      const name = card.dataset.name;
      const price = parseInt(card.dataset.price);
      cartItems.push({ name, price });
      renderCart();
    });
  });

  function renderCart() {
    cartList.innerHTML = cartItems.map(i => `<li>${i.name} - Rp ${fmt.format(i.price)}</li>`).join('');
    const total = cartItems.reduce((a,b)=>a+b.price,0);
    cartTotal.textContent = `Total: Rp ${fmt.format(total)}`;
  }

  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Terima kasih! Pesanan kamu akan kami proses 💖');
    e.target.reset();
  });

  document.body.insertAdjacentHTML('beforeend', '<div class="theme-toggle">🌙</div>');
  document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});
