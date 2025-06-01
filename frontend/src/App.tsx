import React, { useEffect, useState, useCallback } from 'react';
import Filters from './components/Filters/Filters';
import LotSection from './components/LotSection';
import Pagination from './components/pagination';
import { ZakupLotBase } from './interfaces/lot';
import { fetchLots } from './services/api';
import './styles/global.css';
const itemsPerPage = 9;

const App: React.FC = () => {
  const [selectedSystemIds, setSelectedSystemIds] = useState<number[]>([1, 2, 3]);
  const [statusId, setStatusId] = useState<number | null>(6);
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const [zakupLots, setZakupLots] = useState<ZakupLotBase[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [onlyNew, setOnlyNew] = useState(false);

  const lotsNumber = zakupLots.length;
  const handleFilter = useCallback(async () => {
    setIsLoading(true);
    const params: Record<string, any> = {
      system_id__in: selectedSystemIds.join('__'),
    };

    if (statusId !== null) params.status_id = statusId;

    if (priceFilter) {
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

    try {
      const lots = await fetchLots<ZakupLotBase>(params);
      let filteredLots = lots;

      if (onlyNew) {
        const now = new Date();
        const weekAgo = new Date();
        weekAgo.setDate(now.getDate() - 7);

        filteredLots = lots.filter((lot) => {
          const lotDate = new Date(lot.announcement_publish_date);
          return lotDate >= weekAgo && lotDate <= now;
        });
      }
      setZakupLots(filteredLots);
      setCurrentPage(1);
    } catch (error) {
      console.error('Ошибка при загрузке лотов:', error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedSystemIds, statusId, priceFilter, onlyNew]);

  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

  const displayedLots = zakupLots.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="app">
      <h1 className="main-title">Система закупок Казахстана</h1>

      <Filters
        selectedSystemIds={selectedSystemIds}
        onToggleSystem={setSelectedSystemIds}
        statusId={statusId}
        onStatusChange={setStatusId}
        priceFilter={priceFilter}
        onPriceFilterChange={setPriceFilter}
        onlyNew={onlyNew}
        onToggleOnlyNew={setOnlyNew}
      />

      {isLoading ? (
        <div className="loading-indicator">Загрузка...</div>
      ) : (
        <>
          <LotSection title="Закупки" lots={displayedLots} lotsNum={lotsNumber} />
          <Pagination
            totalItems={zakupLots.length}
            page={currentPage}
            itemsPerPage={itemsPerPage}
            onChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
