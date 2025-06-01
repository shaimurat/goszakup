import React from 'react';
import SystemFilter from './SystemFilter';
import StatusFilter from './StatusFilter';
import PriceFilter from './PriceFilter';
import NewLotsFilter from './NewLotsFilter';

interface FiltersProps {
  selectedSystemIds: number[];
  onToggleSystem: (ids: number[]) => void;
  statusId: number | null;
  onStatusChange: (id: number | null) => void;
  priceFilter: string | null;
  onPriceFilterChange: (value: string | null) => void;
   onlyNew: boolean;
  onToggleOnlyNew: (value: boolean) => void;
  
}

const Filters: React.FC<FiltersProps> = ({
  selectedSystemIds,
  onToggleSystem,
  statusId,
  onStatusChange,
  priceFilter,
  onPriceFilterChange,
  onlyNew,
  onToggleOnlyNew,
}) => {
  // Обработчик для переключения системы (добавить/удалить id)
  const toggleSystem = (id: number) => {
    if (selectedSystemIds.includes(id)) {
      onToggleSystem(selectedSystemIds.filter((sid) => sid !== id));
    } else {
      onToggleSystem([...selectedSystemIds, id]);
    }
  };

  return (
    <div className="filters">
      <SystemFilter selectedSystemIds={selectedSystemIds} onToggleSystem={toggleSystem} />
      <StatusFilter statusId={statusId} onStatusChange={onStatusChange} />
      <div className="filter-group">
    <PriceFilter priceFilter={priceFilter} onPriceFilterChange={onPriceFilterChange} />
    <NewLotsFilter onlyNew={onlyNew} onToggleOnlyNew={onToggleOnlyNew} />
  </div>
    </div>
  );
};

export default Filters;
