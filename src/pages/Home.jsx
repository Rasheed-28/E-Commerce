import React, { useState } from 'react';

export default function EcommerceHomepage() {
  const [selectedFilters, setSelectedFilters] = useState({
    headphoneType: '',
    price: '',
    reviews: '',
    color: '',
    material: '',
    offer: ''
  });

  // State for current page
  const [currentPage, setCurrentPage] = useState('Home');

  // Navigation items array
  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Shirts', path: 'shirts' },
    { name: '2 Piece', path: 'two-piece' },
    { name: '3 Piece', path: 'three-piece' },
    { name: 'Embroidered', path: 'embroidered' },
    { name: 'Men\'s', path: 'mens' },
    { name: 'Perfumes', path: 'perfumes' },
    { name: 'Track Orders', path: 'track-orders' }
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Earbuds, IPX8",
      description: "Organic Cotton, fairtrade certified",
      price: 89,
      originalPrice: 129,
      rating: 4.5,
      reviews: 121,
      colors: ['black', 'blue'],
      emoji: '🎧',
      badge: 'Popular'
    },
    {
      id: 2,
      name: "AirPods Max",
      description: "A perfect balance of high-fidelity audio",
      price: 559,
      originalPrice: null,
      rating: 4.8,
      reviews: 234,
      colors: ['pink', 'white'],
      emoji: '🎧',
      badge: 'Premium'
    },
    {
      id: 3,
      name: "Bose BT Earphones",
      description: "Table with air purifier, stain resistant",
      price: 289,
      originalPrice: 349,
      rating: 4.6,
      reviews: 167,
      colors: ['black'],
      emoji: '🎧',
      badge: 'Sale'
    },
    {
      id: 4,
      name: "VIVEFOX Headphones",
      description: "Wired noise reduction with mic",
      price: 39,
      originalPrice: null,
      rating: 4.3,
      reviews: 89,
      colors: ['red'],
      emoji: '🎧',
      badge: 'Budget'
    }
  ];

  const handleAddToCart = (productId) => {
    console.log('Added product to cart:', productId);
  };

  const handleToggleWishlist = (productId) => {
    console.log('Toggled wishlist for product:', productId);
  };

  const handleNavClick = (path) => {
    setCurrentPage(path);
    console.log('Navigated to:', path); // For demo purposes; replace with actual routing logic
  };

  // SVG Icons as components
  const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  );

  const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const ShoppingCartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  );

  const HeartIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  const ChevronDownIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  );

  const StarIcon = ({ filled = false, size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
    </svg>
  );

  const FilterIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"></polygon>
    </svg>
  );

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Popular': return 'bg-blue-500';
      case 'Premium': return 'bg-purple-500';
      case 'Sale': return 'bg-red-500';
      case 'Budget': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-4 px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo - Fixed width */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/logo.svg" alt="" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-800 to-teal-600 bg-clip-text text-transparent">
                NovaShop
              </span>
            </div>

            {/* Navigation - Optimized for space */}
            <nav className="hidden xl:flex items-center gap-3 flex-shrink-0">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center gap-1 cursor-pointer transition-colors px-4 py-2 rounded-lg hover:bg-emerald-50 ${
                    currentPage === item.path ? 'text-emerald-800 bg-emerald-50' : 'hover:text-emerald-800'
                  }`}
                >
                  <span className="font-medium text-base">{item.name}</span>
                </div>
              ))}
            </nav>

            {/* Search Bar - Flexible width */}
            <div className="hidden md:flex items-center bg-gradient-to-r from-gray-50 to-white rounded-2xl px-4 py-2.5 flex-1 w-96 shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <input 
                type="text" 
                placeholder="Search Product"
                className="bg-transparent outline-none flex-1 text-sm placeholder-gray-400 w-96"
              />
              <div className="text-gray-400 cursor-pointer hover:text-emerald-600 transition-colors p-1 rounded-lg hover:bg-emerald-50">
                <SearchIcon />
              </div>
            </div>

            {/* Actions - Fixed width */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Account */}
              <button className="hidden sm:flex items-center gap-2 hover:text-emerald-800 transition-colors px-2 py-1.5 rounded-lg hover:bg-emerald-50 group">
                <div className="transform group-hover:scale-110 transition-transform">
                  <UserIcon />
                </div>
                <span className="font-medium text-sm">Account</span>
              </button>
              
              {/* Cart */}
              <button className="flex items-center gap-2 hover:text-emerald-800 transition-colors px-2 py-1.5 rounded-lg hover:bg-emerald-50 group relative">
                <div className="transform group-hover:scale-110 transition-transform">
                  <ShoppingCartIcon />
                </div>
                <span className="hidden sm:inline font-medium text-sm">Cart</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>

              {/* Mobile Menu Button */}
              <button className="xl:hidden p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                <MenuIcon />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="xl:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === item.path
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'hover:bg-emerald-50 hover:text-emerald-800'
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>
            
            {/* Mobile Search */}
            <div className="md:hidden mt-3 flex items-center bg-gradient-to-r from-gray-50 to-white rounded-2xl px-4 py-2.5 shadow-sm border border-gray-200">
              <input 
                type="text" 
                placeholder="Search Product"
                className="bg-transparent outline-none flex-1 text-sm placeholder-gray-400"
              />
              <div className="text-gray-400 cursor-pointer hover:text-emerald-600 transition-colors p-1 rounded-lg hover:bg-emerald-50">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                  🎉 Limited Time Offer
                </span>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Grab Upto 50% Off On<br />
                  <span className="relative">
                    Selected Headphones
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
                  </span>
                </h1>
                <p className="text-gray-600 text-lg max-w-md">
                  Premium audio quality meets unbeatable prices. Discover your perfect sound companion today.
                </p>
              </div>
              
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Shop Now →
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-600 hover:text-white transition-all">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="flex-1 flex justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <div className="text-8xl md:text-9xl transform hover:scale-110 transition-transform">🎧</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg animate-bounce">
                  50% OFF
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-yellow-400">
                          <StarIcon filled={true} size={16} />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-semibold">4.8/5</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">1000+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {['Headphone Type', 'Price', 'Review', 'Color', 'Material', 'Offer'].map((filter) => (
              <div key={filter} className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors group">
                <span className="font-medium text-gray-700 group-hover:text-emerald-800 transition-colors">{filter}</span>
                <ChevronDownIcon size={16} className="text-gray-400 group-hover:text-emerald-600 group-hover:rotate-180 transition-all" />
              </div>
            ))}
            
            <button className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-2 rounded-xl hover:from-emerald-100 hover:to-teal-100 transition-all shadow-sm hover:shadow-md group">
              <FilterIcon className="text-gray-600 group-hover:text-emerald-600 transition-colors" />
              <span className="font-medium text-gray-700 group-hover:text-emerald-800 transition-colors">All Filters</span>
            </button>
            
            <div className="ml-auto">
              <div className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors group">
                <span className="font-medium text-gray-700 group-hover:text-emerald-800 transition-colors">Sort by</span>
                <ChevronDownIcon size={16} className="text-gray-400 group-hover:text-emerald-600 group-hover:rotate-180 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Headphones For You!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of premium headphones, designed to deliver exceptional sound quality and comfort for every lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2 border border-gray-100 overflow-hidden relative">
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-xs font-semibold z-10`}>
                  {product.badge}
                </div>
                
                <div className="relative mb-6">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-emerald-50 group-hover:to-teal-50 transition-all duration-300">
                    <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                      {product.emoji}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleToggleWishlist(product.id)}
                    className="absolute top-3 right-3 p-3 hover:bg-white rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-110 backdrop-blur-sm bg-white/80"
                  >
                    <div className="text-gray-400 hover:text-red-500 transition-colors">
                      <HeartIcon />
                    </div>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-emerald-800 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">{product.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                          <StarIcon filled={i < Math.floor(product.rating)} size={16} />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {product.colors.map((color, index) => (
                      <div 
                        key={index}
                        className={`w-5 h-5 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform`}
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-800">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <span className="text-xs text-green-600 font-semibold">
                          Save ${product.originalPrice - product.price}
                        </span>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated!</h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and special offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl border-0 focus:outline-none focus:ring-4 focus:ring-white/20 bg-white/20 text-white placeholder-white/70 backdrop-blur-sm"
              />
              <button className="bg-white text-emerald-800 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}