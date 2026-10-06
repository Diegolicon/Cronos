import React from 'react';
import { REVIEWS } from '../data/products';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import './CommunityReviews.css';

export default function CommunityReviews() {
  return (
    <section id="reviews-section" className="community-reviews-section">
      <div className="container">
        
        {/* Header */}
        <div className="reviews-header-block">
          <span className="reviews-eyebrow">APROVADO POR QUEM SALVA VIDAS</span>
          <h2 className="reviews-main-title">
            DEPOIMENTOS DE MÉDICOS E ENFERMEIROS
          </h2>
          <div className="overall-score-pill">
            <div className="stars-group">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#121417" color="#121417" />
              ))}
            </div>
            <span className="score-text">4.97 de 5 estrelas em mais de 2.800 avaliações</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-cards-grid">
          {REVIEWS.map(rev => (
            <div key={rev.id} className="review-card-item">
              <div className="card-top-row">
                <div className="card-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#121417" color="#121417" />
                  ))}
                </div>
                <div className="verified-badge">
                  <CheckCircle2 size={13} className="verified-icon" />
                  <span>Compra Verificada</span>
                </div>
              </div>

              <h3 className="review-title">"{rev.title}"</h3>
              <p className="review-body">{rev.body}</p>

              <div className="review-author-box">
                <strong className="author-name">{rev.name}</strong>
                <span className="author-role">{rev.role}</span>
                <span className="author-product">Usa: {rev.product}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
