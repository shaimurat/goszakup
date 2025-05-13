import React, { useEffect, useState } from 'react';
import LotSection from './components/LotSection';
import SystemButton from './components/SystemButton';
import { GoszakupLot, MitworkLot, SamrukLot } from './interfaces/lot';
import { fetchLots } from './services/api';
import './styles/global.css';

const App: React.FC = () => {
  const [selectedSystems, setSelectedSystems] = useState<string[]>(['goszakup', 'mitwork', 'samruk']);
  const [statusId, setStatusId] = useState<number | null>(6);
const [priceFilter, setPriceFilter] = useState<string | null>(null);

  const [goszakupLots, setGoszakupLots] = useState<GoszakupLot[]>([]);
  const [mitworkLots, setMitworkLots] = useState<MitworkLot[]>([]);
  const [samrukLots, setSamrukLots] = useState<SamrukLot[]>([]);

  const toggleSystem = (system: string) => {
    setSelectedSystems((prev) =>
      prev.includes(system)
        ? prev.filter((s) => s !== system)
        : [...prev, system]
    );
  };

  const handleFilter = async () => {
    const params: Record<string, any> = {
      q: 'работа ( строительство, реконструкция, кап.ремонт и тд)',
    };

    if (statusId !== null) params.status_id = statusId;

    if (priceFilter !== null) {
  switch (priceFilter) {
    case 'lt150':
      params.total_price__lte = 150_000_000;
      break;
    case '150-250':
      params.total_price__gte = 150_000_001;
      params.total_price__lte = 250_000_000;
      break;
    case '250-500':
      params.total_price__gte = 250_000_001;
      params.total_price__lte = 500_000_000;
      break;
    case '500-1000':
      params.total_price__gte = 500_000_001;
      params.total_price__lte = 1_000_000_000;
      break;
    case '1000-1500':
      params.total_price__gte = 1_000_000_001;
      params.total_price__lte = 1_500_000_000;
      break;
    case 'gt1500':
      params.total_price__gte = 1_500_000_001;
      break;
  }
}



    if (selectedSystems.includes('goszakup')) {
      const lots = await fetchLots<GoszakupLot>('goszakup', params);
      setGoszakupLots(lots);
    } else {
      setGoszakupLots([]);
    }

    if (selectedSystems.includes('mitwork')) {
      const lots = await fetchLots<MitworkLot>('mitwork', params);
      setMitworkLots(lots);
    } else {
      setMitworkLots([]);
    }

    if (selectedSystems.includes('samruk')) {
      const lots = await fetchLots<SamrukLot>('samruk', params);
      setSamrukLots(lots);
    } else {
      setSamrukLots([]);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [selectedSystems, statusId, priceFilter]);

  return (
    <div className="app">
      <h1 className="main-title">Система закупок Казахстана</h1>

      {/* ФИЛЬТРЫ */}
<div className="filters">
  <div className="filter-group">
    <h2 className="div-title">Выбор закупщика</h2>
    <div className="filter-buttons">
      <SystemButton label="Госзакуп" isActive={selectedSystems.includes('goszakup')} onClick={() => toggleSystem('goszakup')} />
      <SystemButton label="Mitwork" isActive={selectedSystems.includes('mitwork')} onClick={() => toggleSystem('mitwork')} />
      <SystemButton label="Samruk" isActive={selectedSystems.includes('samruk')} onClick={() => toggleSystem('samruk')} />
    </div>
  </div>

  <div className="filter-group">
    <h2 className="div-title">Выбор статуса лота</h2>
    <div className="filter-buttons">
      <SystemButton label="Опубликован" isActive={statusId === 6} onClick={() => setStatusId(6)} />
      <SystemButton label="Опубликован (прием заявок)" isActive={statusId === 7} onClick={() => setStatusId(7)} />
    </div>
  </div>

  <div className="filter-group">
    <h2 className="div-title">Фильтр по сумме</h2>
    <label className="price-filter-label">
      <select
        className="price-filter-select"
        value={priceFilter ?? ''}
        onChange={(e) => setPriceFilter(e.target.value || null)}
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



      </div>

      {/* ДАННЫЕ */}
      {selectedSystems.includes('goszakup') && <LotSection title="Госзакупки (ЭГЗ)" lots={goszakupLots} />}
      {selectedSystems.includes('mitwork') && <LotSection title="Mitwork" lots={mitworkLots} />}
      {selectedSystems.includes('samruk') && <LotSection title="Samruk" lots={samrukLots} />}
    </div>
  );
};

export default App;
