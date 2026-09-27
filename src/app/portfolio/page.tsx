import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
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
            <div key={item.id} style={{ position: 'relative', height: '300px', overflow: 'hidden', borderRadius: '4px' }} className="portfolio-card">
              <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} className="portfolio-img" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem', opacity: 0.9, transition: 'opacity 0.3s ease' }}>
                <span style={{ color: 'var(--primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.category}</span>
                <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        label="INSPIRED BY WHAT YOU SEE"
        title="Let Us Create"
        titleAccent="Your Dream Event"
        subtitle="Every image tells a story of dedication and excellence. Let us write the next chapter for your special occasion."
        primaryBtnText="Book Your Event"
        primaryBtnHref="/book-now"
        secondaryBtnText="Our Services"
        secondaryBtnHref="/services"
      />
    </div>
  );
}