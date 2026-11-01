export default function SearchField({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  icon: Icon,
  children,
  min,
  name,
}) {
  return (
    <label className="search-field">
      <span className="field-label">{label}</span>
      <span className="field-control">
        {Icon && <Icon className="field-icon" size={17} aria-hidden="true" />}
        {children || (
          <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            min={min}
          />
        )}
      </span>
    </label>
  );
}
