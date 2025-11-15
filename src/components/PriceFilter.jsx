import "./PriceFilter.css";

function PriceFilter({ priceRange, setPriceRange }) {
  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange([priceRange[0], value]);
  };

  return (
    <div className="price-filter">
      <label>Price Range:</label>
      <div className="price-inputs">
        <input
          type="number"
          min="0"
          max="500"
          value={priceRange[0]}
          onChange={handleMinChange}
          placeholder="Min"
          className="price-input"
        />
        <span className="price-separator">-</span>
        <input
          type="number"
          min="0"
          max="500"
          value={priceRange[1]}
          onChange={handleMaxChange}
          placeholder="Max"
          className="price-input"
        />
      </div>
      <div className="price-display">
        ${priceRange[0]} - ${priceRange[1]}
      </div>
    </div>
  );
}

export default PriceFilter;
