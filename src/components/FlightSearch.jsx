import { useMemo, useState } from 'react';
import { ArrowLeftRight, CalendarDays, MapPin, Search, Users, PlaneTakeoff } from 'lucide-react';
import ServiceTabs from './ServiceTabs.jsx';
import TripTypeSelector from './TripTypeSelector.jsx';
import SearchField from './SearchField.jsx';
import PassengerPicker from './PassengerPicker.jsx';

// new import

import JalaliDateField from "./JalaliDateField.jsx";

import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";




const cities = [
  { value: 'تهران (THR)', label: 'تهران' },
  { value: 'مشهد (MHD)', label: 'مشهد' },
  { value: 'کیش (KIH)', label: 'کیش' },
  { value: 'شیراز (SYZ)', label: 'شیراز' },
  { value: 'اصفهان (IFN)', label: 'اصفهان' },
  { value: 'تبریز (TBZ)', label: 'تبریز' },
  { value: 'قشم (GSM)', label: 'قشم' },
  { value: 'استانبول (IST)', label: 'استانبول' },
];

const serviceContent = {
  flight: { heading: 'پرواز موردنظرتان را جست‌وجو کنید', from: 'مبدأ', to: 'مقصد', depart: 'تاریخ رفت', return: 'تاریخ برگشت', submit: 'جست‌وجوی پرواز' },
  train: { heading: 'مسیر قطار موردنظرتان را انتخاب کنید', from: 'مبدأ', to: 'مقصد', depart: 'تاریخ حرکت', return: 'تاریخ برگشت', submit: 'جست‌وجوی قطار' },
  bus: { heading: 'سفر زمینی خود را برنامه‌ریزی کنید', from: 'مبدأ', to: 'مقصد', depart: 'تاریخ حرکت', return: 'تاریخ برگشت', submit: 'جست‌وجوی اتوبوس' },
  hotel: { heading: 'اقامتگاه مناسب مقصدتان را پیدا کنید', from: 'شهر یا مقصد', to: 'منطقه یا هتل (اختیاری)', depart: 'تاریخ ورود', return: 'تاریخ خروج', submit: 'جست‌وجوی هتل' },
  insurance: { heading: 'بیمه مناسب سفرتان را انتخاب کنید', from: 'مقصد سفر', to: 'نوع سفر (اختیاری)', depart: 'تاریخ شروع', return: 'تاریخ پایان', submit: 'مشاهده بیمه‌ها' },
};

function getToday() {
  const date = new Date();

  // شروع روز جاری بر اساس ساعت محلی مرورگر
  date.setHours(0, 0, 0, 0);

  return new DateObject({
    date,
    calendar: persian,
    locale: persian_fa,
  });
}

function getDateTimestamp(dateObject) {
  if (!dateObject) return null;

  const date = dateObject.toDate();

  date.setHours(0, 0, 0, 0);

  return date.getTime();
}

function isDateBefore(firstDate, secondDate) {
  return (
    getDateTimestamp(firstDate) <
    getDateTimestamp(secondDate)
  );
}

export default function FlightSearch({ onSearchMessage }) {
  const [activeService, setActiveService] = useState('flight');
  const [tripType, setTripType] = useState('round');
  const [origin, setOrigin] = useState('تهران (THR)');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [travelClass, setTravelClass] = useState('economy');

  const content = serviceContent[activeService];
  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);

    return new DateObject({
      date,
      calendar: persian,
      locale: persian_fa,
    });
  }, []);
  const needsReturn = activeService !== 'flight' || tripType === 'round';

  const swapCities = () => {
    setOrigin(destination || origin);
    setDestination(origin);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    if (!origin || !destination) {
      onSearchMessage({
        type: 'error',
        title: 'مبدأ و مقصد را انتخاب کنید',
        message: 'برای ادامه، لطفاً مبدأ و مقصد سفرتان را مشخص کنید.',
      });
      return;
    }

    if (origin === destination) {
      onSearchMessage({
        type: 'error',
        title: 'مبدأ و مقصد یکسان هستند',
        message: 'لطفاً دو شهر متفاوت برای مسیر سفر انتخاب کنید.',
      });
      return;
    }

    if (!departureDate) {
      onSearchMessage({
        type: 'error',
        title: 'تاریخ سفر را انتخاب کنید',
        message: 'برای جست‌وجوی خدمات سفر، انتخاب تاریخ شروع الزامی است.',
      });
      return;
    }

    if (needsReturn && !returnDate) {
      onSearchMessage({
        type: 'error',
        title: 'تاریخ برگشت را انتخاب کنید',
        message: 'لطفاً تاریخ برگشت یا خروج را هم مشخص کنید.',
      });
      return;
    }

    if (
      needsReturn &&
      isDateBefore(returnDate, departureDate)
    ) {
      onSearchMessage({
        type: "error",
        title: "ترتیب تاریخ‌ها صحیح نیست",
        message: "تاریخ برگشت نمی‌تواند قبل از تاریخ رفت باشد.",
      });

      return;
    }

    onSearchMessage({
      type: 'success',
      title: 'اطلاعات جست‌وجو آماده است',
      message: 'رابط کاربری آماده است. برای نمایش نتایج واقعی باید این فرم به API سامانه IST 24 متصل شود.',
      // details: `${origin} ← ${destination} | ${departureDate}${needsReturn ? ` تا ${returnDate}` : ''} | ${adults} مسافر`,
      details: `${origin} ← ${destination} | ${departureDate.format("YYYY/MM/DD")}${needsReturn ? ` تا ${returnDate.format("YYYY/MM/DD")}` : ""} | ${adults} مسافر`,
    });
  };

  return (
    <section className="search-card" id="flight-search" aria-label="فرم جست‌وجوی خدمات سفر">
      <ServiceTabs activeService={activeService} onChange={setActiveService} />
      <div className="search-divider" />

      <div className="search-card-toolbar">
        <p className="search-hint">{content.heading}</p>
        {activeService === 'flight' && <TripTypeSelector value={tripType} onChange={setTripType} />}
      </div>

      <form className="travel-search-form" onSubmit={handleSubmit} noValidate>
        <div className="search-fields-grid">
          <div className="route-fields-group">
            <SearchField label={content.from} value={origin} onChange={(event) => setOrigin(event.target.value)} icon={MapPin}>
              <select value={origin} onChange={(event) => setOrigin(event.target.value)} aria-label={content.from}>
                <option value="">انتخاب شهر</option>
                {cities.map((city) => <option key={city.value} value={city.value}>{city.label}</option>)}
              </select>
            </SearchField>

            <button className="swap-route-button" type="button" onClick={swapCities} aria-label="جابه‌جایی مبدأ و مقصد" title="جابه‌جایی مبدأ و مقصد">
              <ArrowLeftRight size={18} />
            </button>

            <SearchField label={content.to} value={destination} onChange={(event) => setDestination(event.target.value)} icon={MapPin}>
              <select value={destination} onChange={(event) => setDestination(event.target.value)} aria-label={content.to}>
                <option value="">انتخاب شهر</option>
                {cities.map((city) => <option key={city.value} value={city.value}>{city.label}</option>)}
              </select>
            </SearchField>
          </div>

          {/* <SearchField label={content.depart} value={departureDate} onChange={(event) => setDepartureDate(event.target.value)} type="date" icon={CalendarDays} min={today} /> */}
          <JalaliDateField
              label={content.return}
              value={returnDate}
              onChange={(date) => setReturnDate(date || null)}
              minDate={departureDate || today}
            />

          {/* {needsReturn && (
            <SearchField label={content.return} value={returnDate} onChange={(event) => setReturnDate(event.target.value)} type="date" icon={CalendarDays} min={departureDate || today} />
          )} */}

          {needsReturn && (
            <JalaliDateField
              label={content.return}
              value={returnDate}
              onChange={(date) => setReturnDate(date || null)}
              minDate={departureDate || today}
            />
          )}

          <PassengerPicker adults={adults} setAdults={setAdults} travelClass={travelClass} setTravelClass={setTravelClass} />
        </div>

        <div className="search-submit-row">
          <span className="search-assurance"><PlaneTakeoff size={16} /> جست‌وجوی سریع و آسان</span>
          <button className="primary-button search-submit" type="submit">
            <Search size={19} />
            <span>{content.submit}</span>
            <ArrowLeftRight className="submit-arrow" size={16} />
          </button>
        </div>
      </form>
    </section>
  );
}

const handleDepartureDateChange = (date) => {
  setDepartureDate(date || null);

  // اگر تاریخ برگشت قبل از تاریخ رفت جدید باشد،
  // تاریخ برگشت پاک می‌شود.
  if (
    date &&
    returnDate &&
    isDateBefore(returnDate, date)
  ) {
    setReturnDate(null);
  }
};
