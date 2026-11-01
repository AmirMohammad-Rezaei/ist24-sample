import { Check } from 'lucide-react';
import FlightSearch from './FlightSearch.jsx';

const trustPoints = ['رزرو سریع و آسان', 'پرداخت امن', 'پشتیبانی ۲۴ ساعته'];

export default function HeroSection({ onSearchMessage }) {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">تجربه‌ای ساده‌تر برای سفر</span>
          <h1>سفر بعدی‌تان را هوشمندانه آغاز کنید</h1>
          <p>جست‌وجو و رزرو آسان پرواز، هتل و خدمات سفر؛ همه در یک تجربه ساده با IST 24</p>
        </div>

        <div className="trust-points">
          {trustPoints.map((point) => (
            <span className="trust-point" key={point}>
              <Check size={15} />
              {point}
            </span>
          ))}
        </div>

        <FlightSearch onSearchMessage={onSearchMessage} />
      </div>
    </section>
  );
}
