import { Plane, Hotel, TrainFront, ShieldCheck } from 'lucide-react';

export const services = [
  {
    id: 'flight',
    eyebrow: 'FLIGHTS',
    title: 'پروازهای داخلی و خارجی',
    description: 'مسیرها و گزینه‌های پروازی را مقایسه و بلیط تهیه کنید.',
    Icon: Plane,
  },
  {
    id: 'hotel',
    eyebrow: 'STAY',
    title: 'رزرو هتل',
    description: 'اقامتگاه مناسب مقصد و بودجه‌تان را پیدا و رزرو کنید.',
    Icon: Hotel,
  },
  {
    id: 'ground',
    eyebrow: 'GROUND',
    title: 'قطار و اتوبوس',
    description: 'مسیرهای زمینی را بررسی کنید و بلیط خود را آسان بخرید.',
    Icon: TrainFront,
  },
  {
    id: 'insurance',
    eyebrow: 'INSURANCE',
    title: 'بیمه مسافرتی',
    description: 'با خیال آسوده سفر کنید و پوشش مناسب سفرتان را انتخاب کنید.',
    Icon: ShieldCheck,
  },
];
