import { useState, useEffect } from 'react'
import {
  Wrench, Settings, Ruler, ShieldCheck, Sparkles, Snowflake,
  BadgeCheck, Users, Cpu, Hammer, Award, ClipboardList,
  Home, Building2, UtensilsCrossed, HeartPulse, ShoppingBag, Factory,
  Phone, MessageCircle, MapPin, X, Globe, Menu
} from 'lucide-react'
import './App.css'

// Bilingual content dictionary
const content = {
  ar: {
    companyName: 'قمة العارض للتكييف',
    nav: {
      services: 'الخدمات',
      features: 'لماذا نحن',
      about: 'من نحن',
      clients: 'عملاؤنا',
      location: 'موقعنا',
      contact: 'تواصل معنا'
    },
    hero: {
      badge: 'خبرة 28+ سنة في مجال التكييف',
      tagline: 'حلول تكييف متكاملة بجودة عالمية وإدارة سعودية متخصصة',
      cta1: 'اطلب عرض سعر',
      cta2: 'تواصل معنا'
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'نقدم حلول تكييف شاملة ومتكاملة لجميع احتياجاتك',
      items: [
        { title: 'توريد وتركيب جميع أنواع التكييف', desc: 'مخفي، باكيج، كاسيت، سبيلت، شيلر' },
        { title: 'تصنيع وتوريد وتركيب مجاري الهواء', desc: 'دكت سابك دائري ومربع وفوم' },
        { title: 'دراسة وتصميم مجاري الهواء', desc: 'حسب المخطط الهندسي' },
        { title: 'تأسيس وتمديد النحاس', desc: 'من شركة مولر الأمريكية مع عزل خطين' },
        { title: 'الصيانة الطارئة والدورية', desc: 'مع عقود سنوية شاملة' },
        { title: 'تنظيف وتعقيم الدكت', desc: 'بتقنيات حديثة ومتطورة' }
      ]
    },
    features: {
      title: 'لماذا نحن؟',
      subtitle: 'نتميز بخبرة طويلة وجودة عالية وخدمة متميزة',
      items: [
        { title: 'خبرة 28+ سنة', desc: 'خبرة طويلة في مجال التكييف والتبريد' },
        { title: 'إدارة سعودية متخصصة', desc: 'فريق إداري سعودي محترف ومتخصص' },
        { title: 'تقنيات حديثة ومتطورة', desc: 'أحدث المعدات والتقنيات في السوق' },
        { title: 'فريق فنيين متخصصين', desc: 'فنيون محترفون ومدربون على أعلى مستوى' },
        { title: 'جودة عالية', desc: 'مواد من شركات عالمية معتمدة' },
        { title: 'عقود صيانة شاملة', desc: 'عقود صيانة سنوية شاملة ومتابعة مستمرة' }
      ]
    },
    about: {
      title: 'من نحن',
      description: 'قمة العارض للتكييف هي مؤسسة رائدة في مجال التكييف والتبريد، بخبرة تتجاوز 28 عاماً. نحن متخصصون في توريد وتركيب جميع أنواع أنظمة التكييف، بالإضافة إلى تصميم وتنفيذ مجاري الهواء والصيانة الشاملة. نفتخر بإدارة سعودية متخصصة وفريق فني محترف يضمن تقديم خدمات عالية الجودة تلبي جميع احتياجات عملائنا في مختلف القطاعات.',
      stats: [
        { number: '+28', label: 'سنة خبرة' },
        { number: '100%', label: 'رضا العملاء' },
        { number: '+1000', label: 'مشروع منجز' }
      ]
    },
    clients: {
      title: 'عملاؤنا',
      subtitle: 'نخدم جميع القطاعات بجودة واحترافية عالية',
      items: [
        'الفلل والمنازل',
        'المكاتب والشركات',
        'المطاعم',
        'المنشآت الصحية',
        'المراكز التجارية',
        'المنشآت الصناعية'
      ]
    },
    management: {
      title: 'إدارة سعودية متخصصة',
      description: 'إدارة سعودية بخبرة ميدانية وجودة تنفيذ عالية'
    },
    location: {
      title: 'موقعنا',
      address: 'قمة العارض للتكييف, طريق الملك عبدالعزيز، حي العارض  الرياض 13341'
    },
    footer: {
      tagline: 'خبرة 28+ سنة في مجال التكييف والتبريد',
      quickLinks: 'روابط سريعة',
      contact: 'اتصل بنا',
      contactDesc: 'للاستفسارات والاستشارات',
      copyright: '© 2024 قمة العارض للتكييف. جميع الحقوق محفوظة.'
    },
    modal: {
      title: 'تواصل معنا',
      call: 'اتصل بنا',
      whatsapp: 'واتساب',
      close: 'إغلاق'
    }
  },
  en: {
    companyName: 'Qimah Al-Arid Air Conditioning',
    nav: {
      services: 'Services',
      features: 'Why Us',
      about: 'About',
      clients: 'Clients',
      location: 'Location',
      contact: 'Contact Us'
    },
    hero: {
      badge: '28+ years of expertise in AC & cooling solutions',
      tagline: 'Integrated AC solutions with global quality and specialized Saudi management',
      cta1: 'Request a Quote',
      cta2: 'Contact Us'
    },
    services: {
      title: 'Services',
      subtitle: 'Comprehensive and integrated AC solutions for all your needs',
      items: [
        { title: 'Supply & install all AC types', desc: 'Concealed, package, cassette, split, desert cooler' },
        { title: 'Manufacture/supply/install air ducts', desc: 'SABIC duct round/square/foam' },
        { title: 'Duct study & design', desc: 'Based on engineering drawings' },
        { title: 'Copper piping', desc: 'By Mueller USA with double-line insulation' },
        { title: 'Emergency & periodic maintenance', desc: 'Plus annual contracts' },
        { title: 'Duct cleaning & sanitization', desc: 'With modern technology' }
      ]
    },
    features: {
      title: 'Why Us?',
      subtitle: 'We excel with extensive experience, high quality, and outstanding service',
      items: [
        { title: '28+ years experience', desc: 'Long experience in AC & cooling' },
        { title: 'Specialized Saudi management', desc: 'Professional and specialized Saudi management team' },
        { title: 'Modern advanced technology', desc: 'Latest equipment and technology in the market' },
        { title: 'Skilled technician team', desc: 'Professional and highly trained technicians' },
        { title: 'High quality', desc: 'Materials from certified global companies' },
        { title: 'Comprehensive maintenance contracts', desc: 'Annual maintenance contracts with continuous follow-up' }
      ]
    },
    about: {
      title: 'About Us',
      description: 'Qimah Al-Arid Air Conditioning is a leading company in the AC & cooling field, established over 28 years ago. We specialize in supplying and installing all types of AC systems, in addition to designing and implementing air ducts and comprehensive maintenance. We pride ourselves on specialized Saudi management and a professional technical team that ensures high-quality services that meet all our clients\' needs across various sectors.',
      stats: [
        { number: '28+', label: 'Years Experience' },
        { number: '100%', label: 'Customer Satisfaction' },
        { number: '1000+', label: 'Completed Projects' }
      ]
    },
    clients: {
      title: 'Our Clients',
      subtitle: 'We serve all sectors with high quality and professionalism',
      items: [
        'Villas & Homes',
        'Offices & Companies',
        'Restaurants',
        'Healthcare Facilities',
        'Shopping Centers',
        'Industrial Facilities'
      ]
    },
    management: {
      title: 'Specialized Saudi Management',
      description: 'Saudi management with hands-on expertise and high execution quality'
    },
    location: {
      title: 'Our Location',
      address: 'Qimah Al-Arid Air Conditioning, King Abdulaziz Road, Al-Arid District, Riyadh 13341, Saudi Arabia'
    },
    footer: {
      tagline: '28+ years of expertise in AC & cooling',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      contactDesc: 'For inquiries and consultations',
      copyright: '© 2024 Qimah Al-Arid Air Conditioning. All rights reserved.'
    },
    modal: {
      title: 'Contact Us',
      call: 'Call Us',
      whatsapp: 'WhatsApp',
      close: 'Close'
    }
  }
}

// Icon mappings
const serviceIcons = [Snowflake, Wrench, Settings, Ruler, ShieldCheck, Sparkles]
const featureIcons = [BadgeCheck, Users, Cpu, Hammer, Award, ClipboardList]
const clientIcons = [Home, Building2, UtensilsCrossed, HeartPulse, ShoppingBag, Factory]

// Contact information
const contactInfo = {
  phone: '+966539799771',
  whatsapp: '966539799771',
  whatsappMessages: {
    ar: 'السلام عليكم، أريد الاستفسار عن خدماتكم',
    en: 'Hello, I would like to inquire about your services'
  }
}

function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>(() => {
    const saved = localStorage.getItem('language') as 'ar' | 'en' | null
    return saved || 'ar'
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const t = content[language]

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
    localStorage.setItem('language', language)
  }, [language])

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const sections = ['services', 'features', 'about', 'clients', 'location']
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId)
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId)
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar')
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) closeModal()
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (isModalOpen && (e.target as HTMLElement).classList.contains('modal-overlay')) {
        closeModal()
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isModalOpen])

  const handleCall = () => {
    window.location.href = `tel:${contactInfo.phone}`
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(contactInfo.whatsappMessages[language])
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank')
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false)
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const targetId = href.slice(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  return (
    <div className="app">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-container">
          <button onClick={toggleLanguage} className="lang-toggle lang-toggle-mobile" aria-label="Toggle language">
            <Globe size={20} />
            <span>{language === 'ar' ? 'EN' : 'AR'}</span>
          </button>
          <div className="logo">
            <img src="/qimah-logo.png" alt={t.companyName} className="logo-image" />
            <span className="logo-text">{t.companyName}</span>
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`nav-links ${isMobileMenuOpen ? 'nav-links-open' : ''}`}>
            <a href="#services" onClick={handleNavClick} className={activeSection === 'services' ? 'active' : ''}>{t.nav.services}</a>
            <a href="#features" onClick={handleNavClick} className={activeSection === 'features' ? 'active' : ''}>{t.nav.features}</a>
            <a href="#about" onClick={handleNavClick} className={activeSection === 'about' ? 'active' : ''}>{t.nav.about}</a>
            <a href="#clients" onClick={handleNavClick} className={activeSection === 'clients' ? 'active' : ''}>{t.nav.clients}</a>
            <a href="#location" onClick={handleNavClick} className={activeSection === 'location' ? 'active' : ''}>{t.nav.location}</a>
            <button onClick={toggleLanguage} className="lang-toggle lang-toggle-desktop" aria-label="Toggle language">
              <Globe size={20} />
              <span>{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button onClick={openModal} className="cta-button">{t.nav.contact}</button>
          </nav>
        </div>
      </header>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-content">
            <button onClick={closeModal} className="modal-close" aria-label={t.modal.close}>
              <X size={24} />
            </button>
            <h2 id="modal-title" className="modal-title">{t.modal.title}</h2>
            <div className="modal-buttons">
              <button onClick={handleCall} className="modal-btn modal-btn-call">
                <Phone size={24} />
                <span>{t.modal.call}</span>
              </button>
              <button onClick={handleWhatsApp} className="modal-btn modal-btn-whatsapp">
                <MessageCircle size={24} />
                <span>{t.modal.whatsapp}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-badge">{t.hero.badge}</div>
          <h1 className="hero-title">{t.companyName}</h1>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">{t.hero.cta1}</a>
            <button onClick={openModal} className="btn btn-secondary">{t.hero.cta2}</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-subtitle">{t.services.subtitle}</p>
          </div>
          <div className="services-grid">
            {t.services.items.map((service, index) => {
              const Icon = serviceIcons[index]
              return (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                </div>
              )
            })}
          </div>
          
          {/* Brand Logos Marquee */}
          <div className="brand-logos-container">
            <div className="brand-logos-scroll">
              <div className="brand-logos-track">
                <img src="/Midea-Logo.png" alt="Midea" className="brand-logo" />
                <img src="/LG-logo.png" alt="LG" className="brand-logo" />
                <img src="/gree-logo.png" alt="Gree" className="brand-logo" />
                <img src="/basic-logo.png" alt="Basic" className="brand-logo" />
                <img src="/fisher-logo.png" alt="Fisher" className="brand-logo brand-logo-fisher" />
                {/* Duplicate for seamless loop */}
                <img src="/Midea-Logo.png" alt="Midea" className="brand-logo" />
                <img src="/LG-logo.png" alt="LG" className="brand-logo" />
                <img src="/gree-logo.png" alt="Gree" className="brand-logo" />
                <img src="/basic-logo.png" alt="Basic" className="brand-logo" />
                <img src="/fisher-logo.png" alt="Fisher" className="brand-logo brand-logo-fisher" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.features.title}</h2>
            <p className="section-subtitle">{t.features.subtitle}</p>
          </div>
          <div className="features-grid">
            {t.features.items.map((feature, index) => {
              const Icon = featureIcons[index]
              return (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">{t.about.title}</h2>
              <p className="about-description">{t.about.description}</p>
              <div className="stats-grid">
                {t.about.stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="section clients-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.clients.title}</h2>
            <p className="section-subtitle">{t.clients.subtitle}</p>
          </div>
          <div className="clients-grid">
            {t.clients.items.map((client, index) => {
              const Icon = clientIcons[index]
              return (
                <div key={index} className="client-card">
                  <div className="client-icon">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="client-title">{client}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="section management-section">
        <div className="container">
          <div className="management-box">
            <div className="management-icon">
              <Users size={64} strokeWidth={1.5} />
            </div>
            <h2 className="management-title">{t.management.title}</h2>
            <p className="management-description">{t.management.description}</p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="section location-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-title-text">{t.location.title}</span>
              <MapPin className="section-title-icon" size={32} />
            </h2>
          </div>
          <div className="location-content">
            <div className="map-container">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(content.ar.location.address)}&output=embed`}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.location.title}
              ></iframe>
            </div>
            <p className="location-address">{t.location.address}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">{t.companyName}</h3>
              <p className="footer-description">{t.footer.tagline}</p>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">{t.footer.quickLinks}</h3>
              <div className="footer-links">
                <a href="#services">{t.nav.services}</a>
                <a href="#features">{t.nav.features}</a>
                <a href="#about">{t.nav.about}</a>
                <a href="#clients">{t.nav.clients}</a>
              </div>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">{t.footer.contact}</h3>
              <p className="footer-contact">{t.footer.contactDesc}</p>
              <button onClick={openModal} className="footer-contact-btn">{t.nav.contact}</button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
