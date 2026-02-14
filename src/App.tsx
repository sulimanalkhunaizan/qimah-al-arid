import { useState, useEffect } from 'react'
import {
  BadgeCheck, Users, Cpu, Hammer, Award, ClipboardList,
  Home, Building2, UtensilsCrossed, HeartPulse, ShoppingBag, Factory,
  Phone, MessageCircle, MapPin, X, Globe, Menu, Clock, DollarSign, CheckCircle, ArrowRight, Star, Quote
} from 'lucide-react'
import './App.css'
import heroImage from './assets/Landin-page.png'
import serviceRepair from './assets/Service-reparing.png'
import serviceInstallation from './assets/Service-installation.png'
import serviceIndoor from './assets/Services-qulity indoor.png'

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
      headline: {
        heating: 'التدفئة',
        and: 'و',
        cooling: 'التبريد',
        line3: 'إصلاحات، صيانة،',
        line4: 'وتركيبات'
      },
      stats: {
        customers: 'عملاء سعداء: 10K+',
        phone: 'اتصل مباشرة: 0539799771'
      },
      cta1: 'اطلب عرض سعر',
      cta2: 'اتصل الآن',
      trustBadges: {
        emergency: 'خدمة طوارئ 24/7',
        pricing: 'أسعار شفافة',
        local: 'ملكية سعودية',
        licensed: 'مرخص ومؤمن'
      }
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'نقدم حلول تكييف شاملة ومتكاملة لجميع احتياجاتك',
      readMore: 'اقرأ المزيد ←',
      items: [
        { title: 'توريد وتركيب جميع أنواع التكييف', desc: 'مخفي، باكيج، كاسيت، سبيلت، شيلر', image: serviceInstallation },
        { title: 'التنظيف والصيانة الشاملة', desc: 'تنظيف شامل وصيانة دورية لأنظمة التكييف لضمان الأداء الأمثل', image: serviceRepair },
        { title: 'تكييف عالي الجودة', desc: 'أنظمة تكييف بجودة عالمية وكفاءة عالية في استهلاك الطاقة', image: serviceIndoor }
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
    testimonials: {
      title: 'ماذا قال عملاؤنا',
      subtitle: 'آراء عملائنا تتحدث عن جودة خدماتنا',
      items: [
        {
          name: 'Abdualrahman Al Sahaliy',
          rating: 5,
          text: 'معرض متخصص بالتكييف سواءً المخفي او الكونسلت او الاسبلت او الكاسيت يقدم اسعار جداً ممتازه وفريق عمل ممتاز باأداره صاحب الحلال ابوعبدالله الله يوفقه متعامل معهم من اكثر من خمس سنوات ولازلت اتعامل معهم'
        },
        {
          name: 'Ray S.',
          rating: 5,
          text: 'اشتريت مكيف كاسيت . صاحب المعرض والموظفين والاخ عبدالناصر كلهم قمة في الرقي والاخلاق والتعاون . من دخول المعرض والاجابة على الاستفسارات وحتى تم التركيب . اسال الله ان يبارك لهم في مالهم وفي رزقهم'
        },
        {
          name: 'Abdulaziz',
          rating: 5,
          text: 'تم التعامل معهم وتم توريد وتركيب المكيفات حسب الوقت المتفق عليه التركيب ممتاز وأشكر ابوعبدالله على اهتمامه والمتابعة اول بأول ، رجل نصوح وفاهم'
        },
        {
          name: 'BACER MIHA',
          rating: 5,
          text: 'تعاملت مع قمة العارض في تركيب ثلاث فلل من الدكت والمكيفات ماشاء الله عليهم مواعيد وشغلهم فوق الوصف وخاصه المهندس بشير والشكر موصول لمدير المحل عبد الناصر انصح بلتعامل معهم'
        },
        {
          name: 'Azzam',
          rating: 5,
          text: 'تجربتي معهم ناجحة، أعجبني منهم التعامل الراقي والجودة في العمل والإنجاز السريع أشكر أبو عبدالله الخنيزان على متابعته الدقيقة للعمل وحسن أخلاقه والشكر موصول للأخ عبدالناصر على جهوده'
        },
        {
          name: 'Saeed Awad',
          rating: 5,
          text: 'كلمة شكر لاتوفي حقهم وخدمتهم رائعة وتعاملهم ممتاز جدا وبالاخص الاخ عبدالناصر جزاءه الله خير'
        }
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
      badge: '28+ Years of AC & Cooling Expertise',
      headline: {
        heating: 'Heating',
        and: 'And',
        cooling: 'Cooling',
        line3: 'Repairs, Maintenance,',
        line4: '& Installations'
      },
      stats: {
        customers: 'Happy Customers: 10K+',
        phone: 'Call Us Directly: 0539799771'
      },
      cta1: 'SCHEDULE SERVICE',
      cta2: 'CALL NOW',
      trustBadges: {
        emergency: '24/7 Emergency',
        pricing: 'Upfront Pricing',
        local: 'Locally Owned',
        licensed: 'Licensed & Insured'
      }
    },
    services: {
      title: 'Services',
      subtitle: 'Comprehensive and integrated AC solutions for all your needs',
      readMore: 'Read More →',
      items: [
        { title: 'Supply & install all AC types', desc: 'Concealed, package, cassette, split, desert cooler', image: serviceInstallation },
        { title: 'Cleaning & Comprehensive Maintenance', desc: 'Complete cleaning and periodic maintenance for optimal AC system performance', image: serviceRepair },
        { title: 'Premium Quality AC Systems', desc: 'High-quality AC systems with global standards and energy efficiency', image: serviceIndoor }
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
    testimonials: {
      title: 'What Our Customers Say',
      subtitle: 'Our customers\' opinions speak about the quality of our services',
      items: [
        {
          name: 'Abdualrahman Al Sahaliy',
          rating: 5,
          text: 'A specialized AC showroom offering excellent prices and an outstanding team. I have been dealing with them for over five years and I still do. They are easy to deal with and follow up on work diligently.'
        },
        {
          name: 'Ray S.',
          rating: 5,
          text: 'I bought a cassette AC. The owner, employees and brother Abdulnasser are all the pinnacle of elegance, ethics and cooperation. From entering the showroom to answering inquiries until the installation was complete.'
        },
        {
          name: 'Abdulaziz',
          rating: 5,
          text: 'Dealt with them and the AC supply and installation was done on the agreed time. Excellent installation. I thank Abu Abdullah for his care and follow-up. A sincere and knowledgeable man.'
        },
        {
          name: 'BACER MIHA',
          rating: 5,
          text: 'I dealt with Qimah Al-Arid for installing three villas with ducts and ACs. They are punctual and their work is beyond description, especially engineer Bashir. I recommend dealing with them.'
        },
        {
          name: 'Azzam',
          rating: 5,
          text: 'My experience with them was successful. I admired their elegant treatment, quality of work and quick completion. I thank Abu Abdullah Al-Khanaizan for his precise follow-up and good manners.'
        },
        {
          name: 'Saeed Awad',
          rating: 5,
          text: 'Words of thanks are not enough for them. Their service is wonderful and their treatment is excellent, especially brother Abdulnasser, may God reward him well.'
        }
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
            <img src={`${import.meta.env.BASE_URL}qimah-logo.png`} alt={t.companyName} className="logo-image" />
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
        <div className="hero-content">
          <div className="hero-badge">{t.hero.badge}</div>
          <h1 className="hero-title">
            <div className="hero-title-line">
              <span className="hero-title-heating">{t.hero.headline.heating}</span>
              <span className="hero-title-and">{t.hero.headline.and}</span>
              <span className="hero-title-cooling">{t.hero.headline.cooling}</span>
            </div>
            <span className="hero-title-line">{t.hero.headline.line3}</span>
            <span className="hero-title-line">{t.hero.headline.line4}</span>
          </h1>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <Users size={20} />
              <span>{t.hero.stats.customers}</span>
            </div>
            <div className="hero-stat-item">
              <Phone size={20} />
              <span>{t.hero.stats.phone}</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button onClick={openModal} className="btn btn-primary">{t.hero.cta1}</button>
            <button onClick={openModal} className="btn btn-secondary">{t.hero.cta2}</button>
          </div>
          <div className="hero-trust-badges">
            <div className="trust-badge">
              <Clock size={18} />
              <span>{t.hero.trustBadges.emergency}</span>
            </div>
            <div className="trust-badge">
              <DollarSign size={18} />
              <span>{t.hero.trustBadges.pricing}</span>
            </div>
            <div className="trust-badge">
              <MapPin size={18} />
              <span>{t.hero.trustBadges.local}</span>
            </div>
            <div className="trust-badge">
              <CheckCircle size={18} />
              <span>{t.hero.trustBadges.licensed}</span>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="HVAC technician servicing air conditioning unit"
            className="hero-image"
          />
          <div className="hero-image-fade" />
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
            {t.services.items.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                  <a href="#contact" className="service-read-more">
                    {t.services.readMore}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Brand Logos Marquee */}
          <div className="brand-logos-container">
            <div className="brand-logos-scroll">
              <div className="brand-logos-track">
                <img src={`${import.meta.env.BASE_URL}Midea-Logo.png`} alt="Midea" className="brand-logo" />
                <img src={`${import.meta.env.BASE_URL}LG-logo.png`} alt="LG" className="brand-logo" />
                <img src={`${import.meta.env.BASE_URL}gree-logo.png`} alt="Gree" className="brand-logo" />
                <img src={`${import.meta.env.BASE_URL}basic-logo.png`} alt="Basic" className="brand-logo" />
                <img src={`${import.meta.env.BASE_URL}fisher-logo.png`} alt="Fisher" className="brand-logo brand-logo-fisher" />
                {/* Duplicate for seamless loop */}
                <img src={`${import.meta.env.BASE_URL}Midea-Logo.png`} alt="Midea" className="brand-logo" />
                <img src={`${import.meta.env.BASE_URL}LG-logo.png`} alt="LG" className="brand-logo" />
                <img src={`${import.meta.env.BASE_URL}gree-logo.png`} alt="Gree" className="brand-logo" />
                <img src={`${import.meta.env.BASE_URL}basic-logo.png`} alt="Basic" className="brand-logo" />
                <img src={`${import.meta.env.BASE_URL}fisher-logo.png`} alt="Fisher" className="brand-logo brand-logo-fisher" />
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

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.testimonials.title}</h2>
            <p className="section-subtitle">{t.testimonials.subtitle}</p>
          </div>
          <div className="testimonials-scroll-wrapper">
            <div className="testimonials-track">
              {t.testimonials.items.map((testimonial: { name: string; rating: number; text: string }, index: number) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-quote-icon">
                    <Quote size={28} />
                  </div>
                  <div className="testimonial-stars">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {testimonial.name.charAt(0)}
                    </div>
                    <span className="testimonial-name">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
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
