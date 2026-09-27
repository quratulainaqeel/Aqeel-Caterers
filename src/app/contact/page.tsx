import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
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
      <CtaBanner
        label="PREFER TO TALK"
        title="Call Us Directly"
        titleAccent="We're Here To Help"
        subtitle="Our team is available to discuss your event requirements over the phone. We'd love to hear from you."
        primaryBtnText="Book Your Event"
        primaryBtnHref="/book-now"
        secondaryBtnText="View Services"
        secondaryBtnHref="/services"
      />
    </div>
  );
}
// }