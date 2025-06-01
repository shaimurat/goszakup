import React from 'react';
import SystemButton from '../SystemButton';

interface Props {
  selectedSystemIds: number[];
  onToggleSystem: (id: number) => void;
}

const SystemFilter: React.FC<Props> = ({ selectedSystemIds, onToggleSystem }) => (
  <div className="filter-group">
    <h2 className="div-title">Выбор закупщика</h2>
    <div className="filter-buttons">
      <SystemButton label="Госзакуп" isActive={selectedSystemIds.includes(1)} onClick={() => onToggleSystem(1)} />
      <SystemButton label="Mitwork" isActive={selectedSystemIds.includes(2)} onClick={() => onToggleSystem(2)} />
      <SystemButton label="Samruk" isActive={selectedSystemIds.includes(3)} onClick={() => onToggleSystem(3)} />
    </div>
  </div>
);

export default SystemFilter;
