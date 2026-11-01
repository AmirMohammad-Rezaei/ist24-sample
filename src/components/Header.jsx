import { useState } from 'react';
import { Menu, X, CircleUserRound } from 'lucide-react';

const navItems = [
  { label: 'پرواز', href: '#flight-search' },
  { label: 'هتل', href: '#services' },
  { label: 'قطار', href: '#services' },
  { label: 'اتوبوس', href: '#services' },
  { label: 'بیمه', href: '#services' },
  { label: 'راهنمای سفر', href: '#footer' },
];

export default function Header({ onActionMessage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#top" aria-label="صفحه اصلی IST 24">
          <span className="brand-mark">24</span>
          <span className="brand-copy">
            <strong>IST 24</strong>
            <small>سفر، ساده‌تر از همیشه</small>
          </span>
        </a>

        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="منوی اصلی">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              className={index === 0 ? 'nav-link active' : 'nav-link'}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="login-button" type="button" onClick={() => onActionMessage?.({ type: 'info', title: 'ورود به حساب کاربری', message: 'بخش ورود و ثبت‌نام در مرحله بعد به سرویس احراز هویت IST 24 متصل می‌شود.' })}>
          <CircleUserRound size={18} />
          <span>ورود / ثبت‌نام</span>
        </button>
      </div>
    </header>
  );
}
