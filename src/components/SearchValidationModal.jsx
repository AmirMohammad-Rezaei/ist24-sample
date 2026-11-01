import { useEffect } from 'react';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';

export default function SearchValidationModal({ modal, onClose }) {
  useEffect(() => {
    if (!modal.open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modal.open, onClose]);

  if (!modal.open) return null;

  const isSuccess = modal.type === 'success';
  const StatusIcon = isSuccess ? CheckCircle2 : AlertCircle;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="feedback-modal" role="dialog" aria-modal="true" aria-labelledby="feedback-title">
        <button className="modal-close icon-button" type="button" onClick={onClose} aria-label="بستن پیام"><X size={19} /></button>
        <span className={`modal-status-icon ${isSuccess ? 'success' : 'error'}`}><StatusIcon size={24} /></span>
        <h2 id="feedback-title">{modal.title}</h2>
        <p>{modal.message}</p>
        {modal.details && <div className="modal-details">{modal.details}</div>}
        <button className="primary-button modal-confirm" type="button" onClick={onClose}>متوجه شدم</button>
      </section>
    </div>
  );
}
