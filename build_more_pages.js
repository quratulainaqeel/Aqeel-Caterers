const fs = require('fs');
const path = require('path');

const pages = {
  'packages/page.tsx': `
import SectionHeading from "@/components/ui/SectionHeading";
import { packagesData } from "@/data/packages";
import Link from "next/link";

export const metadata = { title: "Packages | Aqeel Caterers" };

export default function PackagesPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">Catering Packages</h1>
      </div>
      
      <section className="section">
        <SectionHeading title="Curated Experiences" subtitle="Select from our carefully designed packages or contact us for a completely custom quote." />
        
        <div className="grid-3">
          {packagesData.map(pkg => (
            <div key={pkg.id} style={{
              background: pkg.highlight ? '#111315' : 'transparent',
              border: \`1px solid \${pkg.highlight ? 'var(--primary)' : 'var(--border-color)'}\`,
              padding: '3rem 2rem',
              borderRadius: '4px',
              textAlign: 'center',
              position: 'relative',
              transform: pkg.highlight ? 'scale(1.05)' : 'none',
              zIndex: pkg.highlight ? 2 : 1,
              boxShadow: pkg.highlight ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
            }}>
              {pkg.highlight && <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--primary)', color: '#000', padding: '4px 12px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', borderRadius: '2px' }}>Most Popular</div>}
              <h3 style={{ color: 'var(--primary)', fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>{pkg.name}</h3>
              <p style={{ color: '#a0a0a0', marginBottom: '2rem', minHeight: '40px' }}>{pkg.desc}</p>
              
              <ul style={{ listStyle: 'none', marginBottom: '3rem', textAlign: 'left' }}>
                {pkg.features.map((feature, i) => (
                  <li key={i} style={{ color: '#d0d0d0', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--primary)' }}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              
              <Link href={\`/book-now?package=\${pkg.id}\`} className={pkg.highlight ? 'btn-primary' : 'btn-outline'} style={{ width: '100%' }}>Request Pricing</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
`,
  'portfolio/page.tsx': `
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData, portfolioCategories } from "@/data/portfolio";
import Image from "next/image";

export const metadata = { title: "Portfolio | Aqeel Caterers" };

export default function PortfolioPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">Our Portfolio</h1>
      </div>
      
      <section className="section">
        <SectionHeading title="A Visual Feast" subtitle="Explore moments of culinary excellence and elegant event setups." />
        
        <div className="grid-3">
          {portfolioData.map(item => (
            <div key={item.id} style={{ position: 'relative', height: '300px', overflow: 'hidden', borderRadius: '4px', group: 'true' }}>
              <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} className="portfolio-img" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem', opacity: 0.9, transition: 'opacity 0.3s ease' }}>
                <span style={{ color: 'var(--primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.category}</span>
                <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
`,
  'contact/page.tsx': `
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata = { title: "Contact Us | Aqeel Caterers" };

export default function ContactPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">Contact Us</h1>
      </div>
      
      <section className="section">
        <div className="grid-2">
          <div>
            <SectionHeading title="Get In Touch" subtitle="We're here to answer any questions and begin planning your perfect event." dark={false} />
            
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Address</h3>
                <p style={{ color: '#d0d0d0' }}>{siteConfig.contact.address}</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email</h3>
                <p style={{ color: '#d0d0d0' }}>{siteConfig.contact.email}</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phone</h3>
                <p style={{ color: '#d0d0d0' }}>{siteConfig.contact.phone}</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Business Hours</h3>
                <p style={{ color: '#d0d0d0' }}>{siteConfig.contact.businessHours}</p>
              </div>
            </div>
          </div>
          
          <div style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '4px', border: '1px solid var(--border-color-light)' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '2rem' }}>Send a Message</h3>
            <form>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="General Inquiry" required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-control" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
`,
  'faq/page.tsx': `
import SectionHeading from "@/components/ui/SectionHeading";
import { faqsData } from "@/data/faqs";

export const metadata = { title: "FAQ | Aqeel Caterers" };

export default function FAQPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">Frequently Asked Questions</h1>
      </div>
      
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqsData.map((faq, i) => (
            <div key={i} style={{ marginBottom: '1rem', border: '1px solid var(--border-color-light)', background: 'var(--card-bg)', borderRadius: '4px' }}>
              <details style={{ padding: '1.5rem' }}>
                <summary style={{ fontSize: '1.1rem', color: 'var(--primary)', cursor: 'pointer', outline: 'none', fontWeight: 500 }}>
                  {faq.question}
                </summary>
                <p style={{ color: '#d0d0d0', marginTop: '1rem', lineHeight: 1.6 }}>
                  {faq.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
`,
  'book-now/page.tsx': `
"use client";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BookNowPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a backend API (e.g. Server Action)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <div>
          <div style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem' }}>✓</div>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Thank You!</h1>
          <p style={{ color: '#a0a0a0', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>We've received your catering request. Our team will review your event details and get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">Request a Quote</h1>
      </div>
      
      <section className="section">
        <SectionHeading title="Let's Plan Your Event" subtitle="Provide us with some details about your occasion, and we'll craft a bespoke proposal for you." />
        
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--card-bg)', padding: '3rem', borderRadius: '4px', border: '1px solid var(--border-color-light)' }}>
          <form onSubmit={handleSubmit}>
            <h3 style={{ color: 'var(--primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '2rem', fontSize: '1.2rem' }}>Personal Information</h3>
            <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Full Name *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Email Address *</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Phone Number *</label>
                <input type="tel" className="form-control" required />
              </div>
            </div>

            <h3 style={{ color: 'var(--primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '2rem', fontSize: '1.2rem' }}>Event Information</h3>
            <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Event Type *</label>
                <select className="form-control" required style={{ appearance: 'none' }}>
                  <option value="">Select Type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Private">Private Party</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Event Date *</label>
                <input type="date" className="form-control" required />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Number of Guests</label>
                <input type="number" className="form-control" placeholder="e.g. 100" />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Location / Venue</label>
                <input type="text" className="form-control" placeholder="City or specific venue" />
              </div>
            </div>

            <h3 style={{ color: 'var(--primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '2rem', fontSize: '1.2rem' }}>Additional Details</h3>
            <div className="form-group">
              <label className="form-label">Message / Requirements</label>
              <textarea className="form-control" placeholder="Tell us about your catering needs, dietary requirements, or any specific requests..." required></textarea>
            </div>
            
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <button type="submit" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>Submit Request</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
`,
  'privacy-policy/page.tsx': `
export const metadata = { title: "Privacy Policy | Aqeel Caterers" };
export default function PrivacyPage() {
  return (
    <div className="section" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '120px' }}>
      <h1 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Privacy Policy</h1>
      <div style={{ color: '#d0d0d0', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '1rem' }}>This privacy policy outlines how Aqeel Caterers collects, uses, and protects your information.</p>
        <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Information Collection</h3>
        <p style={{ marginBottom: '1rem' }}>We collect personal information when you request a quote, book an event, or contact us. This may include your name, email, phone number, and event details.</p>
        <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Use of Information</h3>
        <p style={{ marginBottom: '1rem' }}>Your information is used solely to provide our catering services, communicate with you about your event, and improve our offerings. We do not sell your data to third parties.</p>
      </div>
    </div>
  );
}
`,
  'terms/page.tsx': `
export const metadata = { title: "Terms of Service | Aqeel Caterers" };
export default function TermsPage() {
  return (
    <div className="section" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '120px' }}>
      <h1 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Terms of Service</h1>
      <div style={{ color: '#d0d0d0', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '1rem' }}>These Terms of Service govern your use of the Aqeel Caterers website and services.</p>
        <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Booking & Payment</h3>
        <p style={{ marginBottom: '1rem' }}>A deposit is required to secure your date. Final guest counts and remaining balance are due 14 days prior to the event.</p>
        <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Cancellations</h3>
        <p style={{ marginBottom: '1rem' }}>Cancellations made 30 days prior to the event may receive a partial refund of the deposit. Cancellations within 14 days are non-refundable.</p>
      </div>
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
console.log('Additional pages built.');
