import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
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
      <CtaBanner
        label="HUNGRY FOR MORE"
        title="Can't Decide On"
        titleAccent="The Perfect Menu?"
        subtitle="Let our expert chefs create a customized menu that perfectly complements your event and delights every guest."
        primaryBtnText="Get Custom Quote"
        primaryBtnHref="/book-now"
        secondaryBtnText="Contact Us"
        secondaryBtnHref="/contact"
      />
    </div>
  );
}