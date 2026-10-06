import React from 'react';
import { STORIES, CATEGORIES } from '../data/products';
import './CategoryStories.css';

export default function CategoryStories({ 
  activeCategory, 
  onSelectCategory,
  onSelectGender 
}) {
  const handleStoryClick = (story) => {
    if (story.filterGender) onSelectGender(story.filterGender);
    if (story.filterCategory) onSelectCategory(story.filterCategory);
    
    const el = document.getElementById('products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="category-stories-section">
      <div className="container">
        {/* 1. Mobile Instagram-Style Circular Stories */}
        <div className="stories-scroll-track">
          {STORIES.map(story => (
            <button 
              key={story.id} 
              className="story-circle-item"
              onClick={() => handleStoryClick(story)}
            >
              <div className="story-ring-wrap">
                <img src={story.image} alt={story.title} className="story-avatar-img" />
                {story.badge && (
                  <span className="story-micro-badge">{story.badge}</span>
                )}
              </div>
              <span className="story-title-label">{story.title}</span>
            </button>
          ))}
        </div>

        {/* 2. Desktop Category Filter Bar */}
        <div className="desktop-category-tabs-bar">
          <span className="category-browse-label">Explorar por Categoria:</span>
          <div className="category-pills-list">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`category-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <span>{cat.name}</span>
                <span className="cat-count">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
