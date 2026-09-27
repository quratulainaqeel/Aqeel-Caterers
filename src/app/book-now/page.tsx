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