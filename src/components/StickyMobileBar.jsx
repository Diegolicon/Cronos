import React from 'react';
import { ShoppingBag, Sparkles, ArrowUp } from 'lucide-react';
import './StickyMobileBar.css';

export default function StickyMobileBar({ 
  cartCount, 
  onOpenCart, 
  onScrollToProducts 
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="sticky-mobile-dock" aria-label="Navegação rápida mobile">
      <div className="dock-container">
        
        {/* Quick Top Button */}
        <button 
          className="dock-action-btn"
          onClick={scrollToTop}
          aria-label="Voltar ao início"
        >
          <ArrowUp size={18} />
          <span>Início</span>
        </button>

        {/* Catalog Jump Button */}
        <button 
          className="dock-primary-browse-btn"
          onClick={onScrollToProducts}
        >
          <Sparkles size={16} />
          <span>Ver Scrubs</span>
        </button>

        {/* Cart Button */}
        <button 
          className="dock-cart-btn"
          onClick={onOpenCart}
          aria-label={`Ver sacola com ${cartCount} itens`}
        >
          <div className="dock-bag-icon-wrap">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="dock-badge">{cartCount}</span>
            )}
          </div>
          <span>Sacola</span>
        </button>

      </div>
    </div>
  );
}
