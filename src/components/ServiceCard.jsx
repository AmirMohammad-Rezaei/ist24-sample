import { ArrowLeft } from 'lucide-react';

export default function ServiceCard({ service }) {
  const { eyebrow, title, description, Icon, id } = service;

  return (
    <a className="service-card" href={id === 'flight' ? '#flight-search' : '#footer'}>
      <div className="service-card-top">
        <span className="service-eyebrow">{eyebrow}</span>
        <span className="service-icon-wrap"><Icon size={21} strokeWidth={2} /></span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="service-card-link">مشاهده خدمات <ArrowLeft size={15} /></span>
    </a>
  );
}
