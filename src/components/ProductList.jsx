import ProductItem from "./ProductItem";
import "./ProductList.css";

function ProductList({ products, onAddToCart, onToggleWishlist, wishlist }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          item={product}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          wishlist={wishlist}
        />
      ))}
    </div>
  );
}

export default ProductList;
