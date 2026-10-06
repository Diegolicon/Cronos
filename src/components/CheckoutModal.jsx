import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, QrCode, CreditCard, ShieldCheck, Copy, Check } from 'lucide-react';
import './CheckoutModal.css';

export default function CheckoutModal({
  isOpen,
  onClose,
  total,
  onOrderComplete
}) {
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [copiedKey, setCopiedKey] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Dr. Roberto Santos',
    email: 'roberto.santos@hospital.com.br',
    phone: '(11) 98765-4321',
    address: 'Av. Paulista, 1578 - Conjunto 14B',
    city: 'São Paulo',
    state: 'SP',
    zip: '01310-200'
  });

  if (!isOpen) return null;

  const pixDiscount = paymentMethod === 'pix' ? total * 0.05 : 0;
  const finalTotal = Math.max(0, total - pixDiscount);

  const handleCopyPix = () => {
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 3000);
  };

  const handleFinishOrder = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      onOrderComplete();
    }, 4000);
  };

  return (
    <div className="checkout-backdrop" onClick={onClose}>
      <div className="checkout-modal-card" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="checkout-modal-header">
          <div className="checkout-header-info">
            <h2 className="checkout-title">Finalização de Pedido</h2>
            <span className="checkout-secure-badge">
              <ShieldCheck size={14} />
              <span>Ambiente Criptografado 256-bit</span>
            </span>
          </div>
          <button className="checkout-close-btn" onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        {/* Success View */}
        {isSuccess ? (
          <div className="checkout-success-view">
            <CheckCircle2 size={56} className="success-icon" />
            <h3 className="success-title">PEDIDO CONFIRMADO COM SUCESSO!</h3>
            <p className="success-desc">
              Obrigado pela preferência, <strong>{formData.name}</strong>. Enviamos a confirmação detalhada e o código de rastreio para <strong>{formData.email}</strong>.
            </p>
            <div className="success-order-box">
              <span>Número do Pedido: <strong>#CRN-{Math.floor(100000 + Math.random() * 900000)}</strong></span>
              <span>Total Pago: <strong>R$ {finalTotal.toFixed(2).replace('.', ',')}</strong></span>
            </div>
            <button className="btn-primary success-btn" onClick={onClose}>
              Voltar à Loja
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleFinishOrder} className="checkout-form-body">
            
            {/* Delivery Details */}
            <div className="checkout-section-block">
              <span className="checkout-section-title">1. Dados de Envio</span>
              <div className="checkout-fields-grid">
                <input 
                  type="text" 
                  placeholder="Nome Completo" 
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="checkout-input span-2"
                />
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="checkout-input"
                />
                <input 
                  type="tel" 
                  placeholder="WhatsApp / Telefone" 
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="checkout-input"
                />
                <input 
                  type="text" 
                  placeholder="Endereço (Rua, Número, Complemento)" 
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  required
                  className="checkout-input span-2"
                />
                <input 
                  type="text" 
                  placeholder="Cidade" 
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="checkout-input"
                />
                <input 
                  type="text" 
                  placeholder="CEP" 
                  value={formData.zip}
                  onChange={e => setFormData({ ...formData, zip: e.target.value })}
                  required
                  className="checkout-input"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="checkout-section-block">
              <span className="checkout-section-title">2. Forma de Pagamento</span>
              <div className="payment-selector-tabs">
                <button
                  type="button"
                  className={`payment-tab-btn ${paymentMethod === 'pix' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('pix')}
                >
                  <QrCode size={18} />
                  <span>Pix (5% OFF)</span>
                </button>
                <button
                  type="button"
                  className={`payment-tab-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard size={18} />
                  <span>Cartão de Crédito</span>
                </button>
              </div>

              {/* Pix Info */}
              {paymentMethod === 'pix' ? (
                <div className="pix-instruction-box">
                  <div className="pix-qr-mock">
                    <QrCode size={90} className="qr-icon" />
                    <span className="qr-text">QR Code Pix Instantâneo</span>
                  </div>
                  <div className="pix-key-wrap">
                    <span className="pix-key-string">00020126580014br.gov.bcb.pix0136cronos-workwear-brasil...</span>
                    <button type="button" className="pix-copy-btn" onClick={handleCopyPix}>
                      {copiedKey ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedKey ? 'Copiado!' : 'Copiar Chave'}</span>
                    </button>
                  </div>
                  <span className="pix-discount-tag">Desconto de 5% aplicado automaticamente: - R$ {pixDiscount.toFixed(2).replace('.', ',')}</span>
                </div>
              ) : (
                /* Card Form Mock */
                <div className="card-fields-grid">
                  <input type="text" placeholder="Número do Cartão" defaultValue="4532 •••• •••• 8891" className="checkout-input span-2" required />
                  <input type="text" placeholder="Nome no Cartão" defaultValue="ROBERTO SANTOS" className="checkout-input" required />
                  <div className="card-sub-grid">
                    <input type="text" placeholder="Validade (MM/AA)" defaultValue="08/29" className="checkout-input" required />
                    <input type="text" placeholder="CVV" defaultValue="742" className="checkout-input" required />
                  </div>
                  <select className="checkout-input span-2">
                    <option value="1">1x de R$ {total.toFixed(2).replace('.', ',')} (sem juros)</option>
                    <option value="2">2x de R$ {(total / 2).toFixed(2).replace('.', ',')} (sem juros)</option>
                    <option value="3">3x de R$ {(total / 3).toFixed(2).replace('.', ',')} (sem juros)</option>
                  </select>
                </div>
              )}
            </div>

            {/* Total and Submit */}
            <div className="checkout-submit-bar">
              <div className="checkout-total-col">
                <span className="checkout-total-label">Total a pagar:</span>
                <span className="checkout-total-val">R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <button type="submit" className="btn-primary checkout-pay-btn">
                <span>Confirmar Pedido</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
