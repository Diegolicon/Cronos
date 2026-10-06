import React from 'react';
import { ArrowRight, Sparkles, Shield, RefreshCw, Truck } from 'lucide-react';
import './HeroBanner.css';

export default function HeroBanner({ onSelectGender, onExplore }) {
  return (
    <section className="hero-banner-section">
      <div className="hero-banner-viewport">
        {/* Responsive Dual Background: Wide on Desktop, Portrait on Mobile */}
        <picture className="hero-media-wrap">
          <source media="(max-width: 768px)" srcSet="/imagens/duo-mobile.jpg" />
          <img 
            src="/imagens/hero-team.jpg" 
            alt="Profissionais de saúde vestindo scrubs Cronos Workwear" 
            className="hero-media-img"
          />
        </picture>

        {/* Cinematic Gradient Overlay */}
        <div className="hero-overlay-scrim"></div>

        {/* Hero Content Box */}
        <div className="container hero-content-container">
          <div className="hero-editorial-box">
            <div className="hero-eyebrow-pill">
              <span className="eyebrow-pulse"></span>
              <span>NOVA COLEÇÃO · DISPONÍVEL</span>
            </div>

            <h1 className="hero-editorial-title">
              O PADRÃO OURO DO VESTUÁRIO MÉDICO.
            </h1>

            <p className="hero-editorial-desc">
              Desenvolvido com bio-poliamida ultra-respirável, elasticidade 4-way stretch e barreira antimicrobiana. Feito para aguentar 24 horas de plantão sem amassar.
            </p>

            {/* FIGS Dual Gender CTA Buttons */}
            <div className="hero-cta-group">
              <button 
                className="btn-primary hero-dual-btn"
                onClick={() => { onSelectGender('women'); onExplore(); }}
              >
                <span>Comprar Feminino</span>
                <ArrowRight size={15} />
              </button>
              
              <button 
                className="btn-secondary hero-dual-btn hero-secondary-cta"
                onClick={() => { onSelectGender('men'); onExplore(); }}
              >
                <span>Comprar Masculino</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Ribbon (Similar to FIGS Value Bar) */}
      <div className="hero-value-ribbon">
        <div className="container ribbon-container">
          <div className="ribbon-item">
            <RefreshCw size={17} className="ribbon-icon" />
            <div className="ribbon-text">
              <strong>1ª Troca 100% Grátis</strong>
              <span>30 dias para testar no seu plantão</span>
            </div>
          </div>

          <div className="ribbon-divider"></div>

          <div className="ribbon-item">
            <Sparkles size={17} className="ribbon-icon" />
            <div className="ribbon-text">
              <strong>Kinetics 4-Way Stretch</strong>
              <span>Elasticidade máxima sem deformar</span>
            </div>
          </div>

          <div className="ribbon-divider"></div>

          <div className="ribbon-item">
            <Shield size={17} className="ribbon-icon" />
            <div className="ribbon-text">
              <strong>Repele Fluidos</strong>
              <span>Barreira hidrofóbica Bio-Shield™</span>
            </div>
          </div>

          <div className="ribbon-divider"></div>

          <div className="ribbon-item">
            <Truck size={17} className="ribbon-icon" />
            <div className="ribbon-text">
              <strong>Frete Grátis</strong>
              <span>Em compras acima de R$ 350</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
