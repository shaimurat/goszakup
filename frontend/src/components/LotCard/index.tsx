import React, { useState } from 'react';
import { Lot } from '../../interfaces/lot';
import formatDate from '../../utils/formatDate';
import Modal from '../modal/modal'; // Добавляем
import styles from './LotCard.module.css';

interface LotCardProps {
  lot: Lot;
}

const LotCard: React.FC<LotCardProps> = ({ lot }) => {
  const [isOpen, setIsOpen] = useState(false);

  const generateAnnouncementUrl = (lot: Lot): string => {
      return `https://zakup.gov.kz/announcement/${lot.announcement_id}`;
      }


  return (
    <>
      <div className={styles.card} onClick={() => setIsOpen(true)}>
        <div className={styles.header}>
          <h3 className={styles.title}>{lot.name_ru}</h3>
          <div className={styles.price}>
            {lot.total_price.toLocaleString()} ₸
          </div>
        </div>
      </div>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>{lot.name_ru}</h2>
          <p><strong>Организация:</strong> {lot.organization_name}</p>
          <p><strong>Номер лота:</strong> {lot.lot_number}</p>
          <p><strong>Метод закупки:</strong> {lot.purchase_method_name}</p>
          <p><strong>Статус:</strong> {lot.status.name}</p>
          <p><strong>Подача заявок:</strong> {formatDate(lot.offer_start_date)} — {formatDate(lot.offer_end_date)}</p>
          <a href={generateAnnouncementUrl(lot)} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Перейти к объявлению →
          </a>
        </Modal>
      )}
    </>
  );
};

export default LotCard;
