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