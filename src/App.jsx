import { useState, useMemo } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";
import PriceFilter from "./components/PriceFilter";
import SortOptions from "./components/SortOptions";
import "./App.css";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Nebula Brew Coffee Beans",
      price: 18.99,
      originalPrice: 22.99,
      description: "Roasted on a floating station orbiting Jupiter.",
      category: "Food & Drinks",
      rating: 4.8,
      reviews: 127,
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 2,
      name: "AeroBlade Mini Drone",
      price: 129.99,
      originalPrice: 149.99,
      description: "A palm-sized drone with AI-assisted stabilization.",
      category: "Electronics",
      rating: 4.6,
      reviews: 89,
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      name: "LumaGlow Smart Lamp",
      price: 49.99,
      originalPrice: 59.99,
      description: "A color-shifting desk lamp that adapts to your mood.",
      category: "Home",
      rating: 4.7,
      reviews: 203,
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      name: "CrystalTone Earbuds",
      price: 89.99,
      originalPrice: 99.99,
      description: "Noise-isolating earbuds made from crystal polymer.",
      category: "Electronics",
      rating: 4.5,
      reviews: 156,
      inStock: false,
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 5,
      name: "FrostPeak Stainless Bottle",
      price: 24.99,
      originalPrice: 29.99,
      description: "Keeps drinks cold for 30 hours. Mountain-tested.",
      category: "Outdoor",
      rating: 4.9,
      reviews: 342,
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 6,
      name: "Quantum Gaming Headset",
      price: 159.99,
      originalPrice: 179.99,
      description: "7.1 surround sound with haptic feedback technology.",
      category: "Electronics",
      rating: 4.4,
      reviews: 78,
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 7,
      name: "Artisan Sourdough Starter Kit",
      price: 32.99,
      originalPrice: 39.99,
      description: "Everything you need to start your sourdough journey.",
      category: "Food & Drinks",
      rating: 4.3,
      reviews: 94,
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 8,
      name: "EcoZen Bamboo Desk Organizer",
      price: 45.99,
      originalPrice: 52.99,
      description: "Sustainable bamboo organizer for your workspace.",
      category: "Home",
      rating: 4.6,
      reviews: 167,
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=60",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState("name");
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const categories = ["All", "Food & Drinks", "Electronics", "Home", "Outdoor"];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesSearch && matchesPrice;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [products, selectedCategory, searchQuery, priceRange, sortBy]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">E-Commerce Product Showcase</h1>
        <div className="header-actions">
          <button className="wishlist-btn" title="Wishlist">
            ❤️ {wishlist.length}
          </button>
          <button
            className="cart-btn"
            onClick={() => setShowCart(!showCart)}
            title="Shopping Cart"
          >
            🛒 {getTotalItems()}
          </button>
        </div>
      </header>

      <div className="controls-container">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="filters-row">
          <div className="filter-group">
            <label>Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
          <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      <div className="results-info">
        <p>{filteredAndSortedProducts.length} products found</p>
      </div>

      <ProductList
        products={filteredAndSortedProducts}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        wishlist={wishlist}
      />

      {showCart && (
        <Cart
          items={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onClose={() => setShowCart(false)}
          totalPrice={getTotalPrice()}
        />
      )}

      <footer className="footer">
        <p>Made with ❤️ by Yousaf</p>
      </footer>
    </div>
  );
}

export default App;
