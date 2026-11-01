
import * as DatePickerModule from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { CalendarDays } from "lucide-react";

const DatePickerComponent =
  DatePickerModule.default?.default ??
  DatePickerModule.default ??
  DatePickerModule.DatePicker;

export default function JalaliDateField({
  label,
  value,
  onChange,
  minDate,
}) {
  return (
    <div className="search-field">

      <span className="field-label">
        {label}
      </span>

      <div className="field-control">

        <CalendarDays
          className="field-icon"
          size={17}
        />

        <DatePickerComponent
          value={value || null}
          onChange={(date) => onChange(date || null)}

          calendar={persian}
          locale={persian_fa}

          format="YYYY/MM/DD"

          minDate={minDate}

          placeholder="انتخاب تاریخ"

          editable={false}

          calendarPosition="bottom-right"

          inputClass="jalali-date-input"
          containerClassName="jalali-date-picker"

          portal
          fixMainPosition
          zIndex={9999}

          onOpen={() => {
            console.log("Jalali Calendar Opened");
          }}
        />

      </div>

    </div>
  );
}
