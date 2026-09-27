import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
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
      <CtaBanner
        label="STILL HAVE QUESTIONS"
        title="We'd Love To"
        titleAccent="Hear From You"
        subtitle="Can't find the answer you're looking for? Reach out to our team and we'll get back to you as soon as possible."
        primaryBtnText="Contact Us"
        primaryBtnHref="/contact"
        secondaryBtnText="Book Now"
        secondaryBtnHref="/book-now"
      />
    </div>
  );
}