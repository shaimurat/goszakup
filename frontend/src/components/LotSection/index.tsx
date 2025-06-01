

import React from 'react';
import LotCard from '../LotCard';
import { ZakupLotBase } from '../../interfaces/lot';
import styles from './LotSection.module.css';
interface LotSectionProps {
  title: string;
  lots: ZakupLotBase[];
  lotsNum: number;
}

const LotSection: React.FC<LotSectionProps> = ({ title, lots, lotsNum }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{title}: {lotsNum} лотов</h2>
      <div className={styles.grid}>
        {lots.map(lot => (
          <LotCard key={lot.id} lot={lot} />
        ))}
      </div>
    </section>
  );
};

export default LotSection;