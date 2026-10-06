import React from 'react';
import { Shield, Sparkles, Wind, Droplets, CheckCircle2 } from 'lucide-react';
import './FabricTechSection.css';

export default function FabricTechSection() {
  const techPillars = [
    {
      icon: <Droplets size={22} />,
      title: 'Bio-Shield™ Fluid-Repel',
      desc: 'Barreira nanotecnológica integrada às fibras que faz fluidos e líquidos hospitalares escorrerem instantaneamente sem absorção.'
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Kinetics 4-Way Stretch',
      desc: 'Elasticidade multidirecional com poliamida e elastano de alto retorno. Mobilidade ilimitada sem lacear ou deformar o tecido.'
    },
    {
      icon: <Wind size={22} />,
      title: 'Anti-Wrinkle // Zero Ferro',
      desc: 'Projetado para sair da máquina de lavar direto para o corpo. Sem vincos, sem amassar mesmo após 24 horas ininterruptas de plantão.'
    },
    {
      icon: <Shield size={22} />,
      title: 'Silvadur™ Antimicrobiano',
      desc: 'Íons de prata de liberação contínua que neutralizam 99,9% dos odores biológicos e inibem proliferação bacteriana.'
    }
  ];

  return (
    <section id="fabric-tech" className="fabric-tech-section">
      <div className="container">
        <div className="fabric-tech-layout">
          
          {/* Left Column: Macro Photography Showcase */}
          <div className="tech-visual-col">
            <div className="tech-image-frame">
              <img 
                src="/imagens/fabric-macro.jpg" 
                alt="Macro fotografia das fibras de poliamida com repelência hidrofóbica a fluidos" 
                className="tech-macro-img"
              />
              <div className="tech-image-badge">
                <span className="badge-pulse-ring"></span>
                <span className="badge-tech-name">TECNOLOGIA BIO-SHIELD™ // MACRO 100X</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Fabric Breakdown */}
          <div className="tech-content-col">
            <div className="tech-content-header">
              <span className="tech-eyebrow">A CIÊNCIA POR TRÁS DO CONFORTO</span>
              <h2 className="tech-headline">
                NÃO É APENAS UM TECIDO. É ENGENHARIA DE PLANTÃO.
              </h2>
              <p className="tech-lead-paragraph">
                Passamos meses em laboratório testando a rotina de médicos cirurgiões, residentes e enfermeiros para criar uma fibra que elimina o peso, o calor e a rigidez dos uniformes comuns.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="tech-pillars-grid">
              {techPillars.map((p, idx) => (
                <div key={idx} className="tech-pillar-card">
                  <div className="pillar-icon-wrap">
                    {p.icon}
                  </div>
                  <div className="pillar-text">
                    <h3 className="pillar-title">{p.title}</h3>
                    <p className="pillar-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Composition Banner */}
            <div className="tech-specs-ribbon">
              <div className="spec-item">
                <strong>72%</strong>
                <span>Poliamida de Alta Tenacidade</span>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item">
                <strong>21%</strong>
                <span>Rayon Sedoso Respirável</span>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item">
                <strong>7%</strong>
                <span>Elastano 4-Way Power</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
