import React, { useEffect, useState } from 'react';
import LotSection from './components/LotSection';
import { GoszakupLot, MitworkLot, SamrukLot } from './interfaces/lot';
import { fetchLots } from './services/api';
import './styles/global.css';

const App: React.FC = () => {
  const [goszakupLots, setGoszakupLots] = useState<GoszakupLot[]>([]);
  const [mitworkLots, setMitworkLots] = useState<MitworkLot[]>([]);
  const [samrukLots, setSamrukLots] = useState<SamrukLot[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setGoszakupLots(await fetchLots('goszakup'));
      setMitworkLots(await fetchLots('mitwork'));
      setSamrukLots(await fetchLots('samruk'));
    };
    loadData();
  }, []);

  return (
    <div className="app">
      <h1 className="main-title">Система закупок Казахстана</h1>
      
      <LotSection 
        title="Госзакупки (ЭГЗ)" 
        lots={goszakupLots} 
      />
      
      <LotSection 
        title="Коммерческие закупки (Mitwork)" 
        lots={mitworkLots} 
      />
      
      <LotSection 
        title="Корпоративные закупки (Samruk)" 
        lots={samrukLots} 
      />
    </div>
  );
};

export default App;