import { Plane, Hotel, TrainFront, BusFront, ShieldCheck } from 'lucide-react';

const tabs = [
  { id: 'flight', label: 'پرواز', Icon: Plane },
  { id: 'hotel', label: 'هتل', Icon: Hotel },
  { id: 'train', label: 'قطار', Icon: TrainFront },
  { id: 'bus', label: 'اتوبوس', Icon: BusFront },
  { id: 'insurance', label: 'بیمه سفر', Icon: ShieldCheck },
];

export default function ServiceTabs({ activeService, onChange }) {
  return (
    <div className="service-tabs" role="tablist" aria-label="انتخاب خدمات سفر">
      {tabs.map(({ id, label, Icon }) => (
        <button
          className={`service-tab ${activeService === id ? 'selected' : ''}`}
          type="button"
          role="tab"
          aria-selected={activeService === id}
          key={id}
          onClick={() => onChange(id)}
        >
          <Icon size={17} strokeWidth={2} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
