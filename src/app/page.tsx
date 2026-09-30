import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaBanner from "@/components/ui/CtaBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import MenuCard from "@/components/menus/MenuCard";
import { menuData } from "@/data/menus";
import { testimonialsData } from "@/data/testimonials";
import WhatmakeUsSpecial from "@/components/home/WhatmakeUsSpecial";

export default function Home() {
  const featuredMenus = menuData.filter(m => m.featured).slice(0, 3);
  return (
    <div>
      {/* Hero Section */}
      <section
        className="page-header"
        style={{
          height: "100vh",
          marginTop: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/aqeelCaterers.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 1))",
            zIndex: 1,
          }}
        />

        {/* Content */}
       <div
  style={{
    position: "relative",
    zIndex: 3,
    width: "100%",
    maxWidth: "1200px",
    padding: "0 20px",
    margin: "0 auto",
  }}
  className="animate-fade-up"
>
  <h1
    className="page-header-title"
    style={{
      marginBottom: "0.5rem",
      fontFamily: "var(--font-sans)",
      fontWeight: 900,
      fontSize: "clamp(2.3rem, 5vw, 4rem)",
      lineHeight: 1.15,
    }}
  >
    Crafting Experiences For Your
  </h1>

  <h1
    className="page-header-title1"
    style={{
      marginBottom: "1.5rem",
      fontFamily: "var(--font-sans)",
      fontWeight: 900,
      fontSize: "clamp(2.3rem, 5vw, 4rem)",
      lineHeight: 1.15,
    }}
  >
    Special Moments
  </h1>

  <p
    style={{
      fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)",
      color: "#f4f4f5",
      margin: "0 auto 2rem",
      padding: "0",
      maxWidth: "850px",
      fontWeight: 300,
      lineHeight: 1.7,
    }}
  >
    {siteConfig.description}
  </p>
          {/* </div> */}

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link href="/book-now" className="btn-primary">
              Book Now
            </Link>

            <Link href="/services" className="btn-outline">
              Explore Menus
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / Intro */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem' }}>Premium Catering Since 2012</span>
          <h2 className="section-title" style={{ color: 'var(--foreground)' }}>Turning Every Vision Into</h2>
          <h2 className="section-title" >A Culinary Masterpiece</h2>
          <div style={{ width: '60px', height: '3px', background: 'var(--primary)', margin: '0 auto 2rem', borderRadius: '2px' }}></div>
          <p style={{ color: '#a0a0a0', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>At {siteConfig.name}, we elevate simple celebrations into vibrant memories seasoned with fresh flavors. Every occasion deserves warmth and the taste of carefully prepared food.</p>
          <p style={{ color: '#a0a0a0', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem' }}>Our chefs pour genuine love into every dish — creating memories that last a lifetime through exceptional food and warm, friendly service.</p>

          <div className="grid-3" style={{ borderTop: '1px solid var(--border-color-light)', paddingTop: '2rem' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>12+</div>
              <div style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>Years Active</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>5,000+</div>
              <div style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>Events Done</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>3,500+</div>
              <div style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <WhatWeOffer />

      <ServicesPreview />

      {/* What Makes Us Special */}
      {/* <WhyChooseUs /> */}

      {/* Signature Menus */}
      {/* <section className="section">
        <SectionHeading title="Signature Menus" subtitle="A glimpse into our meticulously crafted culinary offerings." />
        <div className="grid-3">
          {featuredMenus.map(item => <MenuCard key={item.id} item={item} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/menus" className="btn-outline">Explore Full Menu</Link>
        </div>
      </section> */}

      {/* How It Works */}
      {/* <section className="section section-dark">
        <SectionHeading title="How It Works" subtitle="A seamless journey from conception to celebration." />
        <div className="grid-4">
          {[
            { step: '01', title: 'Tell Us About Your Event', desc: 'Share your vision, date, and requirements.' },
            { step: '02', title: 'Choose Your Menu', desc: 'Select from our signature dishes or create a custom menu.' },
            { step: '03', title: 'Customize Experience', desc: 'Finalize details, tastings, and service style.' },
            { step: '04', title: 'Enjoy Your Event', desc: 'Relax as we deliver a flawless culinary experience.' },
          ].map(item => (
            <div key={item.step} style={{ textAlign: 'center', padding: '2rem', border: '1px solid var(--border-color)', background: 'var(--card-bg)' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--primary)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>{item.step}</div>
              <h3 style={{ marginBottom: '1rem', color: '#fff' }}>{item.title}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="section">
        <SectionHeading title="Client Testimonials" subtitle="What our clients say about their experiences." />
        <div className="grid-3">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} style={{ padding: '2rem', background: 'var(--card-bg)', border: '1px solid var(--border-color-light)', borderRadius: '4px' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', color: '#d0d0d0', marginBottom: '1.5rem', lineHeight: 1.7 }}>"{testimonial.quote}"</p>
              <div>
                <h4 style={{ color: '#fff' }}>{testimonial.name}</h4>
                <span style={{ color: '#888', fontSize: '0.8rem' }}>{testimonial.event}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <WhatmakeUsSpecial />
      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}