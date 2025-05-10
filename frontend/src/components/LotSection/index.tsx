import React from 'react';
import LotCard from '../LotCard';
import { Lot } from '../../interfaces/lot';
import styles from './LotSection.module.css';

interface LotSectionProps {
  title: string;
  lots: Lot[];
}

const LotSection: React.FC<LotSectionProps> = ({ title, lots }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.grid}>
        {lots.map(lot => (
          <LotCard key={lot.id} lot={lot} />
        ))}
      </div>
    </section>
  );
};

export default LotSection;