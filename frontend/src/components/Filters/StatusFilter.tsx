import React from 'react';
import SystemButton from '../SystemButton';

interface Props {
  statusId: number | null;
  onStatusChange: (id: number) => void;
}

const StatusFilter: React.FC<Props> = ({ statusId, onStatusChange }) => (
  <div className="filter-group">
    <h2 className="div-title">Выбор статуса лота</h2>
    <div className="filter-buttons">
      <SystemButton label="Опубликован" isActive={statusId === 6} onClick={() => onStatusChange(6)} />
      <SystemButton label="Опубликован (прием заявок)" isActive={statusId === 7} onClick={() => onStatusChange(7)} />
    </div>
  </div>
);

export default StatusFilter;
