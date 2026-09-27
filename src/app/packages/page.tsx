import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
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
              border: `1px solid ${pkg.highlight ? 'var(--primary)' : 'var(--border-color)'}`,
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
              
              <Link href={`/book-now?package=${pkg.id}`} className={pkg.highlight ? 'btn-primary' : 'btn-outline'} style={{ width: '100%' }}>Request Pricing</Link>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner
        label="NEED SOMETHING CUSTOM"
        title="Let Us Build"
        titleAccent="Your Perfect Package"
        subtitle="Every event is unique. Contact us to create a fully customized catering package tailored to your specific needs and budget."
        primaryBtnText="Request Quote"
        primaryBtnHref="/book-now"
        secondaryBtnText="View Services"
        secondaryBtnHref="/services"
      />
    </div>
  );
}