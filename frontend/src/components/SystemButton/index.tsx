import React from 'react';
import styles from './systemButton.module.css';

interface SystemButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SystemButton: React.FC<SystemButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`${styles.systemButton} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SystemButton;
