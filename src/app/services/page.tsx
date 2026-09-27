import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
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
      <CtaBanner
        label="READY TO START"
        title="Let Us Handle"
        titleAccent="Your Next Event"
        subtitle="From intimate gatherings to grand celebrations, we bring the same level of excellence and attention to detail."
        primaryBtnText="Get a Quote"
        primaryBtnHref="/book-now"
        secondaryBtnText="Contact Us"
        secondaryBtnHref="/contact"
      />
    </div>
  );
}
// }