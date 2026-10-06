import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import './CartDrawer.css';

const FREE_SHIPPING_THRESHOLD = 350.00;

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onOpenCheckout
}) {
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD || items.length === 0 ? 0 : 25.00;
  const total = Math.max(0, subtotal - appliedDiscount + shippingCost);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (discountCode.trim().toUpperCase() === 'PLANTÃO10' || discountCode.trim().toUpperCase() === 'FIGS10') {
      setAppliedDiscount(subtotal * 0.1);
    } else if (discountCode.trim().toUpperCase() === 'CRONOS15') {
      setAppliedDiscount(subtotal * 0.15);
    } else {
      alert('Cupom inválido. Experimente usar PLANTÃO10 ou CRONOS15');
    }
  };

  return (
    <div className="cart-drawer-backdrop" onClick={onClose}>
      <div className="cart-drawer-panel" onClick={e => e.stopPropagation()}>
        
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title-box">
            <ShoppingBag size={20} />
            <h2 className="cart-title">Sua Sacola</h2>
            <span className="cart-count-badge">({items.reduce((acc, i) => acc + i.quantity, 0)})</span>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Fechar sacola">
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Meter (FIGS Signature Feature) */}
        <div className="shipping-progress-meter">
          {remainingForFreeShipping > 0 ? (
            <p className="meter-label">
              Faltam <strong>R$ {remainingForFreeShipping.toFixed(2).replace('.', ',')}</strong> para você desbloquear <strong>Frete Grátis</strong>!
            </p>
          ) : (
            <p className="meter-label success">
              <Truck size={16} />
              <span>Você desbloqueou <strong>Frete Grátis</strong> para todo o Brasil!</span>
            </p>
          )}
          <div className="meter-bar-track">
            <div 
              className={`meter-bar-fill ${freeShippingProgress >= 100 ? 'complete' : ''}`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Drawer Body / Items List */}
        <div className="cart-drawer-body">
          {items.length === 0 ? (
            <div className="cart-empty-state">
              <ShoppingBag size={48} className="empty-icon" />
              <h3 className="empty-title">Sua sacola está vazia</h3>
              <p className="empty-desc">
                Explore os nossos scrubs cirúrgicos e sinta a diferença da bio-poliamida no seu próximo plantão.
              </p>
              <button className="btn-primary empty-browse-btn" onClick={onClose}>
                Explorar Coleção
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {items.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="cart-item-row">
                  <img src={item.image} alt={item.name} className="cart-item-thumb" />
                  
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <h4 className="item-name">{item.name}</h4>
                      <button 
                        className="item-remove-btn" 
                        onClick={() => onRemoveItem(idx)}
                        aria-label="Remover item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="item-variants-pills">
                      <span className="variant-pill">Tam: {item.size}</span>
                      <span className="variant-pill">Cor: {item.color.toUpperCase()}</span>
                    </div>

                    {item.embroidery && (
                      <div className="item-embroidery-tag">
                        <span>Bordado: {item.embroidery}</span>
                      </div>
                    )}

                    <div className="item-bottom-row">
                      {/* Qty Controls */}
                      <div className="item-qty-stepper">
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQty(idx, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={13} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQty(idx, item.quantity + 1)}
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="item-line-price">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer with Subtotal & Checkout */}
        {items.length > 0 && (
          <div className="cart-drawer-footer">
            {/* Coupon Box */}
            <form onSubmit={handleApplyCoupon} className="coupon-form-wrap">
              <input 
                type="text" 
                placeholder="Código de cupom (ex: PLANTÃO10)" 
                value={discountCode}
                onChange={e => setDiscountCode(e.target.value)}
                className="coupon-input"
              />
              <button type="submit" className="coupon-apply-btn">
                Aplicar
              </button>
            </form>

            {/* Calculations Breakdown */}
            <div className="cart-breakdown-box">
              <div className="breakdown-line">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>

              {appliedDiscount > 0 && (
                <div className="breakdown-line discount">
                  <span>Desconto de Cupom</span>
                  <span>- R$ {appliedDiscount.toFixed(2).replace('.', ',')}</span>
                </div>
              )}

              <div className="breakdown-line">
                <span>Frete</span>
                <span>
                  {shippingCost === 0 ? (
                    <strong className="free-shipping-text">GRÁTIS</strong>
                  ) : (
                    `R$ ${shippingCost.toFixed(2).replace('.', ',')}`
                  )}
                </span>
              </div>

              <div className="breakdown-line total-line">
                <span>Total</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <span className="cart-installments-info">
                ou 3x de R$ {(total / 3).toFixed(2).replace('.', ',')} sem juros no cartão
              </span>
            </div>

            {/* Checkout Button */}
            <button 
              className="btn-primary cart-checkout-btn"
              onClick={() => onOpenCheckout(total)}
            >
              <span>Finalizar Compra</span>
              <ArrowRight size={17} />
            </button>

            <div className="cart-trust-reassurance">
              <ShieldCheck size={15} className="reassurance-icon" />
              <span>Compra Segura · Primeira troca 100% grátis em até 30 dias</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
