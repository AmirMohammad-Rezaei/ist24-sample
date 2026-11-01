import { Headset,   Send } from 'lucide-react';

const footerGroups = [
  {
    title: 'خدمات ما',
    links: ['خرید بلیط پرواز', 'رزرو هتل', 'بلیط قطار و اتوبوس', 'بیمه مسافرتی'],
  },
  {
    title: 'دسترسی سریع',
    links: ['درباره IST 24', 'تماس با ما', 'قوانین و مقررات', 'حریم خصوصی'],
  },
  {
    title: 'پشتیبانی',
    links: ['مرکز راهنمایی و پاسخ‌گویی', 'پیگیری رزرو و خرید', 'پرسش‌های متداول'],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="footer-brand" href="#top">IST 24</a>
            <p>همراه مطمئن شما برای برنامه‌ریزی و رزرو تجربه‌ای ساده‌تر از سفر.</p>
            <strong>سفر خوب، از انتخاب درست شروع می‌شود.</strong>
            <div className="social-links" aria-label="شبکه‌های اجتماعی">
              {/* <a href="#footer" aria-label="اینستاگرام"><Instagram size={17} /></a> */}
              <a href="#footer" aria-label="تلگرام"><Send size={17} /></a>
              <a href="#footer" aria-label="پشتیبانی"><Headset size={17} /></a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div className="footer-column" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => <a href="#top" key={link}>{link}</a>)}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© کلیه حقوق این وب‌سایت برای IST 24 محفوظ است.</span>
          <div>
            <a href="#footer">شرایط استفاده</a>
            <span className="footer-dot">·</span>
            <a href="#footer">حریم خصوصی</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
