'use client';

import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  ImageOff,
  Menu,
  MessageCircle,
  Package,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react';
import {
  buildWhatsAppUrl,
  WHATSAPP_IS_PLACEHOLDER,
  WHATSAPP_MESSAGES,
  WORKSHOP,
} from './site-data';

const faqItems = [
  {
    question: '¿Puedo tomar el taller online?',
    answer: 'Sí. La modalidad online está disponible por Q550 para Guatemala y por US$80 para personas extranjeras.',
  },
  {
    question: '¿Cuál es el precio presencial?',
    answer: 'La modalidad presencial tiene un precio de Q1,200 e incluye el kit de materiales y un diploma físico.',
  },
  {
    question: '¿Cuál es el precio online?',
    answer: 'El taller online tiene un precio de Q550 para Guatemala y de US$80 para extranjeros.',
  },
  {
    question: '¿El taller presencial incluye kit?',
    answer: 'Sí. El kit de materiales está incluido en la modalidad presencial.',
  },
  {
    question: '¿El taller online incluye diploma?',
    answer: 'Sí. La modalidad online incluye diploma digital.',
  },
  {
    question: '¿Puedo adquirir el kit si tomo la modalidad online?',
    answer: 'Sí. Puedes solicitar el kit opcional por Q550 adicionales, más el envío.',
  },
  {
    question: '¿Qué necesito para inscribirme?',
    answer: 'Para inscribirte debes enviar comprobante de pago, una fotografía de la alumna, nombre completo y nombre con el que aparece en redes sociales.',
  },
];

const steps = [
  { number: '01', title: 'Elige tu modalidad', text: 'Compara presencial y online según lo que necesitas.' },
  { number: '02', title: 'Escríbenos por WhatsApp', text: 'Cuéntanos cuál opción te interesa.' },
  { number: '03', title: 'Envía tus datos', text: 'Comparte la información solicitada para tu registro.' },
  { number: '04', title: 'Confirma tu inscripción', text: 'Completa el proceso y reserva tu participación.' },
];

function WhatsAppLink({
  message,
  children,
  className = '',
}: {
  message: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">LA</span>
          <span className="brand-copy">
            <strong>Línea artesanal</strong>
            <small>Demo de taller</small>
          </span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
          <a href="#taller" onClick={() => setMenuOpen(false)}>El taller</a>
          <a href="#modalidades" onClick={() => setMenuOpen(false)}>Modalidades</a>
          <a href="#inscripcion" onClick={() => setMenuOpen(false)}>Inscripción</a>
          <WhatsAppLink message={WHATSAPP_MESSAGES.inPerson} className="header-cta">
            Quiero inscribirme <ArrowUpRight size={15} strokeWidth={2.2} />
          </WhatsAppLink>
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-content">
          <p className="eyebrow"><span /> Belleza · Emprendimiento · Marca propia</p>
          <h1>Crea tu propia <em>línea artesanal</em></h1>
          <p className="hero-lede">{WORKSHOP.tagline}</p>
          <p className="hero-description">{WORKSHOP.description}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#modalidades">Ver modalidades <ArrowDown size={17} /></a>
            <WhatsAppLink message={WHATSAPP_MESSAGES.inPerson} className="button button-outline">
              Quiero inscribirme <ArrowUpRight size={17} />
            </WhatsAppLink>
          </div>
          <div className="hero-footnote">
            <span className="status-dot" />
            <span>Modalidad presencial y online</span>
            <span className="footnote-divider" />
            <span>Información de demo</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Espacio reservado para fotografía oficial del taller">
          <div className="hero-art-topline"><span>01 / Visual de referencia</span><ImageOff size={18} strokeWidth={1.5} /></div>
          <div className="hero-art-center">
            <span className="art-kicker">Tu idea</span>
            <span className="art-word">hecha</span>
            <span className="art-word art-word-offset">realidad</span>
          </div>
          <div className="hero-art-bottomline"><span>Espacio para fotografía oficial</span><span>✦</span></div>
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sparkle sparkle-one">✦</div>
          <div className="art-sparkle sparkle-two">✧</div>
        </div>
      </section>

      <section className="intro-section section-grid" id="taller">
        <div>
          <p className="eyebrow"><span /> El taller</p>
          <h2>De una idea a tu <em>propia línea.</em></h2>
        </div>
        <div className="intro-copy">
          <p>Un espacio para dar forma a eso que imaginas y conocer las opciones para convertirlo en una propuesta artesanal con identidad propia.</p>
          <p>Elige la modalidad que mejor se adapte a ti y da el siguiente paso con acompañamiento directo durante tu inscripción.</p>
          <a className="text-link" href="#inscripcion">Conoce el proceso <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="signal-strip" aria-label="Resumen del taller">
        <div><strong>02</strong><span>modalidades disponibles</span></div>
        <div><strong>09:00 — 16:00</strong><span>jornada presencial</span></div>
        <div><strong>Kit + diploma</strong><span>incluidos en presencial</span></div>
      </section>

      <section className="modalities-section section-padding" id="modalidades">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span /> Elige cómo vivirlo</p><h2>Dos formas de empezar.</h2></div>
          <p>La misma intención, dos maneras de hacer espacio para tu proyecto.</p>
        </div>

        <div className="modality-grid">
          <article className="modality-card card-in-person">
            <div className="card-topline"><span>01</span><span className="card-label">Presencial</span></div>
            <div className="modality-title-row"><h3>Presencial</h3><span className="featured-badge">Experiencia completa</span></div>
            <p className="modality-description">Una jornada para aprender, crear y llevarte tus materiales contigo.</p>
            <div className="price-block"><span>Inversión</span><strong>{WORKSHOP.inPerson.price}</strong></div>
            <div className="card-detail"><Clock3 size={17} /> {WORKSHOP.inPerson.schedule}</div>
            <div className="card-includes"><span className="includes-label">Incluye</span>{WORKSHOP.inPerson.includes.map((item) => <span key={item}><Check size={16} /> {item}</span>)}</div>
            <WhatsAppLink message={WHATSAPP_MESSAGES.inPerson} className="card-button card-button-light">Quiero modalidad presencial <ArrowUpRight size={17} /></WhatsAppLink>
          </article>

          <article className="modality-card card-online">
            <div className="card-topline"><span>02</span><span className="card-label">Online</span></div>
            <div className="modality-title-row"><h3>Online</h3><span className="featured-badge badge-dark">A tu ritmo</span></div>
            <p className="modality-description">Lleva el taller contigo, estés donde estés, y avanza desde tu espacio.</p>
            <div className="online-prices"><div><span>Guatemala</span><strong>{WORKSHOP.online.guatemalaPrice}</strong></div><div><span>Extranjeros</span><strong>{WORKSHOP.online.internationalPrice}</strong></div></div>
            <div className="card-includes"><span className="includes-label">Incluye</span>{WORKSHOP.online.includes.map((item) => <span key={item}><Check size={16} /> {item}</span>)}<span className="kit-note"><Package size={16} /> {WORKSHOP.online.kit}</span></div>
            <WhatsAppLink message={WHATSAPP_MESSAGES.online} className="card-button card-button-dark">Quiero modalidad online <ArrowUpRight size={17} /></WhatsAppLink>
          </article>
        </div>
      </section>

      <section className="included-section section-padding">
        <div className="included-intro">
          <p className="eyebrow eyebrow-light"><span /> Lo que recibes</p>
          <h2>Todo lo necesario para dar el primer paso.</h2>
          <p>Lo confirmado para cada modalidad, presentado de forma clara para que elijas con tranquilidad.</p>
        </div>
        <div className="included-list">
          <div className="included-row"><div className="included-icon"><Package size={22} /></div><div><span>Presencial</span><h3>Kit de materiales</h3><p>Incluido en la inversión del taller presencial.</p></div><span className="row-number">01</span></div>
          <div className="included-row"><div className="included-icon"><BadgeCheck size={22} /></div><div><span>Presencial</span><h3>Diploma físico</h3><p>Un reconocimiento para conservar tu logro.</p></div><span className="row-number">02</span></div>
          <div className="included-row"><div className="included-icon"><FileCheck2 size={22} /></div><div><span>Online</span><h3>Diploma digital</h3><p>Recibe tu diploma en formato digital.</p></div><span className="row-number">03</span></div>
          <div className="included-row"><div className="included-icon"><Sparkles size={22} /></div><div><span>Online</span><h3>Kit opcional disponible</h3><p>Q550 adicionales más envío.</p></div><span className="row-number">04</span></div>
        </div>
      </section>

      <section className="process-section section-padding" id="inscripcion">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span /> Inscripción</p><h2>Empieza en cuatro pasos.</h2></div>
          <p>Cuando tengas clara tu modalidad, escríbenos para completar tu registro.</p>
        </div>
        <div className="steps-grid">{steps.map((step) => <div className="step-card" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div>
        <div className="requirements-box">
          <div className="requirements-heading"><UserRound size={21} /><div><span>Datos solicitados</span><h3>Tenlos listos para tu inscripción</h3></div></div>
          <div className="requirements-list">{WORKSHOP.requirements.map((requirement) => <span key={requirement}><Check size={15} /> {requirement}</span>)}</div>
        </div>
      </section>

      <section className="gallery-section section-padding">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span /> Espacio para tu historia</p><h2>Aquí podrían vivir tus resultados.</h2></div>
          <p>Este bloque está listo para recibir trabajos, alumnas y resultados reales cuando estén disponibles.</p>
        </div>
        <div className="placeholder-gallery">
          <div className="gallery-card gallery-tall"><div><ImageOff size={24} /><span>Fotografía oficial</span><strong>Proceso</strong></div><small>Placeholder demostrativo</small></div>
          <div className="gallery-card gallery-wide"><div><ImageOff size={24} /><span>Fotografía oficial</span><strong>Producto</strong></div><small>Placeholder demostrativo</small></div>
          <div className="gallery-card gallery-small"><div><ImageOff size={24} /><span>Fotografía oficial</span><strong>Alumnas</strong></div><small>Placeholder demostrativo</small></div>
        </div>
      </section>

      <section className="faq-section section-padding">
        <div className="faq-layout">
          <div className="faq-intro"><p className="eyebrow"><span /> Preguntas frecuentes</p><h2>Lo esencial, <em>claro.</em></h2><p>Si todavía tienes dudas sobre las modalidades o el proceso, aquí encontrarás la información confirmada.</p><WhatsAppLink message={WHATSAPP_MESSAGES.inPerson} className="text-link">Consultar por WhatsApp <ArrowUpRight size={16} /></WhatsAppLink></div>
          <div className="faq-list">{faqItems.map((item, index) => { const isOpen = openFaq === index; return <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span>{item.question}</span><ChevronDown size={19} /></button><div className="faq-answer" aria-hidden={!isOpen}><p>{item.answer}</p></div></div>; })}</div>
        </div>
      </section>

      <section className="final-cta section-padding">
        <div className="final-cta-orbit" />
        <div className="final-cta-content">
          <p className="eyebrow eyebrow-light"><span /> El siguiente paso</p>
          <h2>Tu propia línea<br /><em>puede empezar aquí.</em></h2>
          <p>Selecciona la modalidad que más te convenga y consulta directamente por WhatsApp para completar tu inscripción.</p>
          <div className="final-actions"><WhatsAppLink message={WHATSAPP_MESSAGES.inPerson} className="button button-cream">Presencial <ArrowUpRight size={17} /></WhatsAppLink><WhatsAppLink message={WHATSAPP_MESSAGES.online} className="button button-transparent">Online <ArrowUpRight size={17} /></WhatsAppLink></div>
          {WHATSAPP_IS_PLACEHOLDER && <span className="contact-note"><MessageCircle size={14} /> Número de WhatsApp por confirmar para la versión final</span>}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-mark">LA</span><span>Línea artesanal</span></div>
        <p>Esta página es una propuesta visual demostrativa. Fotografías, textos, colores, datos de contacto y contenido final pueden adaptarse según la identidad del negocio.</p>
        <div className="footer-meta"><span>© {new Date().getFullYear()} Demo comercial</span><span className="footer-social"><Sparkles size={15} /> Redes sociales por confirmar</span></div>
      </footer>

      <WhatsAppLink message={WHATSAPP_MESSAGES.inPerson} className="floating-whatsapp" aria-label="Consultar por WhatsApp"><MessageCircle size={22} /></WhatsAppLink>
    </main>
  );
}
