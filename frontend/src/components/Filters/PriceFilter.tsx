import React from 'react';

interface Props {
  priceFilter: string | null;
  onPriceFilterChange: (value: string | null) => void;
}

const PriceFilter: React.FC<Props> = ({ priceFilter, onPriceFilterChange }) => (
  <div className="filter-group">
    <h2 className="div-title">Фильтр по сумме</h2>
    <label className="price-filter-label">
      <select
        className="price-filter-select"
        value={priceFilter ?? ''}
        onChange={(e) => onPriceFilterChange(e.target.value || null)}
      >
        <option value="">Любая</option>
        <option value="lt150">до 150 000 000 ₸</option>
        <option value="150-250">150 – 250 млн ₸</option>
        <option value="250-500">250 – 500 млн ₸</option>
        <option value="500-1000">500 млн – 1 млрд ₸</option>
        <option value="1000-1500">1 – 1.5 млрд ₸</option>
        <option value="gt1500">свыше 1.5 млрд ₸</option>
      </select>
    </label>
  </div>
);

export default PriceFilter;
