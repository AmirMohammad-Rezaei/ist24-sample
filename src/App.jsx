import { useState } from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';
import Footer from './components/Footer.jsx';
import SearchValidationModal from './components/SearchValidationModal.jsx';
import './styles/app.css';

export default function App() {
  const [modal, setModal] = useState({ open: false, title: '', message: '', type: 'info' });

  const showModal = (nextModal) => setModal({ open: true, ...nextModal });
  const closeModal = () => setModal((current) => ({ ...current, open: false }));

  return (
    <>
      <Header onActionMessage={showModal} />
      <main>
        <HeroSection onSearchMessage={showModal} />
        <ServicesSection />
        <BenefitsSection />
      </main>
      <Footer />
      <SearchValidationModal modal={modal} onClose={closeModal} />
    </>
  );
}
