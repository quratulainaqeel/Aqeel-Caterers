export default function SectionHeading({ title, subtitle, dark = false }: { title: string, subtitle?: string, dark?: boolean }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}