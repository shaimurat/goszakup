import React, { useEffect, useState, useCallback } from 'react';
import styles from './modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, isOpen = true }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]); // ✅ Add `onClose` as a dependency

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [handleClose]); 

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`${styles.overlay} ${isClosing ? styles.closing : ''}`}
      onClick={handleClose}
    >
      <div
        className={`${styles.modal} ${isClosing ? styles.closing : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={handleClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
