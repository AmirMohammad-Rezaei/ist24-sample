import ServiceCard from './ServiceCard.jsx';
import { services } from '../data/services.js';

export default function ServicesSection() {
  return (
    <section className="services-section section-spacing" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">IST 24 SERVICES</span>
          <h2>خدمات سفر در IST 24</h2>
          <p>هر آنچه برای یک سفر راحت نیاز دارید، در دسترس شماست.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      </div>
    </section>
  );
}
