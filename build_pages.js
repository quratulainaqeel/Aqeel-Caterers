const fs = require('fs');
const path = require('path');

const pages = {
  'layout.tsx': `
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name + " | Premium Catering",
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="page-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
`,
  'page.tsx': `
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import ServicesPreview from "@/components/home/ServicesPreview";
import SectionHeading from "@/components/ui/SectionHeading";
import MenuCard from "@/components/menus/MenuCard";
import { menuData } from "@/data/menus";
import { testimonialsData } from "@/data/testimonials";

export default function Home() {
  const featuredMenus = menuData.filter(m => m.featured).slice(0, 3);
  return (
    <div>
      {/* Hero Section */}
      <section className="page-header" style={{ height: '100vh', marginTop: 0 }}>
        <div style={{ position: 'relative', zIndex: 3, maxWidth: '800px', padding: '0 20px' }} className="animate-fade-up">
          <h1 className="page-header-title" style={{ fontSize: '4rem', marginBottom: '1rem' }}>Crafting Unforgettable Culinary Experiences</h1>
          <p style={{ fontSize: '1.2rem', color: '#f4f4f5', marginBottom: '2.5rem', fontWeight: 300 }}>{siteConfig.description}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/book-now" className="btn-primary">Book Now</Link>
            <Link href="/menus" className="btn-outline">View Menus</Link>
          </div>
        </div>
      </section>

      {/* Trust / Intro */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Welcome to {siteConfig.name}</h2>
          <p style={{ color: '#a0a0a0', fontSize: '1.1rem', lineHeight: 1.8 }}>We believe that every event is an opportunity to create a masterpiece. With a passion for exceptional ingredients and a dedication to flawless service, our team works tirelessly to bring your culinary vision to life. Experience the pinnacle of premium catering.</p>
        </div>
      </section>

      <ServicesPreview />

      {/* Signature Menus */}
      <section className="section">
        <SectionHeading title="Signature Menus" subtitle="A glimpse into our meticulously crafted culinary offerings." />
        <div className="grid-3">
          {featuredMenus.map(item => <MenuCard key={item.id} item={item} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/menus" className="btn-outline">Explore Full Menu</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-dark">
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
      </section>

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

      {/* CTA */}
      <section className="section section-dark" style={{ textAlign: 'center', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <h2 style={{ fontSize: '3rem', color: 'var(--primary)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Let's Create Something Unforgettable</h2>
        <p style={{ color: '#a0a0a0', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>Tell us about your event and we'll help create a menu and experience tailored to your occasion.</p>
        <Link href="/book-now" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>Request a Quote</Link>
      </section>
    </div>
  );
}
`,
  'about/page.tsx': `
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata = { title: "About Us | " + siteConfig.name };

export default function AboutPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">About Us</h1>
      </div>
      
      <section className="section">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Our Story</h2>
            <p style={{ color: '#a0a0a0', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Founded with a passion for exceptional gastronomy, {siteConfig.name} has grown to become a premier catering service known for culinary excellence and impeccable service.
            </p>
            <p style={{ color: '#a0a0a0', marginBottom: '1.5rem' }}>
              Our philosophy is simple: source the finest ingredients, prepare them with classical techniques and modern flair, and serve them with genuine hospitality. We believe that food is the centerpiece of any great gathering.
            </p>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/dish_1.jpg" alt="Our Chef" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <SectionHeading title="Plan Your Event With Us" subtitle="Experience the difference of true culinary artistry." />
        <Link href="/contact" className="btn-primary">Contact Our Team</Link>
      </section>
    </div>
  );
}
`,
  'services/page.tsx': `
import SectionHeading from "@/components/ui/SectionHeading";
import { servicesData } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Services | Aqeel Caterers" };

export default function ServicesPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">Our Services</h1>
      </div>
      
      <section className="section">
        <SectionHeading title="Tailored Experiences" subtitle="We offer a comprehensive range of catering services designed to elevate any occasion." />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {servicesData.map((service, index) => (
            <div key={service.id} id={service.id} className="grid-2" style={{ alignItems: 'center', direction: index % 2 !== 0 ? 'rtl' : 'ltr' }}>
              <div style={{ position: 'relative', height: '350px', borderRadius: '4px', overflow: 'hidden' }}>
                <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ direction: 'ltr' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{service.title}</h2>
                <p style={{ color: '#a0a0a0', marginBottom: '1.5rem', lineHeight: 1.8 }}>{service.desc}</p>
                <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{ color: '#d0d0d0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: 'var(--primary)' }}>❖</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/book-now" className="btn-outline">Request Quote</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
`,
  'menus/page.tsx': `
import SectionHeading from "@/components/ui/SectionHeading";
import MenuCard from "@/components/menus/MenuCard";
import { menuData, menuCategories } from "@/data/menus";
import Link from "next/link";

export const metadata = { title: "Menus | Aqeel Caterers" };

export default function MenusPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">Our Menus</h1>
      </div>
      
      <section className="section">
        <SectionHeading title="A Symphony of Flavors" subtitle="Explore our signature dishes. We also offer fully customized menus upon request." />
        
        {/* Simple rendering for now, can be made interactive client-side later */}
        {menuCategories.filter(c => c !== "All").map(category => (
          <div key={category} style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--primary)', fontFamily: 'var(--font-serif)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>{category}</h2>
            <div className="grid-3">
              {menuData.filter(item => item.category === category).map(item => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
        
        <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'var(--card-bg)', border: '1px solid var(--border-color-light)' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>Need a Custom Menu?</h3>
          <p style={{ color: '#a0a0a0', marginBottom: '2rem' }}>Our chefs excel at creating bespoke menus tailored to your specific taste and dietary requirements.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/book-now" className="btn-primary">Request a Custom Quote</Link>
            <button className="btn-outline">Download PDF Menu</button>
          </div>
        </div>
      </section>
    </div>
  );
}
`
};

const createDir = (dir) => {
  const fullPath = path.join(__dirname, 'src', 'app', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
};

for (const [file, content] of Object.entries(pages)) {
  const dir = path.dirname(file);
  createDir(dir);
  fs.writeFileSync(path.join(__dirname, 'src', 'app', file), content.trim());
}
console.log('Main pages built.');
