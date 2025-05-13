import {useState} from 'react';
import { Lot } from '../../interfaces/lot';
import styles from './LotCard.module.css';
import formatDate from '../../utils/formatDate';
interface LotCardProps {
  lot: Lot;
}

const generateAnnouncementUrl = (lot: Lot): string => {
  const identifiers = [
    lot.announcement_number_key,
    lot.announcement_number,
    lot.announcement_id?.toString()
  ];

  for (const id of identifiers) {
    if (id && typeof id === 'string') {
      const cleanId = id.split(/[-_]/)[0];
      if (cleanId) return `https://zakup.gov.kz/announcement/${cleanId}`;
    }
  }
  return '#';
};

const LotCard: React.FC<LotCardProps> = ({ lot }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const url = generateAnnouncementUrl(lot);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div 
      className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
      onClick={toggleExpand}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{lot.name_ru}</h3>
        <div className={styles.price}>
          {lot.total_price.toLocaleString()} ₸
        </div>
      </div>

      {isExpanded && (
        <div className={styles.details}>
          <div className={styles.content}>
            <p><strong>Организация:</strong> {lot.organization_name}</p>
            <p><strong>Номер лота:</strong> {lot.lot_number}</p>
            <p><strong>Метод закупки:</strong> {lot.purchase_method_name}</p>
            <p><strong>Статус лота:</strong> {lot.status.name}</p>
            <p><strong>Дата подач заявлений:</strong> {formatDate(lot.offer_start_date)} - {formatDate(lot.offer_end_date)}</p>
        
          </div>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
            onClick={(e) => e.stopPropagation()}
          >
            Подробнее →
          </a>
        </div>
      )}
    </div>
  );
};

export default LotCard;