# 🛒 E-Commerce Product Showcase

A modern React e-commerce app with shopping cart, search, filtering, and wishlist features.

## Features

- 🛒 Shopping cart with quantity management
- 💝 Wishlist functionality
- 🔍 Search products by name/description
- 🏷️ Filter by category and price range
- ⭐ Product ratings and reviews
- 📱 Fully responsive design
- 🎨 Modern UI with animations

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Open browser**
   Visit `http://localhost:5173`

## Tech Stack

- React 18 + Vite
- Modern CSS with custom properties
- Responsive grid layout
- State management with React hooks

## Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run lint` - Code linting

---

**Made with ❤️ by Yousaf**
ecommerce-app/
├── public/
├── src/
│ ├── components/
│ │ ├── Cart.jsx # Shopping cart modal
│ │ ├── Cart.css
│ │ ├── ProductItem.jsx # Individual product card
│ │ ├── ProductItem.css
│ │ ├── ProductList.jsx # Product grid container
│ │ ├── ProductList.css
│ │ ├── SearchBar.jsx # Search functionality
│ │ ├── SearchBar.css
│ │ ├── PriceFilter.jsx # Price range filter
│ │ ├── PriceFilter.css
│ │ ├── SortOptions.jsx # Sorting dropdown
│ │ └── SortOptions.css
│ ├── App.jsx # Main application component
│ ├── App.css # Global app styles
│ ├── main.jsx # React application entry point
│ └── index.css # CSS custom properties & globals
├── package.json
├── vite.config.js
└── README.md

````

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ecommerce-app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with Hooks
- **Build Tool**: Vite 5.x
- **Styling**: Modern CSS with Custom Properties
- **State Management**: React useState and useMemo
- **Development**: ESLint for code quality
- **Icons**: Unicode emojis for lightweight icons

## 🎯 Key Components

### App.jsx

Main application component managing:

- Product data and state
- Filter and search logic
- Cart and wishlist functionality
- Component orchestration

### ProductItem.jsx

Individual product card featuring:

- Product image with error handling
- Rating display with stars
- Price with discount indicators
- Add to cart and wishlist buttons
- Stock status management

### Cart.jsx

Shopping cart modal with:

- Item quantity management
- Real-time total calculation
- Remove item functionality
- Checkout preparation

### Search & Filter Components

Advanced filtering system including:

- Text search across name and description
- Category-based filtering
- Price range selection
- Multiple sorting options

## 🎨 Design System

### Color Scheme

```css
--primary-color: #6366f1      /* Indigo */
--secondary-color: #ec4899    /* Pink */
--accent-color: #06b6d4       /* Cyan */
--text-primary: #1f2937       /* Dark Gray */
--text-secondary: #6b7280     /* Medium Gray */
```

### Typography

- **Font Family**: Inter, system fonts
- **Headings**: Bold weights (700-800)
- **Body Text**: Regular weight (400-500)
- **Responsive Sizing**: Scales across devices

### Spacing & Layout

- **Grid System**: CSS Grid with auto-fit columns
- **Responsive Breakpoints**: Mobile-first approach
- **Consistent Spacing**: Rem-based spacing scale

## 🌟 Features Walkthrough

### 🛒 Shopping Experience

1. **Browse Products** - View products in an elegant grid layout
2. **Search & Filter** - Use the search bar and filters to find specific items
3. **Add to Cart** - Click the "Add to Cart" button on any product
4. **Manage Cart** - View cart contents, adjust quantities, or remove items
5. **Wishlist** - Save products for later with the heart icon

### 📱 Mobile Experience

- Fully responsive design
- Touch-friendly interface
- Optimized layouts for smaller screens
- Smooth scrolling and interactions

### ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## 🔮 Future Enhancements

### Planned Features

- [ ] User authentication and accounts
- [ ] Payment integration (Stripe/PayPal)
- [ ] Product reviews and ratings
- [ ] Order history and tracking
- [ ] Advanced filtering (brand, size, color)
- [ ] Product recommendations
- [ ] Multi-language support
- [ ] Dark/light theme toggle

### Technical Improvements

- [ ] Unit and integration tests
- [ ] Performance optimization
- [ ] SEO enhancements
- [ ] Progressive Web App (PWA) features
- [ ] Backend integration
- [ ] Database integration
- [ ] API development

## 👨‍💻 Development

### Code Style

- ESLint configuration for consistent code style
- Modern JavaScript (ES6+) features
- Functional components with React Hooks
- CSS custom properties for theming

### Performance Considerations

- Image optimization and lazy loading
- Efficient React re-rendering with useMemo
- CSS animations using transform and opacity
- Minimal bundle size with Vite

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce platforms
- Icons from Unicode emoji set
- Product images from Unsplash
- Built with love using React and Vite

---

**Made with ❤️ by Yousaf**

> A modern e-commerce experience built for the web
