import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryStories from './components/CategoryStories';
import ProductSection from './components/ProductSection';
import FabricTechSection from './components/FabricTechSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import StickyMobileBar from './components/StickyMobileBar';
import CheckoutModal from './components/CheckoutModal';
import { CheckCircle2 } from 'lucide-react';
import './App.css';

export default function App() {
  const [activeGender, setActiveGender] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Cart State (Initialized with a default flagship set)
  const [cartItems, setCartItems] = useState([
    {
      id: 'cronos-set-women-obsidian-M',
      productId: 'cronos-set-women',
      name: 'Conjunto Scrub Cronos Raffaela',
      price: 389.00,
      size: 'M',
      color: 'obsidian',
      image: '/imagens/img1.jpeg',
      embroidery: 'Dra. Beatriz // Cirurgia Geral',
      quantity: 1
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  // Cart operations
  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(p => 
        p.productId === item.productId && 
        p.size === item.size && 
        p.color === item.color &&
        (p.embroidery || '') === (item.embroidery || '')
      );

      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += 1;
        return copy;
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });

    setToastMessage(`${item.name} (${item.size}) adicionado à sacola!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdateQty = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems(prev => {
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleRemoveItem = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleOpenCheckout = (total) => {
    setCheckoutTotal(total);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
    setToastMessage('Pedido realizado com sucesso! Verifique seu e-mail.');
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleNavigateSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="cronos-store-root">
      
      {/* 1. Header with FIGS Dual Architecture (Announcement, Megamenu & Mobile Subtabs) */}
      <Navbar 
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeGender={activeGender}
        onSelectGender={setActiveGender}
        onNavigateSection={handleNavigateSection}
      />

      <main>
        {/* 2. Hero Campaign Banner (Wide on Desktop, Portrait on Mobile) */}
        <HeroBanner 
          onSelectGender={setActiveGender}
          onExplore={() => handleNavigateSection('products-section')}
        />

        {/* 3. Instagram-Style Stories on Mobile + Category Filter Pills on Desktop */}
        <CategoryStories 
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectGender={setActiveGender}
        />

        {/* 4. Products Grid with Live Color Swatches & Quick Add Bottom Sheet */}
        <ProductSection 
          activeGender={activeGender}
          activeCategory={activeCategory}
          onAddToCart={handleAddToCart}
        />

        {/* 5. Fabric Technology Spotlight (FIGS FIONx Equivalent with Macro Photo) */}
        <FabricTechSection />
      </main>

      {/* 7. Comprehensive FIGS-Style Footer */}
      <Footer />

      {/* 8. Desktop Side Cart / Mobile Drawer with Free Shipping Meter */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* 9. Mobile Sticky Bottom Dock (Thumb Zone Best Practices) */}
      <StickyMobileBar 
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToProducts={() => handleNavigateSection('products-section')}
      />

      {/* 10. Checkout Modal (Pix 5% OFF + Cartão) */}
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        total={checkoutTotal}
        onOrderComplete={handleOrderComplete}
      />

      {/* Global Toast Feedback */}
      {toastMessage && (
        <div className="cronos-toast-notification">
          <CheckCircle2 size={17} className="toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
