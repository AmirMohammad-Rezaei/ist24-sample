import BenefitCard from './BenefitCard.jsx';
import { benefits } from '../data/benefits.js';

export default function BenefitsSection() {
  return (
    <section className="benefits-section section-spacing">
      <div className="container">
        <div className="section-heading compact-heading">
          <span className="eyebrow">WHY IST 24</span>
          <h2>چرا IST 24؟</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit) => <BenefitCard key={benefit.id} benefit={benefit} />)}
        </div>
      </div>
    </section>
  );
}
