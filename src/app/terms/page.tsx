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