import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Mail, Check } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer-component">
      {/* Newsletter Pre-Footer (FIGS Style Discount Capture) */}
      <div className="footer-newsletter-banner">
        <div className="container newsletter-container">
          <div className="newsletter-text-box">
            <span className="newsletter-tag">CLUBE CRONOS WORKWEAR</span>
            <h3 className="newsletter-headline">RECEBA 10% OFF NO SEU PRIMEIRO PEDIDO</h3>
            <p className="newsletter-sub">Cadastre seu e-mail e receba drops exclusivos, reposições de cores e vantagens clínicas.</p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Digite seu e-mail profissional" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="btn-primary newsletter-submit-btn">
              {subscribed ? <Check size={18} /> : <span>Cadastrar</span>}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container footer-main-container">
        <div className="footer-columns-grid">
          
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <div className="footer-brand-logo">
              <span className="footer-brand-name">CRONOS</span>
              <span className="footer-brand-sub">WORKWEAR</span>
            </div>
            <p className="footer-brand-desc">
              O padrão ouro em vestuário cirúrgico de alta performance. Desenvolvido para a realidade do plantão hospitalar.
            </p>
            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 1: Coleções */}
          <div className="footer-col">
            <h4 className="footer-col-title">COLEÇÕES</h4>
            <ul className="footer-links-list">
              <li><a href="#products-section">Scrubs Femininos</a></li>
              <li><a href="#products-section">Scrubs Masculinos</a></li>
              <li><a href="#products-section">Conjuntos Completos</a></li>
              <li><a href="#products-section">Calças Jogger</a></li>
              <li><a href="#products-section">Coletes On-Duty</a></li>
            </ul>
          </div>

          {/* Col 2: Tecnologia */}
          <div className="footer-col">
            <h4 className="footer-col-title">TECNOLOGIA</h4>
            <ul className="footer-links-list">
              <li><a href="#fabric-tech">Tecido Bio-Shield™</a></li>
              <li><a href="#fabric-tech">Kinetics 4-Way Stretch</a></li>
              <li><a href="#fabric-tech">Repelência a Fluidos</a></li>
              <li><a href="#fabric-tech">Guia de Lavagem</a></li>
            </ul>
          </div>

          {/* Col 3: Suporte */}
          <div className="footer-col">
            <h4 className="footer-col-title">AJUDA & SUPORTE</h4>
            <ul className="footer-links-list">
              <li><a href="#">Trocas e Devoluções (30 Dias)</a></li>
              <li><a href="#">Tabela de Medidas</a></li>
              <li><a href="#">Prazos de Entrega</a></li>
              <li><a href="#">Pedidos para Clínicas e Hospitais</a></li>
              <li><a href="#">Fale com um Especialista</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Cronos Workwear Brasil. Todos os direitos reservados.
          </p>
          <div className="footer-payments-badges">
            <span className="pay-tag">PIX (5% OFF)</span>
            <span className="pay-tag">CARTÃO EM ATÉ 3X</span>
            <span className="pay-tag">BOLETO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
