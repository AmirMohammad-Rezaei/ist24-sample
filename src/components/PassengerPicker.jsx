import { useState } from 'react';
import { Users, ChevronDown, Minus, Plus } from 'lucide-react';

export default function PassengerPicker({ adults, setAdults, travelClass, setTravelClass }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="passenger-picker-wrap">
      <button
        type="button"
        className={`passenger-picker search-field ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="field-label">مسافران و کلاس</span>
        <span className="field-control">
          <Users className="field-icon" size={17} />
          <span>{adults} بزرگسال · {travelClass === 'economy' ? 'اقتصادی' : travelClass === 'business' ? 'بیزینس' : 'فرست کلاس'}</span>
          <ChevronDown className="picker-chevron" size={16} />
        </span>
      </button>

      {open && (
        <div className="passenger-popover">
          <div className="passenger-popover-heading">
            <div>
              <strong>تعداد مسافران</strong>
              <small>حداقل یک بزرگسال</small>
            </div>
            <div className="counter-control">
              <button type="button" aria-label="کاهش مسافر" disabled={adults <= 1} onClick={() => setAdults((count) => Math.max(1, count - 1))}>
                <Minus size={15} />
              </button>
              <strong>{adults}</strong>
              <button type="button" aria-label="افزایش مسافر" disabled={adults >= 9} onClick={() => setAdults((count) => Math.min(9, count + 1))}>
                <Plus size={15} />
              </button>
            </div>
          </div>
          <label className="class-select-label">
            کلاس پرواز
            <select value={travelClass} onChange={(event) => setTravelClass(event.target.value)}>
              <option value="economy">اقتصادی</option>
              <option value="business">بیزینس</option>
              <option value="first">فرست کلاس</option>
            </select>
          </label>
          <button className="popover-done" type="button" onClick={() => setOpen(false)}>تأیید</button>
        </div>
      )}
    </div>
  );
}
