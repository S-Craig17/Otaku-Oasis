document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      // Get product details
      const title = this.getAttribute('data-title');
      const price = this.getAttribute('data-price');
      const quantityInput = this.previousElementSibling.querySelector('input[name="quantity"]');
      const quantity = quantityInput.value;
      
      // Create a cart item object
      const cartItem = {
        title: title,
        price: price,
        quantity: quantity
      };
      
      // Get current cart items from local storage
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Add new item to the cart array
      cart.push(cartItem);
      
      // Store the updated cart back to local storage
      localStorage.setItem('cart', JSON.stringify(cart));
      
      // Redirect to the checkout page
      window.location.href = "checkout.html";
    });
  });
  