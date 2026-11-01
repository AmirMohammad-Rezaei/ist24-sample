export default function BenefitCard({ benefit }) {
  const { title, description, Icon } = benefit;

  return (
    <article className="benefit-card">
      <span className="benefit-icon"><Icon size={20} /></span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
