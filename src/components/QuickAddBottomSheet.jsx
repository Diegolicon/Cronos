import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck } from 'lucide-react';
import './QuickAddBottomSheet.css';

export default function QuickAddBottomSheet({ 
  product, 
  currentColorKey, 
  isOpen, 
  onClose, 
  onConfirmAdd 
}) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [embroideryText, setEmbroideryText] = useState('');
  const [showEmbroideryInput, setShowEmbroideryInput] = useState(false);

  if (!isOpen || !product) return null;

  const currentImage = product.imagesByColor[currentColorKey] || product.imagesByColor.obsidian;

  const handleConfirm = () => {
    onConfirmAdd({
      id: `${product.id}-${currentColorKey}-${selectedSize}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: currentColorKey,
      image: currentImage,
      embroidery: embroideryText.trim() ? embroideryText.trim() : null
    });
    onClose();
  };

  return (
    <div className="bottom-sheet-backdrop" onClick={onClose}>
      <div className="bottom-sheet-card" onClick={e => e.stopPropagation()}>
        <div className="sheet-drag-handle"></div>

        {/* Header */}
        <div className="sheet-header">
          <div className="sheet-product-summary">
            <img src={currentImage} alt={product.name} className="sheet-thumb-img" />
            <div className="sheet-summary-info">
              <h3 className="sheet-product-title">{product.name}</h3>
              <div className="sheet-price-row">
                <span className="sheet-price">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                <span className="sheet-color-badge">Cor: {currentColorKey.toUpperCase()}</span>
              </div>
            </div>
          </div>
          <button className="sheet-close-btn" onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        {/* Size Selector */}
        <div className="sheet-body">
          <div className="sheet-option-group">
            <div className="sheet-label-row">
              <span className="sheet-group-label">Selecione o Tamanho:</span>
              <span className="sheet-fit-guide">Caimento Fiel às Medidas</span>
            </div>
            <div className="sheet-sizes-grid">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`sheet-size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Optional Medical Embroidery Personalization */}
          <div className="sheet-embroidery-box">
            <button 
              className="sheet-embroidery-toggle"
              onClick={() => setShowEmbroideryInput(!showEmbroideryInput)}
            >
              <span>+ Personalizar com Bordado (Nome / CRM)</span>
              <span className="embroidery-free-tag">Grátis</span>
            </button>
            {showEmbroideryInput && (
              <div className="embroidery-input-wrap">
                <input 
                  type="text" 
                  placeholder="Ex: Dra. Beatriz // Cirurgia Geral" 
                  value={embroideryText}
                  onChange={e => setEmbroideryText(e.target.value)}
                  maxLength={36}
                  className="embroidery-input-field"
                />
              </div>
            )}
          </div>

          {/* Guarantee Pill */}
          <div className="sheet-guarantee-note">
            <ShieldCheck size={16} className="note-icon" />
            <span>Primeira troca grátis caso o tamanho não fique perfeito.</span>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="sheet-footer">
          <button className="btn-primary sheet-confirm-btn" onClick={handleConfirm}>
            <ShoppingBag size={18} />
            <span>Adicionar à Sacola · R$ {product.price.toFixed(2).replace('.', ',')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
