import "./Cart.css";

function Cart({ items, onRemove, onUpdateQuantity, onClose, totalPrice }) {
  if (items.length === 0) {
    return (
      <div className="cart-overlay">
        <div className="cart-container">
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <button className="close-cart" onClick={onClose}>
              ✕
            </button>
          </div>
          <div className="empty-cart">
            <p>🛒 Your cart is empty</p>
            <button className="continue-shopping" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Shopping Cart ({items.length} items)</h2>
          <button className="close-cart" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    −
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="remove-btn"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </div>
          <div className="cart-actions">
            <button className="continue-shopping" onClick={onClose}>
              Continue Shopping
            </button>
            <button className="checkout-btn">Checkout 🚀</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
