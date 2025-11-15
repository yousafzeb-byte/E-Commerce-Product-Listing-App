import "./ProductItem.css";

function ProductItem({ item, onAddToCart, onToggleWishlist, wishlist }) {
  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/600x400/cccccc/666666?text=Image+Not+Available";
  };

  const isInWishlist = wishlist.some((product) => product.id === item.id);
  const discount = item.originalPrice
    ? (((item.originalPrice - item.price) / item.originalPrice) * 100).toFixed(
        0
      )
    : 0;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star full">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="product-card">
      {discount > 0 && <div className="discount-badge">-{discount}%</div>}

      <button
        className={`wishlist-toggle ${isInWishlist ? "active" : ""}`}
        onClick={() => onToggleWishlist(item)}
        title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isInWishlist ? "❤️" : "🤍"}
      </button>

      <img
        src={item.image}
        alt={item.name}
        className="product-img"
        onError={handleImageError}
        loading="lazy"
      />

      <div className="product-content">
        <div className="category">{item.category}</div>

        <h2 className="product-name">{item.name}</h2>

        <div className="rating-container">
          <div className="stars">{renderStars(item.rating)}</div>
          <span className="rating-text">
            {item.rating} ({item.reviews} reviews)
          </span>
        </div>

        <p className="product-description">{item.description}</p>

        <div className="price-container">
          {item.originalPrice && (
            <span className="original-price">
              ${item.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="product-price">${item.price.toFixed(2)}</span>
        </div>

        <div className="product-actions">
          <button
            className={`add-to-cart ${!item.inStock ? "disabled" : ""}`}
            onClick={() => item.inStock && onAddToCart(item)}
            disabled={!item.inStock}
          >
            {item.inStock ? "🛒 Add to Cart" : "❌ Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
