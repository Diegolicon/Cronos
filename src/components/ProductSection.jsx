import React, { useState } from 'react';
import { COLORWAYS, PRODUCTS } from '../data/products';
import { Star, Plus, Check, ShoppingBag, Eye } from 'lucide-react';
import QuickAddBottomSheet from './QuickAddBottomSheet';
import './ProductSection.css';

export default function ProductSection({ 
  activeGender, 
  activeCategory,
  onAddToCart,
  onOpenProductDetail 
}) {
  const [selectedColors, setSelectedColors] = useState({});
  const [activeSheetProduct, setActiveSheetProduct] = useState(null);
  const [activeSheetColor, setActiveSheetColor] = useState('obsidian');

  // Filter products based on gender and category
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesGender = activeGender === 'all' || p.gender === activeGender || p.gender === 'unisex';
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    return matchesGender && matchesCategory;
  });

  const handleColorChange = (productId, colorId) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: colorId
    }));
  };

  const handleQuickAddClick = (product, colorKey) => {
    setActiveSheetProduct(product);
    setActiveSheetColor(colorKey);
  };

  return (
    <section id="products-section" className="products-grid-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="products-section-header">
          <div className="header-titles">
            <span className="section-eyebrow">CATÁLOGO OFICIAL · CRONOS</span>
            <h2 className="section-main-title">
              {activeGender === 'women' ? 'COLEÇÃO FEMININA' : activeGender === 'men' ? 'COLEÇÃO MASCULINA' : 'TODOS OS MODELOS'}
            </h2>
          </div>
          <span className="results-count-badge">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo encontrado' : 'modelos disponíveis'}
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="products-cards-grid">
          {filteredProducts.map(product => {
            const currentColorKey = selectedColors[product.id] || product.defaultColor;
            const currentImgUrl = product.imagesByColor[currentColorKey] || product.imagesByColor.obsidian;
            const currentColorObj = COLORWAYS.find(c => c.id === currentColorKey) || COLORWAYS[0];

            return (
              <div key={product.id} className="product-card-item">
                {/* Image Showcase */}
                <div className="card-image-wrapper">
                  <img 
                    src={currentImgUrl} 
                    alt={`${product.name} em ${currentColorObj.name}`} 
                    className="card-main-image"
                    loading="lazy"
                  />

                  {/* Badge (Best Seller, Limited, Core) */}
                  <div className="card-badge-tag">
                    <span className={`badge-pill badge-${product.badgeType}`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Quick Add Button on Hover (Desktop) / Tap (Mobile) */}
                  <button 
                    className="card-quick-add-btn"
                    onClick={() => handleQuickAddClick(product, currentColorKey)}
                    aria-label={`Comprar ${product.name}`}
                  >
                    <Plus size={16} />
                    <span>Adicionar Rápido</span>
                  </button>
                </div>

                {/* Color Swatches Row (FIGS Style Live Color Selector) */}
                <div className="card-swatches-row">
                  <div className="swatches-dots-list">
                    {COLORWAYS.map(c => {
                      const isAvailable = Boolean(product.imagesByColor[c.id]);
                      if (!isAvailable) return null;
                      
                      const isSelected = currentColorKey === c.id;

                      return (
                        <button
                          key={c.id}
                          className={`color-dot-swatch ${isSelected ? 'active' : ''}`}
                          style={{ backgroundColor: c.hex }}
                          onClick={() => handleColorChange(product.id, c.id)}
                          aria-label={`Selecionar cor ${c.name}`}
                          title={c.name}
                        />
                      );
                    })}
                  </div>
                  <span className="current-color-label">
                    {currentColorObj.name}
                  </span>
                </div>

                {/* Product Info */}
                <div className="card-details-box">
                  <div className="card-rating-row">
                    <div className="stars-wrap">
                      <Star size={13} fill="#121417" color="#121417" />
                      <span className="rating-num">{product.rating}</span>
                    </div>
                    <span className="reviews-num">({product.reviewsCount} avaliações)</span>
                  </div>

                  <h3 className="card-product-title">{product.name}</h3>
                  <p className="card-product-tagline">{product.tagline}</p>

                  <div className="card-pricing-row">
                    <div className="price-main-block">
                      <span className="price-current">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                      {product.originalPrice && (
                        <span className="price-original">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span>
                      )}
                    </div>
                    <span className="installments-label">
                      3x de R$ {(product.price / 3).toFixed(2).replace('.', ',')} s/ juros
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Quick Add Bottom Sheet */}
      <QuickAddBottomSheet
        product={activeSheetProduct}
        currentColorKey={activeSheetColor}
        isOpen={Boolean(activeSheetProduct)}
        onClose={() => setActiveSheetProduct(null)}
        onConfirmAdd={onAddToCart}
      />
    </section>
  );
}
