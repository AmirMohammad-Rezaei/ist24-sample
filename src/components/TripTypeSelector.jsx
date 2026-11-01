const tripTypes = [
  { id: 'round', label: 'رفت‌وبرگشت' },
  { id: 'oneway', label: 'یک‌طرفه' },
  { id: 'multi', label: 'چندمسیره' },
];

export default function TripTypeSelector({ value, onChange }) {
  return (
    <div className="trip-type-selector" role="radiogroup" aria-label="نوع سفر">
      {tripTypes.map((type) => (
        <button
          key={type.id}
          type="button"
          role="radio"
          aria-checked={value === type.id}
          className={`trip-type-button ${value === type.id ? 'selected' : ''}`}
          onClick={() => onChange(type.id)}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
