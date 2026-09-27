import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
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
      {/* <section className="section section-dark" style={{ textAlign: 'center' }}>
        <SectionHeading title="Plan Your Event With Us" subtitle="Experience the difference of true culinary artistry." />
        <Link href="/contact" className="btn-primary">Contact Our Team</Link>
      </section> */}
      <CtaBanner
        label="JOIN US"
        title="Plan Your Event"
        titleAccent="With Us Today"
        subtitle="Experience the difference of true culinary artistry. Let our team craft a memorable event tailored just for you."
        primaryBtnText="Contact Our Team"
        primaryBtnHref="/contact"
        secondaryBtnText="View Services"
        secondaryBtnHref="/services"
      />
    </div>
  );
}
// }