import React, { useState } from 'react';
import { ZakupLotBase } from '../../interfaces/lot';
import formatDate from '../../utils/formatDate';
import Modal from '../modal/modal'; // Добавляем
import styles from './LotCard.module.css';



const getLogoPath = (source: number): string => {
  switch (source) {
    case 1:
      return '/logos/egz.png';
    case 2:
      return '/logos/mw.png';
    case 3:
      return '/logos/samruk.png';
    default:
      return '';
  }
};


interface LotCardProps {
  lot: ZakupLotBase;
}

const LotCard: React.FC<LotCardProps> = ({ lot }) => {
  const [isOpen, setIsOpen] = useState(false);

  const generateAnnouncementUrl = (lot: ZakupLotBase): string => {
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

        <div className={styles.logoWrapper}>
          <img src={getLogoPath(lot.system.id)} alt='logo' className={styles.logo} />
        </div>
      </div>


      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>{lot.name_ru}</h2>
          <p><strong>Организация:</strong> {lot.organization_name}</p>
          <p><strong>Дата публикации:</strong> {formatDate(lot.offer_start_date)}</p>

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
