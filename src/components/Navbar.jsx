import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, ChevronRight, User, ShieldCheck } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  activeGender, 
  onSelectGender,
  onNavigateSection 
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const announcements = [
    'FRETE GRÁTIS PARA TODO O BRASIL EM COMPRAS ACIMA DE R$ 350',
    'PRIMEIRA TROCA 100% GRÁTIS E SEM BUROCRACIA · 30 DIAS',
    'NOVO DROP: EDIÇÃO LIMITADA SOLAR AMBER JÁ DISPONÍVEL'
  ];

  const handleGenderTabClick = (gender) => {
    onSelectGender(gender);
    if (onNavigateSection) onNavigateSection('products-section');
  };

  return (
    <header className="site-header">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        <div className="container announcement-content">
          <span className="announcement-text">{announcements[0]}</span>
          <div className="announcement-right">
            <span className="shipping-badge">
              <ShieldCheck size={13} />
              <span>Garantia de Qualidade</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV BAR (DESKTOP & MOBILE WRAPPER) */}
      <div className="main-navbar">
        <div className="container main-nav-container">
          
          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>

          {/* Desktop Left Nav: Gender Switchers & Key Links */}
          <nav className="desktop-left-nav" aria-label="Navegação Principal">
            <button 
              className={`nav-gender-link ${activeGender === 'women' ? 'active' : ''}`}
              onClick={() => handleGenderTabClick('women')}
            >
              Feminino
            </button>
            <button 
              className={`nav-gender-link ${activeGender === 'men' ? 'active' : ''}`}
              onClick={() => handleGenderTabClick('men')}
            >
              Masculino
            </button>
            <span className="nav-divider"></span>
            <button 
              className="nav-text-link"
              onClick={() => onNavigateSection('products-section')}
            >
              Conjuntos
            </button>
            <button 
              className="nav-text-link"
              onClick={() => onNavigateSection('fabric-tech')}
            >
              Tecnologia
            </button>
          </nav>

          {/* Brand Logo (FIGS Aesthetic: All-Caps Wide Spaced) */}
          <div className="brand-center-logo">
            <a href="#" className="brand-wordmark-link">
              <span className="brand-name">CRONOS</span>
              <span className="brand-sub">WORKWEAR</span>
            </a>
          </div>

          {/* Nav Right Utilities */}
          <div className="desktop-right-utilities">
            <button 
              className="utility-btn" 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Buscar produtos"
            >
              <Search size={20} />
            </button>
            
            <button 
              className="utility-btn desktop-only" 
              aria-label="Conta do usuário"
              title="Minha Conta"
            >
              <User size={20} />
            </button>

            {/* Bag Button with Counter Badge */}
            <button 
              className="utility-btn bag-btn" 
              onClick={onOpenCart}
              aria-label={`Sacola com ${cartCount} itens`}
            >
              <ShoppingBag size={21} />
              {cartCount > 0 && (
                <span className="bag-badge">{cartCount}</span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 3. MOBILE SUB-BAR (FIGS UNIQUE DUAL ARCHITECTURE: ONE-TOUCH GENDER TABS) */}
      <div className="mobile-subbar">
        <div className="mobile-gender-tabs">
          <button 
            className={`mobile-tab ${activeGender === 'all' ? 'active' : ''}`}
            onClick={() => handleGenderTabClick('all')}
          >
            Todos
          </button>
          <button 
            className={`mobile-tab ${activeGender === 'women' ? 'active' : ''}`}
            onClick={() => handleGenderTabClick('women')}
          >
            Feminino
          </button>
          <button 
            className={`mobile-tab ${activeGender === 'men' ? 'active' : ''}`}
            onClick={() => handleGenderTabClick('men')}
          >
            Masculino
          </button>
        </div>
      </div>

      {/* 4. MOBILE SLIDE-OUT MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={e => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-wordmark-link">
                <span className="brand-name">CRONOS</span>
                <span className="brand-sub">WORKWEAR</span>
              </div>
              <button 
                className="close-drawer-btn" 
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mobile-drawer-content">
              <div className="mobile-drawer-gender-group">
                <button 
                  className={`drawer-gender-btn ${activeGender === 'women' ? 'active' : ''}`}
                  onClick={() => { handleGenderTabClick('women'); setIsMobileMenuOpen(false); }}
                >
                  Coleção Feminina
                  <ChevronRight size={16} />
                </button>
                <button 
                  className={`drawer-gender-btn ${activeGender === 'men' ? 'active' : ''}`}
                  onClick={() => { handleGenderTabClick('men'); setIsMobileMenuOpen(false); }}
                >
                  Coleção Masculina
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="drawer-nav-list">
                <button 
                  className="drawer-nav-item"
                  onClick={() => { onNavigateSection('products-section'); setIsMobileMenuOpen(false); }}
                >
                  Conjuntos Completos
                </button>
                <button 
                  className="drawer-nav-item"
                  onClick={() => { onNavigateSection('fabric-tech'); setIsMobileMenuOpen(false); }}
                >
                  Tecnologia Bio-Shield™
                </button>
              </div>

              <div className="mobile-drawer-footer">
                <div className="drawer-guarantee">
                  <ShieldCheck size={16} className="guarantee-icon" />
                  <span>1ª Troca Grátis em até 30 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SEARCH MODAL OVERLAY */}
      {isSearchOpen && (
        <div className="search-modal-backdrop" onClick={() => setIsSearchOpen(false)}>
          <div className="search-modal-box" onClick={e => e.stopPropagation()}>
            <div className="search-input-wrap">
              <Search size={20} className="search-box-icon" />
              <input 
                type="text" 
                placeholder="Buscar por scrub, cor, modelo..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                autoFocus
                className="search-field"
              />
              <button className="search-close-btn" onClick={() => setIsSearchOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="search-suggestions">
              <span className="suggestions-title">Buscas Populares:</span>
              <div className="suggestion-tags">
                <button onClick={() => { setSearchQuery('Conjunto'); setIsSearchOpen(false); onNavigateSection('products-section'); }}>Conjuntos</button>
                <button onClick={() => { setSearchQuery('Navy'); setIsSearchOpen(false); onNavigateSection('products-section'); }}>Surgical Navy</button>
                <button onClick={() => { setSearchQuery('Jogger'); setIsSearchOpen(false); onNavigateSection('products-section'); }}>Calça Jogger</button>
                <button onClick={() => { setSearchQuery('Preto'); setIsSearchOpen(false); onNavigateSection('products-section'); }}>Obsidian Black</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
