import { useEffect, useState } from 'react'
import { Instagram, Phone, Mail, Play, ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ========== NAVEGACIÓN ========== */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 py-3'
          : 'bg-transparent border-b border-white/20 py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center">

            {/* Logo */}
            <div className="flex-1">
              <button
                onClick={() => scrollToSection('inicio')}
                className={`animate-navbar-logo flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full font-display font-bold text-sm tracking-wide transition-all duration-300 shrink-0 ${
                  isScrolled
                    ? 'bg-accent-600 text-white hover:bg-accent-700'
                    : 'bg-white text-accent-900 hover:bg-white/90'
                }`}
              >
                <img
                  src="/logo.jpg"
                  alt="Logo Grupo Zambra"
                  className="h-7 w-7 rounded-full object-cover"
                />
                Grupo Zambra
              </button>
            </div>

            {/* Nav Desktop — centrado */}
            <div className={`animate-navbar-center hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${
              isScrolled ? 'bg-accent-600' : 'bg-white'
            }`}>
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'sobre-nosotros', label: 'Nosotros' },
                { id: 'galeria', label: 'Galería' },
                { id: 'contacto', label: 'Contacto' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-1.5 font-display font-semibold text-sm rounded-full transition-all duration-300 ${
                    isScrolled
                      ? 'text-white hover:bg-white/15'
                      : 'text-accent-900 hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Derecha: botón con flecha */}
            <div className="animate-navbar-right flex-1 hidden md:flex items-center justify-end">
              <button
                onClick={() => scrollToSection('contacto')}
                className={`flex items-center gap-2 pl-5 pr-2 py-2 font-display font-semibold text-sm rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-accent-600 text-white hover:bg-accent-700'
                    : 'bg-white text-accent-900 hover:bg-white/90'
                }`}
              >
                Contrátanos
                <span className={`flex items-center justify-center w-6 h-6 rounded-full transition-colors ${
                  isScrolled ? 'bg-white/20' : 'bg-accent-900/10'
                }`}>
                  <ArrowRight size={13} />
                </span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-accent-900' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-accent-100 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'sobre-nosotros', label: 'Sobre Nosotros' },
                { id: 'galeria', label: 'Galería' },
                { id: 'contacto', label: 'Contacto' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-3 font-display font-medium text-accent-800 hover:text-accent-900 border-b border-accent-50 last:border-0"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contacto')}
                className="w-full mt-3 px-5 py-3 bg-accent-600 text-white font-display font-semibold rounded-full flex items-center justify-center gap-2"
              >
                Contrátanos
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                  <ArrowRight size={13} />
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section
        id="inicio"
        className="relative h-[45vh] min-h-[315px] md:h-[80vh] lg:h-screen lg:min-h-[800px] overflow-hidden"
      >
        {/* Capa 1: Foto de fondo completa */}
        <div className="absolute inset-0 z-0">
          <img
            src="/portada-bg.webp"
            alt="Grupo Zambra 2.0"
            className="w-full h-full object-cover animate-bg-zoom"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Capa 2: Texto grande detrás de las personas */}
        <div className="absolute inset-x-0 top-24 md:top-16 z-10 flex items-start justify-center pointer-events-none select-none">
          <h1
            className="font-display font-black text-white/75 text-center leading-none tracking-tighter hero-title whitespace-nowrap"
            style={{ fontSize: 'clamp(4rem, 19vw, 18rem)' }}
          >
            {'ZAMBRA'.split('').map((letter, i) => (
              <span
                key={i}
                className="hero-letter"
                style={{ animationDelay: `${850 + i * 80}ms` }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Capa 3: Personas en primer plano (PNG fondo transparente) */}
        {/* ⚠️ Crea /public/portada-fg.png con remove.bg u otra herramienta */}
        <div className="absolute inset-x-0 bottom-0 md:inset-0 z-20 animate-fg-rise">
          <img
            src="/portada-fg.png"
            alt=""
            aria-hidden="true"
            className="w-full origin-bottom scale-[1.3] md:scale-100 md:h-full md:object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
        </div>

        {/* Gradiente legibilidad — encima de personas */}
        <div className="absolute inset-x-0 bottom-0 h-36 z-[25] bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

        {/* Capa 4: Texto y botones */}
        <div className="absolute bottom-3 md:bottom-10 left-0 right-0 z-30 px-8 sm:px-12 md:px-16 max-w-6xl mx-auto">

          {/* Tag — solo desktop */}
          <div className="hidden md:flex items-center gap-3 mb-4 animate-hero-subtitle">
            <span className="w-8 h-px bg-white/60" />
            <span className="font-display text-xs tracking-[0.2em] uppercase text-white/70">
              Música en Vivo
            </span>
          </div>

          {/* Heading principal */}
          <h1 className="font-display font-normal text-white leading-tight mb-0 md:mb-6 animate-hero-title hero-title"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.0em' }}
          >
            Música para tu<br />
            Evento Especial
          </h1>

          {/* Botones — solo desktop */}
          <div className="hidden md:flex flex-wrap gap-3 animate-hero-buttons">
            <button
              onClick={() => scrollToSection('galeria')}
              className="flex items-center gap-2 pl-5 pr-1.5 py-1.5 bg-white text-accent-900 font-display font-medium text-sm rounded-full hover:bg-white/90 transition-colors"
            >
              Ver Videos
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent">
                <Play size={13} className="text-accent-900" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="flex items-center gap-2 pl-5 pr-1.5 py-1.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-display font-medium text-sm rounded-full hover:bg-white/25 transition-colors"
            >
              Contrátanos
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
                <ArrowRight size={13} className="text-white" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ========== SOBRE NOSOTROS ========== */}
      <section id="sobre-nosotros" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 font-display font-semibold text-sm rounded-full mb-4">
              Conócenos
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-accent-900 mb-4">
              Sobre Nosotros
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-body text-lg text-accent-800 leading-relaxed">
                <span className="font-display font-bold text-accent-600 text-xl">Grupo Zambra 2.0</span> es mucho más que un grupo musical.
                Somos artistas apasionados con una amplia trayectoria en el mundo del entretenimiento,
                especializados en crear momentos únicos que perduran en la memoria.
              </p>
              <p className="font-body text-lg text-accent-700 leading-relaxed">
                Nuestro repertorio fusiona los clásicos más queridos con los éxitos del momento,
                adaptándonos perfectamente a los gustos de cada cliente. Desde bodas íntimas hasta
                grandes eventos corporativos.
              </p>
              <p className="font-body text-lg text-accent-700 leading-relaxed">
                En Grupo Zambra 2.0 entendemos que <span className="text-accent-600 font-semibold">la música es el alma de cualquier celebración</span>.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                {[
                  { number: '10+', label: 'Años de experiencia' },
                  { number: '500+', label: 'Eventos realizados' },
                  { number: '100%', label: 'Satisfacción' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="font-display font-black text-3xl text-accent-600">{stat.number}</div>
                    <div className="font-body text-sm text-accent-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elegant-lg">
                <img
                  src="/galeria1.webp"
                  alt="Grupo Zambra en acción"
                  className="w-full h-80 lg:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-accent-300 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALERÍA ========== */}
      <section id="galeria" className="py-20 md:py-28 bg-accent-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent font-display font-semibold text-sm rounded-full mb-4">
              Nuestro Trabajo
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Galería
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4" />
            <p className="font-body text-accent-300 max-w-xl mx-auto">
              Descubre la energía y profesionalismo que aportamos a cada evento
            </p>
          </div>

          {/* Videos */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Play className="w-5 h-5 text-accent" />
              <h3 className="font-display font-bold text-xl text-white">
                Videos en Directo
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { id: 'm11u6u58gCo', title: 'Actuación en vivo' },
                { id: 'VdOtZ0TS53M', title: 'Concierto especial' },
              ].map((video) => (
                <div key={video.id} className="video-container aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fotos */}
          <div>
            <h3 className="font-display font-bold text-xl text-white text-center mb-8">
              Momentos Capturados
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'galeria1.webp',
                'galeria3.webp',
                'galeria4.webp',
                'galeria5.webp',
                'galeria6.webp',
                'galeria7.jpg',
                'galeria8.jpg',
                'galeria9.jpg',
                'galeria11.jpg',
                'galeria12.jpg',
                'galeria13.jpg',
                'galeria14.jpg',
              ].map((img, i) => (
                <div key={img} className="group relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src={`/${img}`}
                    alt={`Grupo Zambra 2.0 - Momento ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent transition-all duration-300 group-hover:shadow-[inset_0_0_30px_rgba(251,191,36,0.3)]" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-accent/40 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACTO ========== */}
      <section id="contacto" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 font-display font-semibold text-sm rounded-full mb-4">
              Hablemos
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-accent-900 mb-4">
              Contacto
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4" />
            <p className="font-body text-lg text-accent-600 max-w-xl mx-auto">
              ¿Listo para hacer de tu evento algo especial? Contáctanos y hablemos de tu celebración
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Instagram */}
            <a
              href="https://instagram.com/grupozambra"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-8 bg-white rounded-2xl border border-accent-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-pink-500/30">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-accent-900 mb-2">Instagram</h3>
                <p className="font-body text-accent-600 text-sm mb-4 leading-relaxed">
                  Síguenos para ver nuestras últimas actuaciones
                </p>
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-pink-600 font-display font-semibold rounded-full text-sm">
                  @grupozambra
                </span>
              </div>
            </a>

            {/* Teléfono */}
            <a
              href="tel:+34654085517"
              className="relative p-8 bg-white rounded-2xl border border-accent-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent-500/30">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-accent-900 mb-2">Teléfono</h3>
                <p className="font-body text-accent-600 text-sm mb-4 leading-relaxed">
                  Llámanos para consultas y reservas
                </p>
                <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 font-display font-semibold rounded-full text-sm">
                  654 085 517
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:contratacioneszambra@gmail.com"
              className="relative p-8 bg-white rounded-2xl border border-accent-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-accent to-amber-300 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent/30">
                  <Mail className="w-8 h-8 text-accent-900" />
                </div>
                <h3 className="font-display font-bold text-xl text-accent-900 mb-2">Email</h3>
                <p className="font-body text-accent-600 text-sm mb-4 leading-relaxed">
                  Escríbenos para más información
                </p>
                <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-700 font-display font-semibold rounded-full text-xs">
                  contratacioneszambra@gmail.com
                </span>
              </div>
            </a>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mt-12">
            <p className="font-body text-accent-500 mb-4">¿Prefieres WhatsApp?</p>
            <a
              href="https://wa.me/34654085517?text=Hola,%20me%20gustaría%20información%20sobre%20contratar%20a%20Grupo%20Zambra%202.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white font-display font-bold rounded-lg hover:bg-green-600 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-accent-950 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.jpg"
                  alt="Logo Grupo Zambra"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-accent/30"
                />
                <span className="font-display font-bold text-lg text-white">
                  Zambra 2.0
                </span>
              </div>
              <p className="font-body text-accent-400 text-sm leading-relaxed">
                Música en vivo para eventos inolvidables. Bodas, fiestas corporativas
                y todo tipo de celebraciones.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display font-bold text-white mb-4">Enlaces</h4>
              <div className="space-y-2">
                {['Inicio', 'Sobre Nosotros', 'Galería', 'Contacto'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="block font-body text-sm text-accent-400 hover:text-accent transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display font-bold text-white mb-4">Síguenos</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/grupozambra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a href="tel:+34654085517" className="social-icon" aria-label="Teléfono">
                  <Phone size={18} />
                </a>
                <a href="mailto:contratacioneszambra@gmail.com" className="social-icon" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-accent-800 mb-6" />

          <p className="font-body text-accent-500 text-sm text-center">
            © {new Date().getFullYear()} Grupo Zambra 2.0. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Sticky CTA Mobile */}
      <a
        href="tel:+34654085517"
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 px-5 py-3 bg-accent-600 text-white font-display font-bold rounded-full shadow-elegant-lg hover:bg-accent-700 transition-colors"
        aria-label="Llamar ahora"
      >
        <Phone size={18} />
        <span>Llamar</span>
      </a>
    </div>
  )
}

export default App
